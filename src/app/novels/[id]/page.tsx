import Custom500 from "../../error/500";
import ClientPage from "./page.client";

interface Props {
  params: {
    id: number;
  };
}

const NovelsDetailPage = ({ params }: Props) => {
  try {
    return <ClientPage id={params.id} />;
  } catch (e) {
    return <Custom500 />;
  }
};

export default NovelsDetailPage;
