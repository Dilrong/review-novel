export default interface Chapter {
  id: number
  order: number
  title: string
  sequence: number
  content: string
  content_ko: string
  content_ja: string
  source: string
  novel_id: number
  created_at: Date
  updated_at: Date
}
