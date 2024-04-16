import React from "react";
import img1 from "../assets/img/vinila caek.jpg";
import img2 from "../assets/img/redvelvatecake.jpg";
import img3 from "../assets/img/fruitcake.jpg";
import img4 from "../assets/img/cocalatecookies.jpg";
import img5 from "../assets/img/cream cookies.jpg";
import img6 from "../assets/img/cheescake.jpg";
import img7 from "../assets/img/cup cake.jpg";
import img8 from "../assets/img/decorated-christmas-sugar-cookies-2.jpg";
import img9 from "../assets/img/foundent cake.jpg";
import img10 from "../assets/img/img1.jpg";
import img11 from "../assets/img/jar cake.jpg";
import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl mt-24 mb-8">
        Our Menu
      </h1>

      <div className=" flex flex-wrap pb-8 gap-8 justify-center">
        <MenuCard img={img1} title="vinila cake" />
        <MenuCard img={img2} title="red valvate cake" />
        <MenuCard img={img3} title="fruit cake" />
        <MenuCard img={img4} title="cocalate cookies" />
        <MenuCard img={img5} title="cream cookies" />
        <MenuCard img={img6} title="cheese cake" />
        <MenuCard img={img7} title="cup cakes" />
        <MenuCard img={img8} title="shape cookies" />
        <MenuCard img={img9} title="fondand cake" />
        <MenuCard img={img10} title=" cocalate Brownise" />
        <MenuCard img={img11} title="jar cake" />

      </div>
    </div>
  );
};

export default Menu;