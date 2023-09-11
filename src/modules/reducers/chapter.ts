import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "@/lib/utils/supabase";
import { Chapter } from "@/lib/types/chatper";

export const chapterSlice = createApi({
  reducerPath: "chapter",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getChapterList: builder.query<Chapter[], void>({
      queryFn: async () => {
        const { data, error } = await supabase.from("chapter").select();

        if (error) {
          return { error: error };
        }

        return { data: data as Chapter[] };
      },
    }),
    getChapterListByNovel: builder.query<Chapter[], number>({
      queryFn: async (id: number) => {
        const { data, error } = await supabase
          .from("chapter")
          .select()
          .eq("novel_id", id)
          .order("order");

        if (error) {
          return { error: error };
        }

        return { data: data as Chapter[] };
      },
    }),
    getChapterDetail: builder.query<Chapter, number>({
      queryFn: async (id: number) => {
        const { data, error } = await supabase
          .from("chapter")
          .select()
          .eq("id", id)
          .single();

        if (error) {
          return { error: error };
        }

        return { data: data as Chapter };
      },
    }),
  }),
});

export const {
  useGetChapterListQuery,
  useGetChapterListByNovelQuery,
  useGetChapterDetailQuery,
} = chapterSlice;
