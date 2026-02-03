#!/bin/bash

# VIDEO POSTER EXTRACTION SCRIPT
# This script extracts a high-quality poster frame from your hero video

VIDEO_PATH="public/videos/hero-banner-video2.mp4"
OUTPUT_DIR="public/images"
POSTER_NAME="hero-poster"

echo "========================================="
echo "VIDEO POSTER EXTRACTION SCRIPT"
echo "========================================="
echo ""

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "Error: ffmpeg is not installed"
    echo ""
    echo "To install ffmpeg:"
    echo "  Ubuntu/Debian: sudo apt-get install ffmpeg"
    echo "  macOS: brew install ffmpeg"
    echo "  Windows: Download from https://ffmpeg.org/download.html"
    echo ""
    exit 1
fi

# Check if video exists
if [ ! -f "$VIDEO_PATH" ]; then
    echo "Error: Video file not found at $VIDEO_PATH"
    echo "Please update VIDEO_PATH in this script to match your video location"
    exit 1
fi

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

echo "Extracting poster frame from video..."
echo "Video: $VIDEO_PATH"
echo ""

# Extract frame at 1 second (adjust -ss value to get best frame)
# You can change -ss 1 to -ss 2, -ss 3, etc. to get different frames
ffmpeg -i "$VIDEO_PATH" \
    -ss 1 \
    -vframes 1 \
    -vf "scale=1920:-2" \
    -q:v 2 \
    "$OUTPUT_DIR/${POSTER_NAME}.webp" \
    -y

if [ $? -eq 0 ]; then
    echo "Poster frame extracted: $OUTPUT_DIR/${POSTER_NAME}.webp"
    echo ""
    
    # Convert to WebP for better compression
    if command -v cwebp &> /dev/null; then
        echo "Converting to WebP format..."
        cwebp -q 90 "$OUTPUT_DIR/${POSTER_NAME}.webp" -o "$OUTPUT_DIR/${POSTER_NAME}.webp"
        
        if [ $? -eq 0 ]; then
            echo "WebP created: $OUTPUT_DIR/${POSTER_NAME}.webp"
            
            # Get file sizes
            JPG_SIZE=$(du -h "$OUTPUT_DIR/${POSTER_NAME}.webp" | cut -f1)
            WEBP_SIZE=$(du -h "$OUTPUT_DIR/${POSTER_NAME}.webp" | cut -f1)
            
            echo ""
            echo "File sizes:"
            echo "  JPEG: $JPG_SIZE"
            echo "  WebP: $WEBP_SIZE"
        fi
    else
        echo "Note: cwebp not found, skipping WebP conversion"
        echo "To install: sudo apt-get install webp (Ubuntu) or brew install webp (macOS)"
    fi
    
    echo ""
    echo "========================================="
    echo "SUCCESS!"
    echo "========================================="
    echo ""
    echo "Next steps:"
    echo "1. Review the poster image at: $OUTPUT_DIR/${POSTER_NAME}.webp"
    echo "2. If you want a different frame, edit this script and change '-ss 1' to '-ss 2' or '-ss 3'"
    echo "3. Use the optimized Hero component I created (Hero.optimized.js)"
    echo "4. The Hero component will use hero-poster.webp as the LCP element"
    echo ""
else
    echo ""
    echo "Error: Failed to extract poster frame"
    exit 1
fi
