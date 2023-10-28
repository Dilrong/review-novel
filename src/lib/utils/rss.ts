import fs from 'fs'
import RSS from 'rss'
import Novel from '@/lib/types/Novel'
import supabase from './supabase'

export default async function generateRssFeed() {
  const { data: novelList } = await supabase.from('novel').select()

  const siteUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://novelduck.farm'
      : 'http://localhost:3000'

  const feedOptions = {
    title: 'NovelDuck | RSS Feed',
    description: '소설 덕후를 위한 공간',
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss.xml`,
    language: 'ko',
  }

  const feed = new RSS(feedOptions)

  // eslint-disable-next-line array-callback-return
  novelList?.map((novel: Novel) => {
    feed.item({
      title: novel.title,
      description: novel.summary,
      url: `${siteUrl}/novels/${novel.id}`,
      date: novel.updated_at,
    })
  })

  // Write the RSS feed to a file as XML.
  fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }))
}
