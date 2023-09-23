import fs from "fs";
import RSS from "rss";
import { supabase } from "../lib/utils/supabase";
import { Novel } from "../lib/types/novel";

export default async function generateRssFeed() {
  const { data: novelList } = await supabase.from("novel").select();

  const site_url =
    process.env.NODE_ENV === "production"
      ? "https://novelduck.farm"
      : "http://localhost:3000";

  const feedOptions = {
    title: "NovelDuck | RSS Feed",
    description: "소설 덕후를 위한 공간",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    language: "ko",
  };

  const feed = new RSS(feedOptions);

  novelList?.map((novel: Novel) => {
    feed.item({
      title: novel.title,
      description: novel.summary,
      url: `${site_url}/novels/${novel.id}`,
      date: novel.updated_at,
    });
  });

  // Write the RSS feed to a file as XML.
  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
