import React from "react";
import img from "../assets/img/cake1.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">About Us</h1>

      <div className=" flex flex-col lg:flex-row items-center gap-5">
        <div className=" w-full lg:w-2/4">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>
        <div className=" w-full lg:w-2/4 p-4 space-y-3">
          <h2 className=" font-semibold text-3xl">
            What Makes Our Coffee Special?
          </h2>
          <p>
          “We aspire to give happiness through our wholesome, delightful baked goods, crafted with a personal touch 
          and an uncompromising focus on quality.”
          “We are dedicated to enriching our local community through the comforting power of fresh, vibrant, 
          and exquisitely crafted baked goods.”
          </p>
          <p>
          “We strive to celebrate simplicity by creating homemade baked goods that remind customers of a simpler time, while upholding the 
          highest standards of sophistication and taste.”Placing freshness first, we are dedicated to baking daily from scratch using classic recipes and the finest ingredients, 
          offering you unparalleled taste and quality.
          </p>

          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;