import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "@/lib/utils/supabase";
import { DucksPick } from "@/lib/types/ducksPick";

export const duckPickSlice = createApi({
  reducerPath: "duckPick",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getDuckPickList: builder.query<DucksPick[], void>({
      queryFn: async () => {
        const { data, error } = await supabase.from("duck_pick").select();

        if (error) {
          return { error: error };
        }

        return { data: data as DucksPick[] };
      },
    }),
  }),
});

export const { useGetDuckPickListQuery } = duckPickSlice;
