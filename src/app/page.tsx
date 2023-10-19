import { Novel } from "@/lib/types/novel";
import { DucksPick } from "@/lib/types/ducksPick";
import { supabase } from "@/lib/utils/supabase";
import Custom500 from "./error/500";
import ClientPage from "./page.client";

const ServerPage = async () => {
  const { data: novelList } = await supabase.from("novel").select();
  const { data: duckPickList } = await supabase.from("duck_pick").select();

  try {
    return (
      <ClientPage
        novelList={novelList as Novel[]}
        duckPickList={duckPickList as DucksPick[]}
      />
    );
  } catch (e) {
    return <Custom500 />;
  }
};

export default ServerPage;
