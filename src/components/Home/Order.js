import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`https://nameless-retreat-54411.herokuapp.com/order?Email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }
  }, [user]);

  const handleDelete = id => {
    const sure = window.confirm('are you sure to delete ?')
    if (sure) {
      const url = `https://nameless-retreat-54411.herokuapp.com/order/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const remaining = orders.filter(order => order._id !== id);
          setOrders(remaining)
        })
    }
  }
  return (
    <div>
      <h1>This is order page:{orders.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Order Name</th>
              <th>Order Quantity</th>
              <th>Total Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((o, index) => <tr>
                <th>{index}</th>
                <td>{o.orderName}</td>
                <td>{o.orderQuantity}</td>
                <td>{o.totalPrice}</td>
                <td><button onClick={() => handleDelete(o._id)} className='btn'>Delete</button></td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;