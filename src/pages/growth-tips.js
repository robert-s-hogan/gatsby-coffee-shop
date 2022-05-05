import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

import "../styles/index.css";

export default function GrowthTips() {
  return (
    <Layout
      title="Growth Tips"
      description="Here are some posts to help with running a local coffee shop."
    >
      <div className="pt-24 pb-40 lg:pt-40 lg:pb-60 flex justify-center">
        <ul className="mx-8 w-full md:mx-auto md:w-11/12 lg:mx-auto lg:w-2/3 xl:w-1/2">
          <Link
            className="inline-block bg-white rounded-md transition-all duration-300 hover:bg-yellow-100 shadow-sm p-4 lg:p-8  mb-16 md:mb-12 border  border-gray-200"
            to="/how-to-use-organic-seo"
          >
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-5">
              <div className="flex min-h-0 flex-col col-start-1 col-end-3 md:mr-6">
                <div className="mt-2 md:mt-0">
                  <span className="uppercase font-semibold text-gray-700 text-xs">
                    Ideas
                  </span>
                  <span className="text-gray-400 mx-2 font-medium text-sm">
                    August 20, 2021
                  </span>
                </div>
                <h1 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
                  How to Use Organic SEO
                </h1>
                <p className="text-sm mb-6 flex-grow text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus eligendi libero sit nihil tempora, totam
                  reprehenderit aliquam beatae obcaecati ratione. Libero
                  consequatur cumque magnam ipsam quae sequi laudantium pariatur
                  veritatis?
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      className="w-full h-full object-cover object-bottom"
                      src="../images/writer.png"
                      placeholder="dominantColor"
                      alt="A smiling female George Orwell."
                    />
                  </div>
                  <div className="ml-2 text-xs">
                    <span className="block font-semibold text-gray-700">
                      John Something
                    </span>
                    <span className="block font-medium text-gray-500">
                      Editor
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-md overflow-hidden h-48 lg:h-full lg:min-h-0 lg:col-start-3 lg:col-end-6">
                <StaticImage
                  className="w-full h-full object-cover object-bottom"
                  src="../images/growth_tips_hero.jpg"
                  placeholder="dominantColor"
                  alt="Waves breaking on a perfect shore."
                />
              </div>
            </div>
          </Link>

          <div className="md:flex">
            <div className="flex flex-col md:w-1/2 md:mr-4">
              <Link
                to="/how-to-source-the-best-beans"
                className="inline-block bg-white rounded-md transition-all duration-300 hover:bg-yellow-100 shadow-sm p-4  mb-16 md:mb-12 border  border-gray-200"
              >
                <div className="rounded-md overflow-hidden h-48 lg:h-72">
                  <StaticImage
                    className="h-full w-full object-cover rounded-md"
                    src="../images/post_2.jpg"
                    placeholder="dominantColor"
                    alt="A cool rubber duck in a blue swimming pool."
                  />
                </div>
                <div className="flex flex-col ">
                  <div className="mt-2">
                    <span className="uppercase font-semibold text-gray-700 text-xs">
                      Productivity
                    </span>
                    <span className="text-gray-400 mx-2 font-medium text-sm">
                      Jan 9, 2021
                    </span>
                  </div>
                  <h2 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
                    How to Source the Best Beans
                  </h2>
                  <p className="text-sm mb-6 flex-grow text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus eligendi libero sit nihil tempora, totam
                    reprehenderit aliquam beatae obcaecati ratione. Libero
                    consequatur cumque magnam ipsam quae sequi laudantium
                    pariatur veritatis?{" "}
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                      <StaticImage
                        className="w-full h-full object-cover object-bottom"
                        src="../images/writer-3.png"
                        placeholder="dominantColor"
                        alt="A smiling Satoshi Nakamoto."
                      />
                    </div>
                    <div className="ml-2 text-xs">
                      <span className="block font-semibold text-gray-700">
                        Kyle Chasse
                      </span>
                      <span className="block font-medium text-gray-500">
                        Chief Technical Writer
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex flex-col md:w-1/2 md:ml-4">
              <Link
                to="/handling-fiery-clients"
                className="inline-block bg-white rounded-md transition-all duration-300 hover:bg-yellow-100 shadow-sm p-4  mb-16 md:mb-12 border  border-gray-200"
              >
                <div className="rounded-md overflow-hidden h-48 lg:h-72">
                  <StaticImage
                    className="h-full w-full object-cover rounded-md"
                    src="../images/post_3.jpg"
                    alt="A blue hotel swimming pool flanked by two palm trees."
                    placeholder="dominantColor"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="mt-2">
                    <span className="uppercase font-semibold text-gray-700 text-xs">
                      Advice
                    </span>
                    <span className="text-gray-400 mx-2 font-medium text-sm">
                      Dec 2, 2020
                    </span>
                  </div>
                  <h2 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
                    Handling Fiery Clients
                  </h2>
                  <p className="text-sm mb-6 flex-grow text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus eligendi libero sit nihil tempora, totam
                    reprehenderit aliquam beatae obcaecati ratione. Libero
                    consequatur cumque magnam ipsam quae sequi laudantium
                    pariatur veritatis?
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                      <StaticImage
                        className="w-full h-full object-cover object-bottom"
                        src="../images/writer-2.png"
                        placeholder="dominantColor"
                        alt="A smiling female Jack Johnson."
                      />
                    </div>
                    <div className="ml-2 text-xs">
                      <span className="block font-semibold text-gray-700">
                        Obi-Wan Kenobi
                      </span>
                      <span className="block font-medium text-gray-500">
                        OG Psychologist
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </Layout>
  );
}
