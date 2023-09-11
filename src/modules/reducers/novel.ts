import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "@/lib/utils/supabase";
import { Novel } from "@/lib/types/novel";

export const novelSlice = createApi({
  reducerPath: "novel",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getNovelList: builder.query<Novel[], void>({
      queryFn: async () => {
        const { data, error } = await supabase.from("novel").select();

        if (error) {
          return { error: error };
        }

        return { data: data as Novel[] };
      },
    }),
    getNovelDetail: builder.query<Novel, number>({
      queryFn: async (id: number) => {
        const { data, error } = await supabase
          .from("novel")
          .select()
          .eq("id", id)
          .single();

        if (error) {
          return { error: error };
        }

        return { data: data as Novel };
      },
    }),
  }),
});

export const { useGetNovelListQuery, useGetNovelDetailQuery } = novelSlice;
