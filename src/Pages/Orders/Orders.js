import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/Authprovider/Authprovider";
import OrderTable from "./OrderTable";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('genius-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const ifDelete = window.confirm("Are you sure to delete?");
    if (ifDelete) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
            if(data?.deletedCount > 0){
                alert('deleted order successfully');
                const remaining = orders?.filter(order => order?._id !== id);
                setOrders(remaining);
            }
        });
    }
  };

  const handleStatusUpdate = id => {
    fetch(`http://localhost:5000/orders/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify({status: "APPROVED"})
    })
    .then(res => res.json())
    .then(data => {
        const remaining = orders?.filter(odr => odr?._id !== id);
        const approving = orders?.find(odr => odr?._id === id);
        approving.status = "APPROVED";
        const newOrders = [approving, ...remaining];
        setOrders(newOrders);
    })
  }

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <OrderTable
                key={order?._id}
                order={order}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
              ></OrderTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
