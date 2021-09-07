import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/layout.js";

export default function About() {
    return (
        <Layout
            title="About This Site"
            description="More information about this about page."
        >
            <h1>About This Site</h1>
            <Link to="/">Back to Home</Link>{" "}
        </Layout>
    );
}
