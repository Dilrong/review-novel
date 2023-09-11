import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "@/lib/utils/supabase";
import { Board } from "@/lib/types/board";

export const boardSlice = createApi({
  reducerPath: "borad",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getBoardList: builder.query<Board[], void>({
      queryFn: async () => {
        const { data, error } = await supabase.from("board").select();

        if (error) {
          return { error: error };
        }

        return { data: data as Board[] };
      },
    }),
  }),
});

export const { useGetBoardListQuery } = boardSlice;
