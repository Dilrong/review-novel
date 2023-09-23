import { Novel } from "@/lib/types/novel";
import { supabase } from "@/lib/utils/supabase";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const rootUrl = "https://novelduck.farm";

  const { data: novelList } = await supabase.from("novel").select();

  const novelRoutes = novelList?.map((novel: Novel) => ({
    url: `${rootUrl}/novels/${novel.id}`,
    lastModified: new Date(novel.updated_at),
  }));

  const routes = ["/", "/novels"].map((route) => ({
    url: `${rootUrl}${route}`,
    lastModified: new Date(),
  }));

  return routes.concat(novelRoutes || []);
}
