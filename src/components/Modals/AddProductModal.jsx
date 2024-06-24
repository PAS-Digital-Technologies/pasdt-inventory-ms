import React from "react";
import Modal from "../../common/components/modal/Modal";
import ControlledInput from "../../common/components/fields/ControlledInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ControlledTextarea from "../../common/components/fields/ControllerTextArea";
import Button from "../../common/components/button/Button";

const AddProductModal = ({ name, open, onClose }) => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .max(100, "Name must be at most 100 characters"),

    description: yup
      .string()
      .required("Description is required")
      .max(500, "Description must be at most 500 characters"),

    image: yup.mixed().required("An image is required"),
    //   .test(
    //     "fileSize",
    //     "Image size must be less than 2MB",
    //     (value) => value && value.size <= 2 * 1024 * 1024 // 2MB in bytes
    //   ),
  });

  const { handleSubmit, reset, control, register } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    if (data) {
      console.log("data", data);
      reset();
      onClose();
    }
  };
  return (
    <Modal
      name={name}
      open={open}
      onClose={onClose}
      //   onConfirmationClose={onClose}
    >
      <form className="w-96" onSubmit={handleSubmit(submitForm)}>
        <ControlledInput
          control={control}
          name={"name"}
          type={"text"}
          label={"Name*"}
        />
        <ControlledTextarea
          control={control}
          name={"description"}
          label={"Description*"}
        />
        {/* <ControlledInput name={"image"} control={control} type={"file"} /> */}
        <input type="file" accept="image/*" {...register("image")} />
        <div className="flex justify-end gap-x-2">
          <Button color="red" variant="text" onClick={onClose}>
            Cancel
          </Button>
          <button
            className="uppercase bg-green-400 rounded-md text-xs font-bold text-white px-4"
            color="green"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddProductModal;
