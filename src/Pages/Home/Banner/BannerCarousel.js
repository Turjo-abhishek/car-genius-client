import React from "react";
import './BannerCarousel.css';

const BannerCarousel = ({slide}) => {
    const {image, id, next, previous} = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="gradient-img">
        <img src={image} alt="" className="w-full  rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 gap-3 right-5 bottom-0">
        <a href={`#slide${previous}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 gap-3 left-24 top-1/4">
        <h1 className="text-white font-bold leading-none text-6xl ">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 gap-3 w-2/5 left-24 top-1/2">
        <p className="text-white text-xl ">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 gap-3 left-24 top-2/3">
        <button className="btn btn-warning">Discover More</button>
        <button className="btn btn-outline btn-error">Latest Project</button>
      </div>
    </div>
  );
};

export default BannerCarousel;
