/* eslint-disable react/prop-types */
import { Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  useAddNewProductMutation,
  useUpdateProductMutation,
} from "../redux/productAPI";
const ProductForm = ({ productData }) => {
  const [addProductAPI, { isLoading: addLoading }] = useAddNewProductMutation();
  const [updateProductAPI, { isLoading: updateLoading }] =
    useUpdateProductMutation();
  const validationSchema = yup.object({
    name: yup.string().required("Required"),
    description: yup.string().required("Required"),
    price: yup.string().required("Required"),
    currentPrice: yup.string().required("Required"),
  });
  const initValues = {
    name: "",
    description: "",
    price: "",
    currentPrice: "",
  };
  const formik = useFormik({
    initialValues: productData ? productData : initValues,
    validationSchema: validationSchema,
    onSubmit: async (values, event) => {
      try {
        const call = productData ? updateProductAPI : addProductAPI;
        const res = await call({ body: values });
        if (res.error) throw res.error.data;

        alert("success");
        if (!productData) {
          event.resetForm();
        }
      } catch (error) {
        alert("error");
        console.log(error);
      }
    },
  });

  return (
    <Stack component="form" spacing={2} onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={(formik.touched.name && formik.errors.name) || " "}
      />
      <TextField
        fullWidth
        id="description"
        name="description"
        label="Description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={
          (formik.touched.description && formik.errors.description) || " "
        }
      />
      <TextField
        fullWidth
        id="price"
        name="price"
        label="Price"
        value={formik.values.price}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={(formik.touched.price && formik.errors.price) || " "}
      />
      <TextField
        fullWidth
        id="currentPrice"
        name="currentPrice"
        label="CurrentPrice"
        value={formik.values.currentPrice}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.currentPrice && Boolean(formik.errors.currentPrice)
        }
        helperText={
          (formik.touched.currentPrice && formik.errors.currentPrice) || " "
        }
      />

      <Button
        mt={4}
        type="submit"
        variant="contained"
        color="info"
        disabled={addLoading || updateLoading}
      >
        {productData ? "Cập nhật" : "Thêm"}
      </Button>
    </Stack>
  );
};

export default ProductForm;
