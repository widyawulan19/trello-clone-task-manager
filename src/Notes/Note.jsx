import React from 'react';
import { HiOutlineArrowUp } from "react-icons/hi";

const Hero = () => {
  const featuresData = [
    {
      id: 1,
      title: "Drag & Drop",
      description: "Pindahkan kartu antar kolom dengan mudah.",
      icon: <HiOutlineArrowUp /> // langsung taruh JSX di sini
    },
    {
      id: 2,
      title: "Realtime Update",
      description: "Update terlihat langsung tanpa reload.",
      icon: <HiOutlineArrowUp />
    }
  ];

  return (
    <section>
      <h1>Features</h1>
      <ul>
        {featuresData.map((feature) => (
          <li key={feature.id}>
            <span style={{ fontSize: '24px', marginRight: '8px' }}>
              {feature.icon}
            </span>
            <strong>{feature.title}</strong> - {feature.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hero;
