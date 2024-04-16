import React from "react";
import img1 from "../assets/img/strawberry.jpg";
import img2 from "../assets/img/cupcake2.png";
import img3 from "../assets/img/brownies.jpg";
import img4 from "../assets/img/donuts.jpg";
import img5 from "../assets/img/layercake.jpg";
import img6 from "../assets/img/jar cake.jpg";
import img7 from "../assets/img/breads.jpg";
import img8 from "../assets/img/cookies.jpg";
import ProductCard from "../layouts/ProductCard";

const Product = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
        Our Products
      </h1>

      <div className=" flex flex-col lg:flex-row gap-12 justify-center">
        <ProductCard img={img1} title="Cakes" />
        <ProductCard img={img2} title="Cup Cakes" />
        <ProductCard img={img3} title="Brownies" />
        <ProductCard img={img4} title="Donuts" />
        <ProductCard img={img5} title="Jar Cake" />
        <ProductCard img={img6} title="Layer cake" />
        <ProductCard img={img7} title="Breads" />
        <ProductCard img={img8} title="Cookies" />
      </div>
    </div>
  );
};

export default Product;