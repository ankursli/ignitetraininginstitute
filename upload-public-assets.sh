#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
S3_BUCKET="iticdn"
CDN_URL="https://iticdn.s3.ap-south-1.amazonaws.com"

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Upload Public Assets to CDN${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}Error: AWS CLI is not installed${NC}"
    exit 1
fi

# Check if AWS credentials are configured
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}Error: AWS credentials not configured${NC}"
    exit 1
fi

echo -e "${YELLOW}This will upload your public folder assets to S3:${NC}"
echo "  • /images → s3://${S3_BUCKET}/images"
echo "  • /assets → s3://${S3_BUCKET}/assets"
echo "  • /videos → s3://${S3_BUCKET}/videos"
echo ""
echo -e "${YELLOW}These will be accessible at:${NC}"
echo "  • ${CDN_URL}/images/"
echo "  • ${CDN_URL}/assets/"
echo "  • ${CDN_URL}/videos/"
echo ""

# Upload images folder
if [ -d "public/images" ]; then
    echo -e "${BLUE}Uploading images folder...${NC}"
    aws s3 sync public/images s3://${S3_BUCKET}/images \
      --cache-control "public, max-age=31536000, immutable" \
      --exclude "*.DS_Store"
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Images uploaded${NC}"
    else
        echo -e "${RED}✗ Images upload failed${NC}"
    fi
else
    echo -e "${YELLOW}⚠ No public/images folder found${NC}"
fi

echo ""

# Upload assets folder
if [ -d "public/assets" ]; then
    echo -e "${BLUE}Uploading assets folder...${NC}"
    aws s3 sync public/assets s3://${S3_BUCKET}/assets \
      --cache-control "public, max-age=31536000, immutable" \
      --exclude "*.DS_Store"
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Assets uploaded${NC}"
    else
        echo -e "${RED}✗ Assets upload failed${NC}"
    fi
else
    echo -e "${YELLOW}⚠ No public/assets folder found${NC}"
fi

echo ""

# Upload videos folder
if [ -d "public/videos" ]; then
    echo -e "${BLUE}Uploading videos folder...${NC}"
    aws s3 sync public/videos s3://${S3_BUCKET}/videos \
      --cache-control "public, max-age=31536000, immutable" \
      --exclude "*.DS_Store"
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Videos uploaded${NC}"
    else
        echo -e "${RED}✗ Videos upload failed${NC}"
    fi
else
    echo -e "${YELLOW}⚠ No public/videos folder found${NC}"
fi

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Public Assets Upload Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "Your public assets are now available at:"
echo -e "${BLUE}${CDN_URL}/images/${NC}"
echo -e "${BLUE}${CDN_URL}/assets/${NC}"
echo -e "${BLUE}${CDN_URL}/videos/${NC}"
echo ""
echo -e "${YELLOW}Note: Update your code to use CDN URLs for images${NC}"
