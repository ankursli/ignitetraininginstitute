const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetImage = 'public/images/footerImage.webp';
const outputPath = 'public/images/footerImage-optimized.webp';

async function optimize() {
    try {
        const metadata = await sharp(targetImage).metadata();
        console.log(`Original dimensions: ${metadata.width}x${metadata.height}`);
        console.log(`Original size: ${(fs.statSync(targetImage).size / 1024).toFixed(2)} KB`);

        // It's 452px wide in display, so let's ensure it's not huge
        await sharp(targetImage)
            .resize({ width: 452 })
            .webp({ quality: 80, effort: 6 })
            .toFile(outputPath);

        console.log(`Optimized size: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB`);

        // Replace original
        fs.renameSync(outputPath, targetImage);
        console.log('Replaced original file.');
    } catch (error) {
        console.error('Error optimizing image:', error);
    }
}

optimize();
