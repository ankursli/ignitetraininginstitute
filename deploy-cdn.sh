#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration
S3_BUCKET="iticdn"
S3_PATH="_next/static"
CDN_URL="https://iticdn.s3.ap-south-1.amazonaws.com"

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Next.js CDN Deployment Script${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}Error: AWS CLI is not installed${NC}"
    echo "Please install AWS CLI first:"
    echo "  macOS: brew install awscli"
    echo "  or visit: https://aws.amazon.com/cli/"
    exit 1
fi

# Check if AWS credentials are configured
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}Error: AWS credentials not configured${NC}"
    echo "Please run: aws configure"
    exit 1
fi

# Step 1: Build the application
echo -e "${BLUE}Step 1: Building Next.js application...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}Build failed! Aborting deployment.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Build completed successfully${NC}"
echo ""

# Step 2: Check if .next/static exists
if [ ! -d ".next/static" ]; then
    echo -e "${RED}Error: .next/static directory not found${NC}"
    echo "Make sure the build completed successfully"
    exit 1
fi

# Show CSS files that will be uploaded (including Bootstrap)
echo -e "${BLUE}CSS files to upload (includes Bootstrap + your styles):${NC}"
if [ -d ".next/static/chunks" ]; then
    CSS_FILES=$(find .next/static/chunks -name "*.css" -type f)
    if [ -n "$CSS_FILES" ]; then
        echo "$CSS_FILES" | while read file; do
            SIZE=$(ls -lh "$file" | awk '{print $5}')
            FILENAME=$(basename "$file")
            echo -e "  ${FILENAME} (${SIZE})"
        done
    else
        echo -e "${RED}  No CSS files found in chunks${NC}"
    fi
else
    echo -e "${RED}  No chunks directory found${NC}"
fi
echo ""

# Step 3: Upload to S3
echo -e "${BLUE}Step 2: Uploading static assets to S3...${NC}"
echo "Bucket: s3://${S3_BUCKET}/${S3_PATH}"
echo "CDN URL: ${CDN_URL}/${S3_PATH}"
echo ""

aws s3 sync .next/static s3://${S3_BUCKET}/${S3_PATH} \
  --cache-control "public, max-age=31536000, immutable" \
  --acl public-read \
  --delete \
  --exclude "*.map"

if [ $? -ne 0 ]; then
    echo -e "${RED}Upload failed!${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✓ Assets uploaded successfully${NC}"
echo ""

# Step 4: Verify upload
echo -e "${BLUE}Step 3: Verifying upload...${NC}"
FILE_COUNT=$(aws s3 ls s3://${S3_BUCKET}/${S3_PATH}/ --recursive | wc -l)
echo -e "Total files in S3: ${GREEN}${FILE_COUNT}${NC}"
echo ""

# Step 5: Display summary
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Deployment Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "Your static assets are now available at:"
echo -e "${BLUE}${CDN_URL}/${S3_PATH}/${NC}"
echo ""
echo "Next steps:"
echo "1. Deploy your Next.js application to your hosting provider"
echo "2. Verify assets load from CDN in production"
echo "3. Check browser DevTools → Network tab"
echo ""
echo -e "${BLUE}Note: Run this script after every build to update CDN assets${NC}"
