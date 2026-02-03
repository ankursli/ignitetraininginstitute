const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const PUBLIC_DIR = path.join(process.cwd(), 'public', 'images');
const BACKUP_DIR = path.join(process.cwd(), 'public', 'images', 'originals');

const SUPPORTED_FORMATS = ['.webp', '.jpeg', '.webp', '.gif', '.webp'];

const OPTIMIZATION_CONFIG = {
  webp: {
    quality: 85,
    effort: 6,
  },
  avif: {
    quality: 80,
    effort: 4,
  },
  jpeg: {
    quality: 85,
    progressive: true,
    mozjpeg: true,
  },
  png: {
    quality: 85,
    compressionLevel: 9,
    progressive: true,
  }
};

async function ensureDir(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function getFileSize(filePath) {
  const stats = await fs.stat(filePath);
  return (stats.size / 1024).toFixed(2);
}

async function optimizeImage(filePath, fileName) {
  const ext = path.extname(fileName).toLowerCase();

  if (!SUPPORTED_FORMATS.includes(ext)) {
    console.log(`Skipping ${fileName} (unsupported format)`);
    return null;
  }

  const baseName = path.basename(fileName, ext);
  const originalSize = await getFileSize(filePath);

  console.log(`\nProcessing: ${fileName} (${originalSize} KB)`);

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    console.log(`  Dimensions: ${metadata.width}x${metadata.height}`);

    const backupPath = path.join(BACKUP_DIR, fileName);
    await ensureDir(BACKUP_DIR);

    try {
      await fs.access(backupPath);
      console.log(`  Backup already exists, skipping backup`);
    } catch {
      await fs.copyFile(filePath, backupPath);
      console.log(`  Backed up to: originals/${fileName}`);
    }

    const webpPath = path.join(PUBLIC_DIR, `${baseName}.webp`);
    await image
      .webp(OPTIMIZATION_CONFIG.webp)
      .toFile(webpPath);

    const webpSize = await getFileSize(webpPath);
    const webpSavings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    console.log(`  Created WebP: ${baseName}.webp (${webpSize} KB) - ${webpSavings}% smaller`);

    const avifPath = path.join(PUBLIC_DIR, `${baseName}.avif`);
    try {
      await image
        .avif(OPTIMIZATION_CONFIG.avif)
        .toFile(avifPath);

      const avifSize = await getFileSize(avifPath);
      const avifSavings = ((originalSize - avifSize) / originalSize * 100).toFixed(1);
      console.log(`  Created AVIF: ${baseName}.avif (${avifSize} KB) - ${avifSavings}% smaller`);
    } catch (avifError) {
      console.log(`  AVIF creation skipped (not supported on this system)`);
    }

    if (ext === '.webp' || ext === '.jpeg') {
      const optimizedPath = path.join(PUBLIC_DIR, `${baseName}-optimized${ext}`);
      await image
        .jpeg(OPTIMIZATION_CONFIG.jpeg)
        .toFile(optimizedPath);

      const optimizedSize = await getFileSize(optimizedPath);
      const jpegSavings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      console.log(`  Created optimized JPEG: ${baseName}-optimized${ext} (${optimizedSize} KB) - ${jpegSavings}% smaller`);
    }

    if (ext === '.webp') {
      const optimizedPath = path.join(PUBLIC_DIR, `${baseName}-optimized${ext}`);
      await image
        .webp(OPTIMIZATION_CONFIG.webp)
        .toFile(optimizedPath);

      const optimizedSize = await getFileSize(optimizedPath);
      const pngSavings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      console.log(`  Created optimized PNG: ${baseName}-optimized${ext} (${optimizedSize} KB) - ${pngSavings}% smaller`);
    }

    return {
      fileName,
      originalSize: parseFloat(originalSize),
      webpSize: parseFloat(webpSize),
      savings: parseFloat(webpSavings),
    };
  } catch (error) {
    console.error(`  Error optimizing ${fileName}:`, error.message);
    return null;
  }
}

async function processDirectory(dir) {
  const files = await fs.readdir(dir);
  const results = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory()) {
      if (file === 'originals') continue;

      console.log(`\nEntering directory: ${file}`);
      const subResults = await processDirectory(filePath);
      results.push(...subResults);
    } else {
      const result = await optimizeImage(filePath, file);
      if (result) results.push(result);
    }
  }

  return results;
}

async function generateReport(results) {
  const totalOriginalSize = results.reduce((sum, r) => sum + r.originalSize, 0);
  const totalWebpSize = results.reduce((sum, r) => sum + r.webpSize, 0);
  const totalSavings = totalOriginalSize - totalWebpSize;
  const averageSavings = (totalSavings / totalOriginalSize * 100).toFixed(1);

  console.log('\n========================================');
  console.log('OPTIMIZATION REPORT');
  console.log('========================================');
  console.log(`Total files processed: ${results.length}`);
  console.log(`Original total size: ${totalOriginalSize.toFixed(2)} KB`);
  console.log(`WebP total size: ${totalWebpSize.toFixed(2)} KB`);
  console.log(`Total savings: ${totalSavings.toFixed(2)} KB (${averageSavings}%)`);
  console.log('========================================\n');

  console.log('PRIORITY IMAGES (largest savings):');
  const sortedResults = results.sort((a, b) =>
    (b.originalSize - b.webpSize) - (a.originalSize - a.webpSize)
  );

  sortedResults.slice(0, 10).forEach((result, index) => {
    const savingsKB = (result.originalSize - result.webpSize).toFixed(2);
    console.log(`${index + 1}. ${result.fileName}: ${savingsKB} KB saved (${result.savings}%)`);
  });

  console.log('\n========================================');
  console.log('NEXT STEPS:');
  console.log('========================================');
  console.log('1. Update image references in your code to use .webp extensions');
  console.log('2. Use Next.js Image component with formats prop:');
  console.log('   <Image src="/images/example.webp" ... />');
  console.log('3. Original images are backed up in /public/images/originals/');
  console.log('4. Test all pages to ensure images load correctly');
  console.log('5. Delete -optimized versions if you prefer to use WebP only');
  console.log('========================================\n');
}

async function main() {
  console.log('========================================');
  console.log('IMAGE OPTIMIZATION SCRIPT');
  console.log('========================================\n');
  console.log(`Processing directory: ${PUBLIC_DIR}\n`);

  try {
    await fs.access(PUBLIC_DIR);
  } catch {
    console.error(`Error: Directory ${PUBLIC_DIR} does not exist`);
    process.exit(1);
  }

  const results = await processDirectory(PUBLIC_DIR);

  if (results.length > 0) {
    await generateReport(results);
  } else {
    console.log('\nNo images were processed.');
  }
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
