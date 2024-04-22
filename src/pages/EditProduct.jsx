import React from "react";
import Form from "../components/Form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSingleProduct, updateProduct } from "../utils/api";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const singleProductQuery = useQuery({
    queryKey: ["singleProduct", id],
    queryFn: () => {
      return getSingleProduct(id);
    },
    enabled: !!id,
    staleTime: 1000 * 60,
  });

  //   console.log(singleProductQuery);

  const updateMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      navigate("/userlist");
    },
  });

  const handleUpdateProduct = (userInfo) => {
    updateMutation.mutate(userInfo);
  };

  return (
    <div>
      <Form
        handleUpdateProduct={handleUpdateProduct}
        singleProductDetails={singleProductQuery?.data}
      />
    </div>
  );
};

export default EditProduct;
