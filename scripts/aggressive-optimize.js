
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
    { p: 'public/assets/ib-bg.webp', q: 65 },       // Aggressive mobile compression
    { p: 'public/assets/ibdp_bg_main.webp', q: 75 }, // Moderate desktop compression
    { p: 'public/assets/bc_bg_main.webp', q: 75 },
    { p: 'public/assets/igcse_bg_main.webp', q: 75 }
];

async function optimize() {
    for (const img of images) {
        const inputPath = path.join(process.cwd(), img.p);
        const tempPath = inputPath.replace('.webp', '-temp.webp');

        try {
            console.log(`Optimizing ${img.p}...`);
            const metadata = await sharp(inputPath).metadata();
            console.log(`Original size: ${metadata.width}x${metadata.height}, ${(fs.statSync(inputPath).size / 1024).toFixed(2)}KB`);

            await sharp(inputPath)
                .webp({
                    quality: img.q,
                    effort: 6, // Max effort for best compression/quality ratio
                    smartSubsample: true
                })
                .toFile(tempPath);

            const oldSize = fs.statSync(inputPath).size;
            const newSize = fs.statSync(tempPath).size;

            console.log(`New size: ${(newSize / 1024).toFixed(2)}KB`);
            console.log(`Saved: ${((oldSize - newSize) / 1024).toFixed(2)}KB`);

            fs.renameSync(tempPath, inputPath);
        } catch (err) {
            console.error(`Error processing ${img.p}:`, err);
        }
    }
}

optimize();
