import React, { useEffect, useState } from "react";

const OrderTable = ({ order, handleDelete, handleStatusUpdate }) => {
  const { _id, price, serviceName, phone, name, email, service, status } = order;
    const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);

  

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-ghost">X</button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {
                orderService?.img && 
                <img
                src={orderService.img}
                alt="Avatar Tailwind CSS Component"
              />
              }
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50">{price}</div>
          </div>
        </div>
      </td>
      <td>
        {name}
        <br />
        <span className="badge badge-ghost badge-sm">{phone}</span>
      </td>
      <td>{email}</td>
      <th>
        <button onClick={() => handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'PENDING'}</button>
      </th>
    </tr>
  );
};

export default OrderTable;
