// pages/category/index.js

'use client';

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";

// Robust fetcher function
const fetcher = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            const error = new Error('Failed to fetch categories');
            error.status = res.status;
            throw error;
        }
        return await res.json();
    } catch (err) {
        if (err instanceof TypeError && err.message === "Failed to fetch") {
            console.warn("Suppressing fetch overlay for category list.");
            const silentError = new Error("Categories API Offline");
            silentError.status = 503;
            throw silentError;
        }
        throw err;
    }
};

const CategoriesIndexPage = ({ headerHeight }) => {
    // Fetch up to 100 categories (adjust per_page if needed)
    const apiUrl = '/api/wp/categories?per_page=100&_embed';

    const { data: categories, error, isLoading, mutate } = useSWR(apiUrl, fetcher);

    // Filter out the "Uncategorized" category (ID 1 is standard in WP)
    const validCategories = categories
        ? categories.filter(cat => cat.slug !== 'uncategorized' && cat.count > 0)
        : [];

    // --- JSON-LD Schema ---
    const categoryCollectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Blog Categories - Ignite Training Institute",
        "description": "A complete list of all blog categories available at Ignite Training Institute, including study guides, exam tips, and subject resources.",
        "url": typeof window !== 'undefined' ? window.location.href : `https://ignitetraininginstitute.com/category`,
    };
    // ----------------------

    // Determine breadcrumb path
    const breadcrumbPath = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: 'Categories', href: '/category' }
    ];

    return (
        <>
            <SEO
                title="All Blog Categories - Ignite Blog"
                description="Explore all academic categories on the Ignite Training Institute blog, from IBDP and AP to general study tips."
            />
            <JsonLd schema={categoryCollectionSchema} />

            <div style={{ minHeight: 'calc(100vh - 200px)', paddingTop: `${headerHeight}px` }}>
                {/* Banner Section (Use a consistent design from your blog/category pages) */}
                <section
                    className="careers-banner fade-in-section is-inview"

                    style={{ animationDelay: "0.3s" }}
                >
                    <div className="dark-overlay"></div>
                    <div className="overlay">
                        <h2
                            className="heading"
                            style={{
                                background: "linear-gradient(90deg, #EDFFF4, #A6EAC7)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            BLOG CATEGORIES
                        </h2>
                        <p className="subHeading">
                            {breadcrumbPath.map((item, index) => (
                                <React.Fragment key={item.name}>
                                    {index > 0 && ' // '}
                                    <Link href={item.href} className='text-white text-decoration-none'>
                                        {item.name}
                                    </Link>
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                </section>

                <section className="ibdpBanner container py-5" data-scroll data-scroll-section>
                    <div className="text-center mb-5">
                        <h3 className="mb-4">Browse Our Topics</h3>
                        <p className="text-muted">Select a category below to view all related blog posts.</p>
                    </div>

                    {isLoading && (
                        <div className="d-flex justify-content-center py-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading categories...</span>
                            </div>
                        </div>
                    )}

                    {error && (
                        <div className="alert alert-danger my-5 p-4 text-center mx-auto" style={{ maxWidth: '600px' }}>
                            <h4>Oops! We couldn't load the categories.</h4>
                            <p>Please check your internet connection or try again later.</p>
                            <button onClick={() => mutate()} className="btn btn-primary mt-3">Retry</button>
                        </div>
                    )}

                    {/* Category Grid/List Layout */}
                    {!isLoading && !error && validCategories.length > 0 && (
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {validCategories.map((category) => (
                                <div className="col" key={category.id}>
                                    <Link
                                        href={`/category/${category.slug}`}
                                        className="card h-100 p-4 border-0 shadow-sm category-card text-decoration-none"
                                    >
                                        <div className="card-body">
                                            <h5 className="card-title text-primary mb-2">{category.name}</h5>
                                            <p className="card-text text-muted small">{category.count} posts</p>
                                            <div
                                                className="card-text category-description text-dark"
                                                dangerouslySetInnerHTML={{ __html: category.description || "No description available." }}
                                            />
                                        </div>
                                        <div className="card-footer bg-white border-0 pt-3">
                                            <span className="btn btn-sm btn-outline-primary">View Posts →</span>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}

                    {!isLoading && validCategories.length === 0 && (
                        <div className="text-center text-muted h4 py-5">
                            No categories were found or published posts are available.
                        </div>
                    )}
                </section>
            </div>
        </>
    );
};

export default CategoriesIndexPage;