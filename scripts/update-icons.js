const fs = require('fs');
const path = require('path');

const iconDir = path.join(__dirname, '..', 'icons');
const outputFilePath = path.join(__dirname, '..', 'src', 'icons.json');

const getIconMetadata = (fileName) => {
  const [name, weightWithExt] = fileName.split('-');
  const weight = weightWithExt.replace('.svg', '');
  return {
    name,
    weight,
    url: `https://raw.githubusercontent.com/lifefitnessdesign/lf-icons/icons/${fileName}`
  };
};

const updateIconsJson = () => {
  fs.readdir(iconDir, (err, files) => {
    if (err) {
      console.error('Error reading icons directory:', err);
      process.exit(1);
    }

    const icons = files
      .filter(file => file.endsWith('.svg'))
      .map(getIconMetadata);

    fs.writeFile(outputFilePath, JSON.stringify(icons, null, 2), (err) => {
      if (err) {
        console.error('Error writing icons.json:', err);
        process.exit(1);
      }

      console.log('icons.json updated successfully.');
    });
  });
};

updateIconsJson();