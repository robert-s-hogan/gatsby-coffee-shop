import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

export default function HowToSourceTheBestBeans() {
  return (
    <Layout
      title="How to Source the Best Beans"
      description="How to Source the Best Beans near you.  Tips to build the best product to keep you customers."
    >
      <section>
        <article>
          <div class="relative overflow-hidden lg:rounded-br-full h-1/6 lg:h-130 w-full mb-12 lg:mb-16">
            <div class="absolute top-0 bottom-0 left-0 right-0 bg-gray-700 opacity-50"></div>
            <div class="absolute h-full w-full flex flex-col items-center justify-center text-gray-800">
              <div class="opacity-80 p-8 rounded-lg bg-yellow-50 z-10">
                <div class="text-center mb-1 lg:mb-2">
                  <span class="uppercase tracking-wider font-semibold text-xs">
                    Improvement
                  </span>
                  <span class="mx-2 lg:mx-3 font-medium">August 20, 2021</span>
                </div>
                <h1 class="text-4xl lg:text-5xl font-semibold text-center mx-4 lg:mx-0">
                  Organic SEO
                </h1>
              </div>
            </div>
            <StaticImage
              class="h-full w-full object-cover"
              src="../images/growth_tips_hero.jpg"
              alt="Plants sprouting out of soil."
            />
          </div>

          <div class="max-w-prose mx-6 lg:mx-auto text-gray-600">
            <p class="mb-12 text-lg lg:text-xl font-semibold text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              eligendi libero sit nihil tempora, totam reprehenderit aliquam
              beatae obcaecati ratione. Libero consequatur cumque magnam ipsam
              quae sequi laudantium pariatur veritatis? Totam reprehenderit
              aliquame.
            </p>
            <p class="mb-4">
              Nunc dictum nec tellus nec hendrerit. Etiam leo felis, congue
              vitae placerat vel, vestibulum id massa. Maecenas cursus, ante sit
              amet placerat rhoncus, risus est auctor diam, in pulvinar magna
              lectus at erat.
            </p>
            <p class="mb-4">
              Nullam eget neque tellus. In tellus odio, pretium ac risus vitae,
              bibendum dignissim lectus. Vestibulum hendrerit libero nec mauris
              feugiat vehicula. Duis malesuada diam tempor odio efficitur, vitae
              faucibus purus ornare.
            </p>
            <p class="mb-4">
              Aenean rhoncus mauris id sapien gravida lobortis. Praesent vel
              eleifend purus. Nulla euismod pharetra massa sit amet vestibulum.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras
              nec semper quam.
            </p>

            <h2 class="text-xl lg:text-2xl mt-12 mb-4 text-gray-800">
              A Secondary Heading
            </h2>
            <p class="mb-4">
              Nunc dictum nec tellus nec hendrerit. Etiam leo felis, congue
              vitae placerat vel, vestibulum id massa. Maecenas cursus, ante sit
              amet placerat rhoncus, risus est auctor diam, in pulvinar magna
              lectus at erat.
            </p>
            <p class="mb-4">
              Nullam eget neque tellus. In tellus odio, pretium ac risus vitae,
              bibendum dignissim lectus. Vestibulum hendrerit libero nec mauris
              feugiat vehicula. Duis malesuada diam tempor odio efficitur, vitae
              faucibus purus ornare.
            </p>
            <p class="mb-4">
              Aenean rhoncus mauris id sapien gravida lobortis. Praesent vel
              eleifend purus. Nulla euismod pharetra massa sit amet vestibulum.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras
              nec semper quam.
            </p>

            <h2 class="text-xl lg:text-2xl mt-12 mb-4 text-gray-800">
              Summary
            </h2>
            <p class="mb-4">
              Nullam eget neque tellus. In tellus odio, pretium ac risus vitae,
              bibendum dignissim lectus. Vestibulum hendrerit libero nec mauris
              feugiat vehicula. Duis malesuada diam tempor odio efficitur, vitae
              faucibus purus ornare.
            </p>
            <p class="mb-4">
              Aenean rhoncus mauris id sapien gravida lobortis. Praesent vel
              eleifend purus. Nulla euismod pharetra massa sit amet vestibulum.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras
              nec semper quam.
            </p>
          </div>
        </article>
      </section>
    </Layout>
  );
}
