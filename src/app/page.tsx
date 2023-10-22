import { Novel } from "@/lib/types/novel";
import { supabase } from "@/lib/utils/supabase";
import Custom500 from "./error/500";
import ClientPage from "./page.client";

const ServerPage = async () => {
  const { data: novelList } = await supabase
    .from("novel")
    .select()
    .order("created_at", { ascending: false })
    .limit(5);
  const { data: duckPickList } = await supabase
    .from("novel")
    .select()
    .order("created_at", { ascending: false })
    .eq("pick", true)
    .limit(5);

  try {
    return (
      <ClientPage
        novelList={novelList as Novel[]}
        duckPickList={duckPickList as Novel[]}
      />
    );
  } catch (e) {
    return <Custom500 />;
  }
};

export const revalidate = 0;
export default ServerPage;
