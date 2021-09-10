import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout.js";

export default function IndexPage() {
    const data = useStaticQuery(graphql`
        query GetBlogPosts {
            allMdx {
                nodes {
                    id
                    slug
                    frontmatter {
                        title
                    }
                }
            }
        }
    `);
    const posts = data.allMdx.nodes;
    return (
        <Layout>
            <h1>Hello Frontend Masters</h1>
            <Link to="/about">About this site</Link>

            <h2>Check out my recent posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={post.slug}>{post.frontmatter.title}</Link>{" "}
                        <small>posted</small>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}
