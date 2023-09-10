import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "@/lib/utils/supabase";
import { Chapter } from "@/lib/types/chatper";

export const chapterSlice = createApi({
  reducerPath: "chapter",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getChapterList: builder.query<Chapter[], void>({
      queryFn: async () => {
        return supabase.from("chapter").select();
      },
    }),
    getChapterListByNovel: builder.query<Chapter[], number>({
      queryFn: async (id: number) => {
        return supabase
          .from("chapter")
          .select()
          .eq("novel_id", id)
          .order("order");
      },
    }),
    getChapterDetail: builder.query<Chapter, number>({
      queryFn: async (id: number) => {
        return supabase.from("chapter").select().eq("id", id).single();
      },
    }),
  }),
});

export const {
  useGetChapterListQuery,
  useGetChapterListByNovelQuery,
  useGetChapterDetailQuery,
} = chapterSlice;
