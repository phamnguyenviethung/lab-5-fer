/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
function InputField({
  isError,
  label,
  value,
  handleInputChange,
  type,
  errorMessage,
  name,
}) {
  return (
    <FormControl isInvalid={isError} mb={2}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        value={value}
        onChange={handleInputChange}
        name={name}
        placeholder={label}
        border="1px solid"
        borderColor="purple.400"
        required
        _focusVisible={{}}
      />
      {isError && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
}
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      content: "",
    },
    validationSchema: yup.object({
      fullName: yup.string().required("Required"),
      content: yup.string().required("Required"),
      email: yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  console.log(formik.touched.content && formik.errors.content);

  return (
    <Box w="full">
      <InputField
        type="text"
        handleInputChange={formik.handleChange}
        name="fullName"
        label="Tên"
        value={formik.values.fullName}
        isError={formik.touched.fullName && formik.errors.fullName}
        errorMessage={formik.errors["fullName"]}
      />
      <InputField
        type="email"
        handleInputChange={formik.handleChange}
        name="email"
        value={formik.values.email}
        isError={formik.touched.email && formik.errors.email}
        label="Email"
        errorMessage={formik.errors["email"]}
      />
      <FormLabel>Nội dung</FormLabel>
      <Textarea
        isInvalid={formik.touched.content && formik.errors.content}
        name="content"
        required
        value={formik.values.content}
        onChange={(e) => formik.setFieldValue("content", e.target.value)}
        placeholder="Nội dung"
        border="1px solid"
        borderColor="purple.400"
        _focusVisible={{}}
      />
      {formik.errors.content && (
        <Text color="red">{formik.errors["content"]}</Text>
      )}
      <Button
        type="submit"
        onClick={formik.handleSubmit}
        colorScheme="purple"
        mt="4"
      >
        Submit
      </Button>
    </Box>
  );
};

export default Contact;
