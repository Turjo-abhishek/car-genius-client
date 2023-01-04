import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider/Authprovider';

const Checkout = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext);
    const {title, price, _id} = service;

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        
        const order = {
            service: _id,
            serviceName: title,
            price,
            name,
            phone,
            email,
            message
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Order placed')
            }
            form.reset();
        })
        .catch(error => console.error(error));
    }
    return (
        <div>
            <h2 className='text-5xl my-5'>You are about to take service: {title}</h2>
            <h2 className='text-3xl mb-5'>Price: {price}</h2>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
                <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" />
                <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" />
                <input name='email' type="text" placeholder="Your Email" className="input input-bordered w-full" defaultValue={user?.email} readOnly/>
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full my-5" placeholder="Your Message"></textarea>
                <input className='btn' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default Checkout;