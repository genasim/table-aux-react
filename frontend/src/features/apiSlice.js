import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050/docs' }),
    endpoints: (builder) => ({
        fetchDocs: builder.query({
            query: () => '/',
        }),
        deleteDoc: builder.mutation({
            query: docId => ({
                url: `/${docId}`,
                method: 'DELETE',
            })
        })
    }),
});

export const { useFetchDocsQuery, useDeleteDocMutation } = apiSlice;