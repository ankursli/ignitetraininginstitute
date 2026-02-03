// scripts/update-categories.js
const fs = require('fs');
const path = require('path');

const WP_API_URL = 'https://api.ignitetraininginstitute.com/wp-json/wp/v2/categories?per_page=100&_fields=slug';
const CONFIG_FILE_PATH = path.join(__dirname, '../next.config.mjs');

async function fetchCategories() {
    try {
        console.log('Fetching categories from WordPress...');

        const response = await fetch(WP_API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const categories = await response.json();

        // Filter out 'uncategorized' and extract slugs
        const categorySlugs = categories
            .filter(cat => cat.slug !== 'uncategorized')
            .map(cat => cat.slug)
            .sort(); // Sort alphabetically for consistency

        console.log(`Fetched ${categorySlugs.length} categories`);

        return categorySlugs;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
}

async function updateConfigFile(categorySlugs) {
    try {
        console.log('Reading next.config.mjs...');

        // Read the current config file
        let configContent = fs.readFileSync(CONFIG_FILE_PATH, 'utf8');

        // Build the new CATEGORY_SLUGS array string
        const newCategorySlugsArray = `const CATEGORY_SLUGS = [\n  '${categorySlugs.join("',\n  '")}',\n];`;

        // Replace the CATEGORY_SLUGS array in the config file
        // Match the pattern: const CATEGORY_SLUGS = [...];
        const categoryRegex = /const CATEGORY_SLUGS = \[[\s\S]*?\];/;

        if (!categoryRegex.test(configContent)) {
            throw new Error('Could not find CATEGORY_SLUGS array in next.config.mjs');
        }

        configContent = configContent.replace(categoryRegex, newCategorySlugsArray);

        // Write the updated content back to the file
        fs.writeFileSync(CONFIG_FILE_PATH, configContent, 'utf8');

        console.log('✅ Successfully updated next.config.mjs with latest categories');
        console.log(`📝 Updated categories: ${categorySlugs.join(', ')}`);

    } catch (error) {
        console.error('Error updating config file:', error);
        throw error;
    }
}

async function main() {
    try {
        const categorySlugs = await fetchCategories();
        await updateConfigFile(categorySlugs);

        console.log('\n🎉 Category update completed successfully!');
        console.log('⚠️  Remember to restart your Next.js server for changes to take effect.');

    } catch (error) {
        console.error('\n❌ Category update failed:', error.message);
        process.exit(1);
    }
}

// Run the script
main();