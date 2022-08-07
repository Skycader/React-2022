import { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";
import {ErrorMessage} from '../components/ErrorMessage'
const productData: IProduct = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 42,
    count: 10,
  },
};


interface  CreateProductProps {
    onCreate: (product: IProduct) => void
}

export default function CreateProduct({onCreate}: CreateProductProps) {
  const [value, setValue] = useState("");
  const [error,setError] = useState('')
  const submitHandler = async (event: React.FormEvent) => {
    setError('')
    event.preventDefault();

    if (value.trim().length === 0) {
        setError('Please enter valid title')
        return
    }
    productData.title = value;
    const response = await axios.post("https://fakestoreapi.com/products", productData);

    onCreate(response.data)
  };

  const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      ></input>

      {error && <ErrorMessage error={error}/>}

      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:text-white"
      >
        Create
      </button>
    </form>
  );
}
