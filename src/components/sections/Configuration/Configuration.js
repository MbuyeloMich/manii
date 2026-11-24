import React, { useState } from "react";
import ConfigItem from "./ConfigItem";
import ConfigSummary from "./ConfigSummary";
import './configuration.css'
import img1 from '../../../assets/config-1.jpg';
import img2 from '../../../assets/config-2.jpg';
import img3 from '../../../assets/config-3.jpg';
import img4 from '../../../assets/config-4.jpg';
import img5 from '../../../assets/config-5.jpg';
import img6 from '../../../assets/config-6.jpg';
import img7 from '../../../assets/config-7.jpg';
 
const initialData = [
  { type: "3-piece modular", price: 120000, quantity: 0, img: img1 },
  { type: "2-piece modular", price: 80000, quantity: 0, img: img2 },
  { type: "1-piece modular", price: 40000, quantity: 0, img: img3 },
  { type: "Corner section", price: 60000, quantity: 0, img: img4 },
  { type: "Left section", price: 50000, quantity: 0, img: img5 },
  { type: "Right section", price: 50000, quantity: 0, img: img6 },
  { type: "Pouf", price: 30000, quantity: 0, img: img7 },
];

export default function Configuration({ price }) {
 
 

  const [data, setData] = useState(initialData);

  const updateQuantity = (index, change) => {
    setData((prevData) => {
      const newData = [...prevData];
      const newQuantity = newData[index].quantity + change;
      newData[index].quantity =
        newQuantity >= 0 && newQuantity <= 9 ? newQuantity : newData[index].quantity;
      return newData;
    });
  };

  const calculateTotal = () => {
    return price + data.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <section id="configuration">
      <div className="container">
        <div className="text-center">
          <h2>Configure your sofa</h2>
          <span className="text-main small-text text-black up-case">
            Make each module your own and create your ideal
            <br />
            sofa with our modular system
          </span>
        </div>
        <div className="section-layout">
          {data.map((item, index) => (
            <ConfigItem
              key={index}
              item={item}
              index={index}
              updateQuantity={updateQuantity}
            />
          ))}
        </div>
        <ConfigSummary 
        configuration={data.filter((el, i) => el.quantity > 0)}
        totalPrice={calculateTotal()} />
      </div>
    </section>
  );
}
