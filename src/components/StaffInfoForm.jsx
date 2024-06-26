/* eslint-disable react/prop-types */
import { Button, Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useFormik } from "formik";
import * as yup from "yup";
import staffAPI from "../apis/staffAPI";
const StaffInfoForm = ({ staffData, id }) => {
  const validationSchema = yup.object({
    name: yup.string().required("Required"),
    age: yup.number().min(18).max(100).required("Required"),
    address: yup.string().required("Required"),
    avatar: yup
      .string()
      .matches(
        "(https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})",
        "Enter correct url!"
      )
      .required("Required"),
  });
  const initValues = {
    name: "",
    age: "",
    address: "",
    avatar: "",
    createdAt: dayjs(),
  };
  const formik = useFormik({
    initialValues: staffData ? staffData : initValues,
    validationSchema: validationSchema,
    onSubmit: async (values, event) => {
      try {
        const data = {
          ...values,
          createdAt: dayjs(values.createdAt).valueOf(),
        };
        if (staffData) {
          await staffAPI.update(id, data);
        } else {
          await staffAPI.add(data);
        }
        alert("success");
        window.location.reload();

        event.resetForm();
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
        id="age"
        name="age"
        label="Age"
        value={formik.values.age}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.age && Boolean(formik.errors.age)}
        helperText={(formik.touched.age && formik.errors.age) || " "}
      />
      <TextField
        fullWidth
        id="address"
        name="address"
        label="Address"
        value={formik.values.address}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.address && Boolean(formik.errors.address)}
        helperText={(formik.touched.address && formik.errors.address) || " "}
      />
      <TextField
        fullWidth
        id="avatar"
        name="avatar"
        label="Avatar"
        value={formik.values.avatar}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.avatar && Boolean(formik.errors.avatar)}
        helperText={(formik.touched.avatar && formik.errors.avatar) || " "}
      />

      <DatePicker
        slotProps={{
          textField: {
            helperText:
              (formik.touched.createdAt && formik.errors.createdAt) || " ",
          },
        }}
        value={formik.values.createdAt}
        onChange={(newValue) =>
          formik.setFieldValue("createdAt", dayjs(newValue))
        }
      />
      <Button mt={4} type="submit" variant="contained">
        Gửi
      </Button>
    </Stack>
  );
};

export default StaffInfoForm;
