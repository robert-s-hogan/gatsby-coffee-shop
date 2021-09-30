import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

export default function ThankYou() {
    return (
        <Layout>
            <div className="lg:flex justify-center items-center h-full pb-16 lg:pb-0">
                <div className="mx-4 mt-8 lg:mt-0 lg:ml-16">
                    <span className="block uppercase text-sm lg:text-base lg:font-semibold mb-2 lg:mb-4 text-gray-700">
                        Thank you for getting in touch!
                    </span>
                    <h1 className="text-3xl lg:text-5xl text-gray-900 font-medium mb-4 lg:mb-8">
                        We appreciate you contacting us. I will get back in
                        touch with you soon!Have a great day!
                    </h1>
                    <Link
                        className="inline-block uppercase text-sm text-center font-bold px-5 py-3 lg:px-10 lg:py-4 rounded-tr-3xl rounded-bl-3xl bg-gray-900 text-yellow-50 hover:bg-gray-700 focus:ring-2 focus:ring-yellow-300"
                        to="/"
                    >
                        Back
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
