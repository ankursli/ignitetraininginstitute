const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetImage = 'public/assets/ib-bg.webp';
const outputPath = 'public/assets/ib-bg-optimized.webp';

async function optimize() {
    try {
        const metadata = await sharp(targetImage).metadata();
        console.log(`Original dimensions: ${metadata.width}x${metadata.height}`);
        console.log(`Original size: ${(fs.statSync(targetImage).size / 1024).toFixed(2)} KB`);

        await sharp(targetImage)
            .resize({ width: 600 }) // Resize to mobile width (mostly < 600px)
            .webp({ quality: 75, effort: 6 })
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
