#!/bin/bash

# Image Optimization Script for Vite/React Project
# This script converts large images to WebP format and creates optimized versions

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if sharp-cli or imagemagick is available
if command -v sharp-cli &> /dev/null; then
    CONVERTER="sharp"
elif command -v convert &> /dev/null; then
    CONVERTER="imagemagick"
elif command -v cwebp &> /dev/null; then
    CONVERTER="webp"
else
    echo -e "${RED}Error: No image converter found.${NC}"
    echo "Please install one of the following:"
    echo "  - sharp-cli: npm install -g sharp-cli"
    echo "  - imagemagick: brew install imagemagick (Mac) or apt-get install imagemagick (Linux)"
    echo "  - webp: brew install webp (Mac) or apt-get install webp (Linux)"
    exit 1
fi

echo -e "${GREEN}Starting image optimization...${NC}"

# Function to convert image to WebP
convert_to_webp() {
    local input_file="$1"
    local output_file="${input_file%.*}.webp"
    
    # Skip if already WebP
    if [[ "$input_file" == *.webp ]]; then
        return 0
    fi
    
    # Skip if WebP already exists
    if [ -f "$output_file" ]; then
        echo -e "${YELLOW}Skipping $input_file (WebP already exists)${NC}"
        return 0
    fi
    
    echo "Converting: $input_file -> $output_file"
    
    case $CONVERTER in
        sharp)
            sharp-cli -i "$input_file" -o "$output_file" --webp
            ;;
        imagemagick)
            convert "$input_file" -quality 85 -define webp:lossless=false "$output_file"
            ;;
        webp)
            cwebp -q 85 "$input_file" -o "$output_file"
            ;;
    esac
    
    if [ $? -eq 0 ] && [ -f "$output_file" ]; then
        local old_size=$(stat -f%z "$input_file" 2>/dev/null || stat -c%s "$input_file" 2>/dev/null)
        local new_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null)
        local savings=$(echo "scale=2; (1 - $new_size / $old_size) * 100" | bc)
        echo -e "${GREEN}  ✓ Saved ${savings}% (${old_size} -> ${new_size} bytes)${NC}"
    else
        echo -e "${RED}  ✗ Failed to convert $input_file${NC}"
    fi
}

# Large images to optimize (over 300KB)
LARGE_IMAGES=(
    "public/DSC00270.png"
    "public/Copy of _I0B7303.png"
    "public/Copy of _I0B7294.png"
    "public/DSC00655.png"
    "public/IMG_1504-preview.png"
    "public/DSC00310.jpg"
    "public/DSC00429.PNG"
    "public/Copy of _I0B7291.png"
    "public/image (3).jpg"
    "public/upcoming_1.png"
    "public/DSC00287.JPG"
    "public/DSC00012.JPG"
    "public/image (4).jpg"
    "public/WhatsApp Image 2025-03-29 at 14.31.16.png"
    "public/490103190_122106027620827914_5173506189753291620_n_PhotoGrid.png"
    "public/WhatsApp Image 2025-04-06 at 21.54.39.jpg"
    "public/PHOTO-2025-03-29-14-31-16.jpg"
    "public/DSC00009.jpg"
    "public/87c42148-e584-4fcf-b619-b36ab2a66e6e_PhotoGrid.png"
)

# Convert each large image
for img in "${LARGE_IMAGES[@]}"; do
    if [ -f "$img" ]; then
        convert_to_webp "$img"
    else
        echo -e "${YELLOW}Warning: $img not found${NC}"
    fi
done

echo -e "${GREEN}Image optimization complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Review the generated WebP files"
echo "2. Run the code update script to replace image references"
echo "3. Test the website to ensure all images load correctly"

