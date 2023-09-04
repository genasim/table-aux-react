import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050/docs/' }),
    tagTypes: ['Document'],
    endpoints: (builder) => ({
        fetchDocs: builder.query({
            query: ({ filter, page, size }) => `/?filter=${filter}&page=${page}&size=${size}`,
            providesTags: ['Document']
        }),
        addDoc: builder.mutation({
            query: doc => ({
                url: '/',
                method: 'POST',
                body: doc
            }),
            invalidatesTags: ['Document']
        }),
        updateDoc: builder.mutation({
            query: ({ _id, ...rest }) => ({
                url: `/${_id}`,
                method: 'PUT',
                body: rest
            }),
            invalidatesTags: ['Document']
        }),
        deleteDoc: builder.mutation({
            query: (_id) => ({
                url: `/${_id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Document']
        }),
    }),
});

export const {
    useFetchDocsQuery,
    useAddDocMutation,
    useUpdateDocMutation,
    useDeleteDocMutation } = apiSlice;