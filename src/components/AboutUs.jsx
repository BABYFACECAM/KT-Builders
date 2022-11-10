import React from "react";

import aboutPhoto from "../assets/main-photo.jpg";

export const AboutUs = () => {
  return (
    <section className="flex flex-col w-full bg-white md:flex-row mt-8">
      <div className="flex flex-col items-center justify-center w-full p-10 md:w-1/2 lg:p-16 xl:p-24 bg-inherit">
        <h2 className="max-w-lg text-4xl font-light leading-tgiht text-black md:text-3xl lg:text-4xl xl:text-5xl">
          We build homes with a personal touch.
        </h2>
        <p className="max-w-lg mt-5 text-xl font-semibold text-red-600 md:text-base lg:text-xl">
          From dreams to blueprints to reality - KT Builders can get the job
          done.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <img src={aboutPhoto} className="inset-0 object-cover" />
      </div>
    </section>
  );
};
