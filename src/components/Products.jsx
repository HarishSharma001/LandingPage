import React from "react";
import Cards from "./Cards";
import Navbars from "./Home/Navbars";
import Pagein from "./ExtraCom/Pagein";
import phone1 from "../assets/phone1.jpg";
import phone2 from "../assets/phone2.jpg";
import phone3 from "../assets/phone3.jpg";
import phone7 from "../assets/phone7.jpg";
import phone5 from "../assets/phone5.jpg";
import phone6 from "../assets/phone6.jpg";
import phone8 from "../assets/phone8.jpg";
import phone10 from "../assets/phone10.jpg";
import ph1 from "../assets/ph1.jpg";
import ph2 from "../assets/ph2.jpg";
import ph3 from "../assets/ph3.jpg";
import ph7 from "../assets/ph7.jpg";
import ph5 from "../assets/ph5.jpg";
import ph6 from "../assets/ph6.jpg";
import ph8 from "../assets/ph8.jpg";
import ph10 from "../assets/ph10.jpg";
import ph9 from "../assets/ph9.jpg";
import p1 from "../assets/p1.jpeg";

const data = [
  {
    id: 1,
    title: "Iphone",
    text: "A Flagship level that comes with best security features and cameras",
    image: phone1,
  },
  {
    id: 2,
    title: "Iphone",
    text: "A Flagship level that comes with best security features and cameras",
    image: phone2,
  },
  {
    id: 3,
    title: "Iphone",
    text: "A Flagship level that comes with best security features and cameras",
    image: phone3,
  },
  {
    id: 4,
    title: "Iphone",
    text: "A Flagship level that comes with best security features and cameras",
    image: phone7,
  },
  {
    id: 5,
    title: "Iphone",
    text: "A Flagship level that comes with best security features and cameras",
    image: phone5,
  },
  {
    id: 6,
    title: "Iphone",
    text: "A Flagship level that comes with best security features and cameras",
    image: phone6,
  },
  {
    id: 7,
    title: "Iphone",
    text: "A Flagship level that comes with best security features and cameras",
    image: phone8,
  },
  {
    id: 9,
    title: "Iphone",
    text: "A Flagship level that comes with best security features and cameras",
    image: phone10,
  },
  {
    id: 10,
    title: "Iphone",
    text: "A Flagship level that comes with best security features and cameras",
    image: ph1,
  },
  {
    id: 11,
    title: "Iphone",
    text: "A Flagship level that comes with best security features and cameras",
    image: ph2,
  },
  {
    id: 12,
    title: "Iphone",
    text: "A Flagship level that comes with best security features and cameras",
    image: ph3,
  },
  {
    id: 13,
    title: "Iphone",
    text: "A Flagship level that comes with best security features and cameras",
    image: ph7,
  },
  {
    id: 14,
    title: "Iphone",
    text: "A Flagship level that comes with best security features and cameras",
    image: ph5,
  },
  {
    id: 15,
    title: "Iphone",
    text: "A Flagship level that comes with best security features and cameras",
    image: ph6,
  },
  {
    id: 16,
    title: "Iphone",
    text: "A Flagship level that comes with best security features and cameras",
    image: ph8,
  },
  {
    id: 17,
    title: "Iphone",
    text: "A Flagship level that comes with best security features and cameras",
    image: ph10,
  },
  {
    id: 18,
    title: "Iphone",
    text: "A Flagship level that comes with best security features and cameras",
    image: ph9,
  },
  {
    id: 19,
    title: "Iphone",
    text: "A Flagship level that comes with best security features and cameras",
    image: ph8,
  },
  {
    id: 20,
    title: "Iphone",
    text: "A Flagship level that comes with best security features and cameras",
    image: p1,
  },
];

const Products = () => {
  return (
    <>
      <div>
        {data.map((item) => {
          return (
            <Cards
              key={item.id}
              title={item.title}
              text={item.text}
              image={item.image}
            />
          );
        })}
      </div>

      <Pagein />
    </>
  );
};

export default Products;
