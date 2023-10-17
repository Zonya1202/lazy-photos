import React from 'react';
import { useInView } from 'react-intersection-observer';

const Photo = ({ name, photo }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // на каком проценте видимости менять триггер
    triggerOnce: true, // после того как тригер поменялся не менять его
  });
  return (
    <div ref={ref} className="photos__photo-cart">
      {inView ? (
        <img src={photo} alt="gavno" />
      ) : (
        <div className="photos__photo-cart__skeleton"></div>
      )}

      <h4>{name}</h4>
    </div>
  );
};

export default Photo;
