import { create } from 'zustand'

type UserStore = {
  profile: string
}

type ChapterStore = {
  lang: string
  setLang: (lang: string) => void
}

const useUserStore = create<UserStore>((set) => ({
  profile: '',
}))

const useChapterStore = create<ChapterStore>((set) => ({
  lang: 'en',
  setLang: (lang) =>
    set(() => ({
      lang: lang,
    })),
}))

export { useChapterStore, useUserStore }
