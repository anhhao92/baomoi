import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {Article} from '../types/article';

const baseQuery = fetchBaseQuery({baseUrl: 'https://api.znews.vn/api/mobile/'});
export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery,
  endpoints: builder => ({
    getLatestArticles: builder.query<Article[], number>({
      query: page => `newposts.json?p=${page}&c=10`,
      transformResponse: (response: {data: Article[]}) => response.data,
      serializeQueryArgs({endpointName}) {
        return endpointName;
      },
      forceRefetch({currentArg, previousArg}) {
        return currentArg !== previousArg;
      },
      merge(currentData, newData) {
        currentData.push(...newData);
      },
    }),
  }),
});

export const {useGetLatestArticlesQuery} = articleApi;
