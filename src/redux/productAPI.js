import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productAPI = createApi({
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6678c7ff0bd45250561fc824.mockapi.io/api/Product",
  }),
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    getProductDetail: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    addNewProduct: builder.mutation({
      query: ({ body }) => ({
        url: `/`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: ({ body }) => ({
        url: `/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetProductDetailQuery,
  useAddNewProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productAPI;
