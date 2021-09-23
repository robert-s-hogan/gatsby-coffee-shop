import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

export default function ThankYou() {
    return (
        <Layout>
            <h1>Thank You</h1>
            <Link to="/">Back</Link>
        </Layout>
    );
}
