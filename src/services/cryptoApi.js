import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': import.meta.env.VITE_COINRANKING_RAPIDAPI_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_COINRANKING_RAPIDAPI_HOST
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({
    url,
    headers: cryptoApiHeaders
})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptosDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
        }),
        //requires premium plan
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        }),
    })
})

export const { useGetCryptosQuery, useGetCryptosDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery } = cryptoApi;