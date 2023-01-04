import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { img, title, price, _id } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} className="rounded-lg" style={{height: '250px'}} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{title}</h2>
        <div>
          <p className="text-xl text-orange-600 font-semibold">${price}</p>
          <div className="card-actions justify-end">
            <Link to={`/services/${_id}`}><button className="btn btn-primary">Buy Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
