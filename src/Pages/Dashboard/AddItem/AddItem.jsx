import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="w-full">
      <SectionTitle subHeading={"wha't new "} heading={"add an item"}></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex gap-5">
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-semibold">Recipe Name *</span>
              </div>
              <input
                type="text"
                placeholder="Recipe Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", { required: true, maxLength: 120 })}
              />
            </label>
          </div>

          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Category * </span>
              </div>
              <select className="select select-bordered font-semibold" {...register("category", { required: true })}>
                <option disabled selected>
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
        </div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-semibold">Price*</span>
          </div>
          <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("price", { required: true })} />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe Details *</span>
          </div>
          <textarea className="textarea textarea-bordered h-24" placeholder="Recipe Details" {...register("details", { required: true })}></textarea>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Item image *</span>
          </div>
          <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
        </label>
        <input type="submit" value="Add Items" className="btn my-5 btn-sm" />
      </form>
    </div>
  );
};

export default AddItem;
