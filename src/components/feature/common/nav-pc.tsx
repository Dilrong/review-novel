'use client'

import Link from 'next-intl/link'
import { useTranslations } from 'next-intl'
import { ModeToggle } from '@/components/feature/common/mode-toggle'
import { useUserStore } from '@/lib/store/zustand'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface Props {
  toggle: boolean
  handleToggle: () => void
}

function NavPc({ toggle, handleToggle }: Props) {
  const t = useTranslations()
  const { profile } = useUserStore()

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
        {/*<li>*/}
        {/*  {profile ? (*/}
        {/*    <Avatar>*/}
        {/*      <AvatarImage src={profile} />*/}
        {/*      <AvatarFallback>CN</AvatarFallback>*/}
        {/*    </Avatar>*/}
        {/*  ) : (*/}
        {/*    <Link href="/users/login" className="block" onClick={handleToggle}>*/}
        {/*      {t('login_menu')}*/}
        {/*    </Link>*/}
        {/*  )}*/}
        {/*</li>*/}
        <li className="hidden md:flex">
          <ModeToggle />
        </li>
      </ul>
    </div>
  )
}

export default NavPc
