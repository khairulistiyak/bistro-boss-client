import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
  const axiosSecure = useAxiosSecure();
  // console.log(img_hosting_token);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imageUrl = imgResponse.data.display_url;
          console.log(data, imageUrl);
          const { category, name, price, recipe, image } = data;
          const newItem = { name, price: parseFloat(price), recipe, image: imageUrl, category };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Menu item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  console.log(errors);
  return (
    <div className="">
      <SectionTitle subHeading={"wha't new "} heading={"add an item"}></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">Recipe Name *</span>
            </div>
            <input
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full "
              {...register("name", { required: true, maxLength: 120 })}
            />
          </label>
        </div>

        <div className="md:flex gap-5">
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Category * </span>
              </div>
              <select className="select select-bordered font-semibold" {...register("category", { required: true })}>
                <option disabled defaultValue="selected item">
                  Select item
                </option>
                <option>Pizza</option>
                <option>Soup</option>
                <option>Salad</option>
                <option>Dessert</option>
                <option>Drinks</option>
              </select>
            </label>
          </div>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">Price*</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("price", { required: true })}
            />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe Details *</span>
          </div>
          <textarea className="textarea textarea-bordered h-24" placeholder="Recipe Details" {...register("recipe", { required: true })}></textarea>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Item image *</span>
          </div>
          <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image", { required: true })} />
        </label>
        <input type="submit" value="Add Items" className="btn my-5 btn-sm" />
      </form>
    </div>
  );
};

export default AddItem;
