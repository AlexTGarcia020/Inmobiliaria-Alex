import React, { useState, useEffect } from "react";

const AnimatedText = () => {
  const texts = ["Ventas", "Alquileres", "Administraciones", "Asesoramientos"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return <span className="animated-text">{texts[index]}</span>;
};

export default AnimatedText;
