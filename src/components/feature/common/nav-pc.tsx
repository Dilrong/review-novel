'use client'

import Link from 'next-intl/link'
import { useTranslations } from 'next-intl'

interface Props {
  toggle: boolean
  handleToggle: () => void
}

function NavPc({ toggle, handleToggle }: Props) {
  const t = useTranslations()

  return (
    <div
      className={`${
        !toggle && 'hidden'
      } w-full items-center justify-between lg:order-1 lg:flex lg:w-auto`}
      id="mobile-menu"
    >
      <ul className="mt-4 flex flex-col items-center lg:mt-0 lg:flex-row lg:space-x-4">
        <li>
          <Link href="/novels" className="block" onClick={handleToggle}>
            {t('browser_menu')}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavPc
