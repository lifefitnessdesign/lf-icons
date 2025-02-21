#!/bin/bash

# Define the folder where files are located
FOLDER_PATH="/Users/calebchesnut/Sites/lf-icons/icons/regular"

# Loop through files in the folder
for FILE in "$FOLDER_PATH"/*; do
  # Extract filename without the path
  BASENAME=$(basename "$FILE")

  # Extract the file extension
  EXTENSION="${BASENAME##*.}"

  # Extract the middle part (the word between the first and last backslash)
  MIDDLE_WORD=$(echo "$BASENAME" | awk -F'/' '{print $2}')

  # Convert the middle word to lowercase
  MIDDLE_WORD_LOWER=$(echo "$MIDDLE_WORD" | tr '[:upper:]' '[:lower:]')

  # Construct new filename by appending "_light" to the middle word
  NEW_NAME="${MIDDLE_WORD_LOWER}_regular.${EXTENSION}"

  # Rename the file
  mv "$FILE" "$FOLDER_PATH/$NEW_NAME"
done

echo "Files have been renamed successfully."