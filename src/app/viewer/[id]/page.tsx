import { Metadata } from "next";
import Custom500 from "../../error/500";
import ClientPage from "./page.client";
import { supabase } from "@/lib/utils/supabase";

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

const ViewerPage = ({ params }: Props) => {
  try {
    return <ClientPage id={params.id} />;
  } catch (e) {
    return <Custom500 />;
  }
};

export default ViewerPage;
