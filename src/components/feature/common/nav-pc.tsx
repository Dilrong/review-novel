'use client'

import Link from 'next-intl/link'
import { useTranslations } from 'next-intl'
import { ModeToggle } from '@/components/feature/common/mode-toggle'
import { useUserStore } from '@/lib/store/zustand'
import { useEffect } from 'react'
import supabase from '@/lib/utils/supabase'
import UserAvatar from '@/components/feature/users/user-avatar'
import mixpanel from 'mixpanel-browser'
import { Button } from '@/components/ui/button'
import { Search as SearchIcon } from 'lucide-react'

interface Props {
  toggle: boolean
  handleToggle: () => void
}

function NavPc({ toggle, handleToggle }: Props) {
  const t = useTranslations()
  const { id, setUser } = useUserStore()

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const { data, error } = await supabase.auth.getUser()

    if (data.user) {
      setUser(
        data.user.id,
        data.user.user_metadata.name,
        data.user.user_metadata.avatar_url,
      )

      mixpanel.identify(data.user.id)
      mixpanel.track('로그인')
      mixpanel.people.set({
        $name: data.user.user_metadata.name,
        $email: data.user.email,
      })
    }
  }

  return (
    <div
      className={`${
        !toggle && 'hidden'
      } w-full items-center justify-between lg:order-1 lg:flex lg:w-auto`}
      id="mobile-menu"
    >
      <ul className="mt-4 flex flex-col items-center lg:mt-0 lg:flex-row">
        <li>
          <Link href="/boards" className="block" onClick={handleToggle}>
            <Button variant="ghost">{t('notice_menu')}</Button>
          </Link>
        </li>
        <li>
          <Link href="/novels" className="block" onClick={handleToggle}>
            <Button variant="ghost">{t('browser_menu')}</Button>
          </Link>
        </li>
        <li>
          {id ? (
            <UserAvatar />
          ) : (
            <Link href="/users/login" className="block" onClick={handleToggle}>
              <Button variant="ghost">{t('login_menu')}</Button>
            </Link>
          )}
        </li>
        <li>
          <Link href="/search">
            <Button variant="ghost" size="icon">
              <SearchIcon className="h-4 w-4" />
            </Button>
          </Link>
        </li>
        <li className="flex">
          <ModeToggle />
        </li>
      </ul>
    </div>
  )
}

export default NavPc
