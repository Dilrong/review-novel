import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "@/lib/utils/supabase";
import { Banner } from "@/lib/types/banner";

export const bannerSlice = createApi({
  reducerPath: "banner",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getBannerList: builder.query<Banner[], void>({
      queryFn: async () => {
        const { data, error } = await supabase.from("banner").select();

        if (error) {
          return { error: error };
        }

        return { data: data as Banner[] };
      },
    }),
  }),
});

export const { useGetBannerListQuery } = bannerSlice;
