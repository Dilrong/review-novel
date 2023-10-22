import { Metadata } from "next";
import Custom500 from "../../error/500";
import ClientPage from "./page.client";
import { supabase } from "@/lib/utils/supabase";
import { Chapter } from "@/lib/types/chatper";

interface Props {
  params: {
    id: number;
  };
}

export const generateMetadata = async ({
  params: { id },
}: Props): Promise<Metadata> => {
  const { data: novel } = await supabase
    .from("novel")
    .select()
    .eq("id", id)
    .single();

  return {
    title: novel.title,
    openGraph: {
      title: novel.title,
    },
  };
};

const ViewerPage = async ({ params: { id } }: Props) => {
  const { data: chapterList } = await supabase
    .from("chapter")
    .select()
    .eq("novel_id", id)
    .order("order");

  try {
    return <ClientPage chapterList={chapterList as Chapter[]} />;
  } catch (e) {
    return <Custom500 />;
  }
};

export const revalidate = 0;
export default ViewerPage;
