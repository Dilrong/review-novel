'use client'

import Link from 'next-intl/link'
import { useTranslations } from 'next-intl'
import { ModeToggle } from '@/components/feature/common/mode-toggle'
import { useUserStore } from '@/lib/store/zustand'
import { useEffect } from 'react'
import supabase from '@/lib/utils/supabase'
import UserAvatar from '@/components/feature/users/user-avatar'
import mixpanel from 'mixpanel-browser'

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

    console.error(error)
  }

  return (
    <div
      className={`${
        !toggle && 'hidden'
      } w-full items-center justify-between lg:order-1 lg:flex lg:w-auto`}
      id="mobile-menu"
    >
      <ul className="mt-4 flex flex-col items-center gap-2 lg:mt-0 lg:flex-row lg:space-x-4">
        <li>
          <Link href="/novels" className="block" onClick={handleToggle}>
            {t('browser_menu')}
          </Link>
        </li>
        <li>
          {id ? (
            <UserAvatar />
          ) : (
            <Link href="/users/login" className="block" onClick={handleToggle}>
              {t('login_menu')}
            </Link>
          )}
        </li>
        <li className="hidden md:flex">
          <ModeToggle />
        </li>
      </ul>
    </div>
  )
}

export default NavPc
