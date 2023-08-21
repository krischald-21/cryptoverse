import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const cryptoNewsHeaders = {
    'X-BingApis-SDK': import.meta.env.VITE_BING_APIS_SDK,
    'X-RapidAPI-Key': import.meta.env.VITE_BING_RAPIDAPI_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_BING_RAPIDAPI_HOST
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({
    url,
    headers: cryptoNewsHeaders
})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&freshness=Day&count=${count}`)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
