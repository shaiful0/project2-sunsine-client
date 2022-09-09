import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { async } from "@firebase/util";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../Page/Loading";

const ToolsDetails = () => {
  const { toolsId } = useParams();
  const [user] = useAuthState(auth)
  const [tool, setTool] = useState({});
  const { img, price, name: orderName, description, available, minimum_order_quantity } = tool;
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(true);
  const [warning, setWarning] = useState(false);
  const [orderQuantity, setOrderQuantity] = useState(0);
  useEffect(() => {
    setOrderQuantity(minimum_order_quantity);
  }, [minimum_order_quantity]);

  const handleIncreaseQuantity = (e) => {
    e.preventDefault();
    setWarning(false);
    const increaseQunatity = e.target.increaseOrderQuantity.value;
    const updateQuantity = orderQuantity + parseFloat(increaseQunatity);
    if (increaseQunatity > 0) {
      if (updateQuantity <= available) {
        setOrderQuantity(updateQuantity);
      } else {
        setWarning(true);
        toast.warning(
          `Sorry, Our available order quantity is ${available}`
        );
      }
    }
  };

  const handleDecreaseQuantity = (e) => {
    e.preventDefault();
    setWarning(false);
    const decreaseQunatity = e.target.decreaseOrderQuantity.value;
    const updateQuantity = orderQuantity - parseFloat(decreaseQunatity);
    if (decreaseQunatity > 0) {
      if (updateQuantity >= minimum_order_quantity) {
        setOrderQuantity(updateQuantity);
      } else {
        setWarning(true);
        toast.warning(
          `Sorry, Our minimum order quantity is ${minimum_order_quantity}`
        );
      }
    }
  };

  const totalPrice = orderQuantity * price;

  useEffect(() => {
    fetch(`https://nameless-retreat-54411.herokuapp.com/tools/${toolsId}`)
      .then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setTool(data)
      })
  }, [toolsId]);

  if (isLoading) {
    return <Loading></Loading>
  }

  const onSubmit = async (data) => {
    const { name, email, phone, address } = data;
    const order = {
      orderId: toolsId,
      paid: false,
      img,
      orderName,
      orderQuantity,
      totalPrice,
      name,
      email,
      phone,
      address,
    };
    try {
      const response = await axios.post(
        "https://nameless-retreat-54411.herokuapp.com/order",
        order
      );
      if (response.data.insertedId) {
        reset();
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex justify-evenly'>
      <div class="card w-96 h-full bg-slate-200 m-5">
        <figure class="px-10 pt-10">
          <img style={{ height: 150, width: 200 }} src={img} alt="product" class="rounded-2xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{orderName}</h2>
          <p>{description}</p>
          <p>
            <span>Price:</span>{" "}
            <span>${price}</span>
          </p>
          <p>
            <span>minimum order Quantity:</span>{" "}
            <span>{minimum_order_quantity}</span>
          </p>
          <p>
            <span>Total Price</span>{" "}
            <span>{totalPrice}</span>
          </p>
        </div>
        <form
          onSubmit={handleIncreaseQuantity}
          className="flex items-center justify-center"
        >
          <input
            type="number"
            className="rounded-full p-3 text-black font-sans font-semibold border-0 outline-none m-2"
            name="increaseOrderQuantity"
            id="increaseOrderQuantity"
            placeholder="+"
          />
          <input
            className="btn btn-success text-base-100 font-bold text-2xl"
            type="submit"
            value="+"
          />
        </form>
        <form
          onSubmit={handleDecreaseQuantity}
          className="flex items-center justify-center"
        >
          <input
            type="number"
            className="rounded-full p-3 text-black font-sans font-semibold border-0 outline-none m-2"
            name="decreaseOrderQuantity"
            id="decreaseOrderQuantity"
            placeholder="-"
          />
          <input
            className="btn btn-success text-base-100 font-bold text-2xl"
            type="submit"
            value="-"
          />
        </form>
      </div>

      <div class="card w-96 bg-slate-300 text-primary-content m-5">
        <div class="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text text-xl font-bold">Name</span>
              </label>
              <input
                type="text"
                class="border-2 border-base-100 bg-stone-500 outline-0 font-bold rounded-lg p-3 mb-3 w-full"
                {...register('name')}
                name='name'
                id="name"
                readOnly
                value={user?.displayName}
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text text-xl font-bold">Email</span>
              </label>
              <input
                type="text"
                class="border-2 border-base-100 bg-stone-500 outline-0 font-bold rounded-lg p-3 mb-3 w-full"
                {...register('email')}
                name='email'
                id="email"
                readOnly
                value={user?.email}
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text text-xl font-bold">Phone Number</span>
              </label>
              <input
                type="number"
                class="border-2 border-base-100 bg-stone-500 outline-0 font-bold rounded-lg p-3 mb-3 w-full"
                {...register('phone')}
                name='phone'
                id="phone"

              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text text-xl font-bold">Address</span>
              </label>
              <textarea
                type="text"
                class="border-2 border-base-100 bg-stone-500 outline-0 font-bold rounded-lg p-3 mb-3 w-full"
                {...register('address')}
                name='address'
                id="address"
              />
            </div>
            <input className="btn btn-wide " type="submit" value='complite Order' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToolsDetails;