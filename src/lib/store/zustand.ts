import { create } from 'zustand'

type ChapterStore = {
  lang: string
  setLang: (lang: string) => void
}

const useChapterStore = create<ChapterStore>((set) => ({
  lang: 'en',
  setLang: (lang) =>
    set(() => ({
      lang: lang,
    })),
}))

export { useChapterStore }
