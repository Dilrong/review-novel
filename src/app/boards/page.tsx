import { supabase } from "@/lib/utils/supabase";
import { Board } from "@/lib/types/board";
import ClientPage from "./page.client";
import Custom500 from "../error/500";

interface Props {
  params: {
    filter: string;
  };
}

const ServerPage = async ({ params: { filter } }: Props) => {
  const { data: novelList } = await supabase
    .from("board")
    .select()
    .order("created_at", { ascending: false });

  try {
    return <ClientPage boardList={novelList as Board[]} />;
  } catch (e) {
    return <Custom500 />;
  }
};

export const revalidate = 0;
export default ServerPage;
