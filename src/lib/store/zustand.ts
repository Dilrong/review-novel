import { create } from 'zustand'

type UserStore = {
  id: string
  name: string
  profile: string
  setUser: (id: string, name: string, profile: string) => void
  deleteUser: () => void
}

type ChapterStore = {
  lang: string
  setLang: (lang: string) => void
}

const useUserStore = create<UserStore>((set) => ({
  id: '',
  name: '',
  profile: '',
  setUser: (id, name, profile) =>
    set(() => ({
      id: id,
      name: name,
      profile: profile,
    })),
  deleteUser: () => {
    set(() => ({
      id: '',
      name: '',
      profile: '',
    }))
  },
}))

const useChapterStore = create<ChapterStore>((set) => ({
  lang: 'en',
  setLang: (lang) =>
    set(() => ({
      lang: lang,
    })),
}))

export { useChapterStore, useUserStore }
