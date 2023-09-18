import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "@/lib/utils/supabase";
import { Novel } from "@/lib/types/novel";

export const duckPickSlice = createApi({
  reducerPath: "duckPick",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getDuckPickList: builder.query<Novel[], void>({
      queryFn: async () => {
        const { data, error } = await supabase.from("duck_pick").select();

        if (error) {
          return { error: error };
        }

        return { data: data as Novel[] };
      },
    }),
  }),
});

export const { useGetDuckPickListQuery } = duckPickSlice;
