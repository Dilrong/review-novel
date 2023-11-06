import supabase from '@/lib/utils/supabase'

const homepage = 'https://novelduck.farm'
const supportedLanguages = ['en', 'ko']

export default async function sitemap() {
  const sitemapEntries: { url: string; lastModified: string }[] = []

  const { data: novelList } = await supabase
    .from('novel')
    .select()
    .order('created_at', { ascending: false })

  if (novelList) {
    novelList.forEach((novel) => {
      supportedLanguages.forEach((language) => {
        sitemapEntries.push({
          url: `${homepage}/${language}/viewer/${novel.id}`,
          lastModified: new Date(novel.created_at).toISOString(),
        })
      })
    })
  }

  supportedLanguages.forEach((language) => {
    sitemapEntries.push({
      url: `${homepage}/${language}`,
      lastModified: new Date().toISOString(),
    })

    sitemapEntries.push({
      url: `${homepage}/${language}/boards`,
      lastModified: new Date().toISOString(),
    })

    sitemapEntries.push({
      url: `${homepage}/${language}/novels`,
      lastModified: new Date().toISOString(),
    })
  })

  return [...sitemapEntries]
}
