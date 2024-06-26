import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://6678c7ff0bd45250561fc824.mockapi.io/api/staffManagement",
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

const staffAPI = {
  getAll() {
    return axiosInstance.get("?sortBy=age&order=desc");
  },
  getOne(staffID) {
    return axiosInstance.get(`/${staffID}`);
  },
  add(data) {
    return axiosInstance.post("/", data);
  },
  update(staffID, data) {
    return axiosInstance.put(`/${staffID}`, data);
  },
  delete(staffID) {
    return axiosInstance.delete(`/${staffID}`);
  },
};

export default staffAPI;
