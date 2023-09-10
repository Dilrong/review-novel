import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "@/lib/utils/supabase";
import { Novel } from "@/lib/types/novel";

export const novelSlice = createApi({
  reducerPath: "novel",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getNovelList: builder.query<Novel[], void>({
      queryFn: async () => {
        return supabase.from("novel").select();
      },
    }),
    getNovelDetail: builder.query<Novel, number>({
      queryFn: async (id: number) => {
        return supabase.from("novel").select().eq("id", id).single();
      },
    }),
  }),
});

export const { useGetNovelListQuery, useGetNovelDetailQuery } = novelSlice;
