export default interface Novel {
  id: number
  title: string
  title_ko: string
  title_ja: string
  thumbnail: string
  description: string
  author: string
  translator: string
  category_id: number
  created_at: Date
  updated_at: Date
}
