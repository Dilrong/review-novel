import { supabase } from "@/lib/utils/supabase";
import { Board } from "@/lib/types/board";
import ClientPage from "./page.client";
import Custom500 from "@/app/error/500";

interface Props {
  params: {
    id: string;
  };
}

const ServerPage = async ({ params: { id } }: Props) => {
  const { data: board } = await supabase
    .from("board")
    .select()
    .eq("id", id)
    .single();

  try {
    return <ClientPage board={board as Board} />;
  } catch (e) {
    return <Custom500 />;
  }
};

export const revalidate = 0;
export default ServerPage;
