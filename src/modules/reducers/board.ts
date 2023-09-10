import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "@/lib/utils/supabase";
import { Board } from "@/lib/types/board";

export const boardSlice = createApi({
  reducerPath: "borad",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getBoardList: builder.query<Board[], void>({
      queryFn: async () => {
        return supabase.from("board").select();
      },
    }),
  }),
});

export const { useGetBoardListQuery } = boardSlice;
