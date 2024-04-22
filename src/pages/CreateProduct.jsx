import React from "react";
import Form from "../components/Form";
import { createProduct } from "../utils/api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const { mutate, isPending, isError, isSuccess, data } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      navigate("/userlist");
    },
  });

  // console.log(id);

  const navigate = useNavigate();

  const handleCreateProduct = (userInfo) => {
    mutate(userInfo);
  };

  return (
    <div>
      <Form handleCreateProduct={handleCreateProduct} />
    </div>
  );
};

export default CreateProduct;
