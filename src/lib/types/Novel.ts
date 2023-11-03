export default interface Novel {
  id: number
  thumbnail: string
  title: string
  summary: string
  source: string
  category: string
  length: number
  created_at: Date
  updated_at: Date
  chapter_id: number
}
