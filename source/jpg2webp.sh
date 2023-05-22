#!/bin/bash

# Set the maximum allowed width and size for the WebP images
# 1920px, 500KB
MAX_WIDTH=1920
MAX_SIZE=500000

FOLDER_PATH='/Users/nanmener/Downloads/cover_img/titanfall'

# Loop through each JPG file in the specified directory and convert it to WebP
#/Users/nanmener/Downloads/cover_img/assassin_c/
for file in "$FOLDER_PATH"/*.jpg; do
    # Get the file name and extension
    filename=$(basename -- "$file")
    extension="${filename##*.}"
    filename="${filename%.*}"

    # Convert the JPG image to WebP
    cwebp -q 100 -resize ${MAX_WIDTH} 0 -size ${MAX_SIZE} "$file" -o "$FOLDER_PATH/$filename.webp"
done