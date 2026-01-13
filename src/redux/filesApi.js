import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const filesApi = createApi({
  reducerPath: 'filesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  tagTypes: ['Files'],
  endpoints: builder => ({
    getFiles: builder.query({
      query: () => '/file',
      providesTags: ['Files'],
    }),
    uploadFile: builder.mutation({
      query: formData => ({
        url: '/file',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Files'],
    }),
    deleteFile: builder.mutation({
      query: id => ({
        url: `/file/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Files'],
    }),
  }),
});

export const {
  useGetFilesQuery,
  useUploadFileMutation,
  useDeleteFileMutation,
} = filesApi;
