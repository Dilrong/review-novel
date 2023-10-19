import { Chapter } from "@/lib/types/chatper";
import { supabase } from "@/lib/utils/supabase";
import { Metadata } from "next";
import Custom500 from "../../error/500";
import ClientPage from "./page.client";

interface Props {
  params: {
    id: number;
  };
}

export const generateMetadata = async ({
  params: { id },
}: Props): Promise<Metadata> => {
  const { data } = await supabase.from("novel").select().eq("id", id).single();

  return {
    title: data.title,
    openGraph: {
      title: data.title,
    },
  };
};

const NovelsDetailPage = async ({ params: { id } }: Props) => {
  const { data: chapterList } = await supabase
    .from("chapter")
    .select()
    .eq("novel_id", id);
  try {
    return <ClientPage chapterList={chapterList as Chapter[]} />;
  } catch (e) {
    return <Custom500 />;
  }
};

export default NovelsDetailPage;
