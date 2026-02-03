// components/JsonLd.js

import React from 'react';
import Head from 'next/head'; // 👈 Essential for Next.js applications

/**
 * Renders a JSON-LD script tag into the document's <head>.
 * This component should be used on every page where you need specific schema markup.
 * * @param {object} schema - The JavaScript object representing the JSON-LD schema data.
 */
const JsonLd = ({ schema }) => {
    // If no schema is passed, don't render anything
    if (!schema || Object.keys(schema).length === 0) {
        return null;
    }

    // Convert the JavaScript object into a JSON string
    const jsonLdString = JSON.stringify(schema);

    return (
        <Head>
            {/* The script tag must have type="application/ld+json".
        We use dangerouslySetInnerHTML to safely inject the JSON string.
        The 'key' prop is added to help Next.js correctly update the <head> 
        when navigating between pages with different schemas.
      */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLdString }}
                key={`json-ld-${schema['@type'] || 'default'}`}
            />
        </Head>
    );
};

export default JsonLd;