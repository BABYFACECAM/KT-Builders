import React from "react";

import backyardPhoto from "../assets/backyard-shot.jpg";
import denPhoto from "../assets/den-shot.jpg";
import fullShower from "../assets/fuller-shower-shot.jpg";
import insidePhoto from "../assets/inside-view.jpg";
import kitchenPhoto from "../assets/kitchen-shot.jpg";
import mainPhoto from "../assets/main-photo.jpg";
import showerPhoto from "../assets/shower-shot.jpg";

export const Gallery = () => {
  return (
    <section class="text-gray-600 body-font bg-gray-50">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex w-full mb-20 flex-wrap">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            View our recent project
          </h1>
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src={denPhoto}
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src={insidePhoto}
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src={kitchenPhoto}
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src={fullShower}
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src={showerPhoto}
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src={backyardPhoto}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mb-12 text-center">
        <button
          href="#"
          class="mt-8 inline-flex items-center rounded border border-red-700 bg-red-600 px-8 py-3 text-white hover:bg-black focus:outline-none focus:ring active:text-red-600"
        >
          <span class="text-sm font-medium"> View Our Projects </span>

          <svg
            class="ml-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
