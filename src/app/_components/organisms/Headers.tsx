'use client'

import { Suspense, useState } from 'react'
import Logo from '@/app/_components/molecules/Logo/Logo'
import NavMobile from '@/app/_components/molecules/Nav/NavMobile'
import NavPc from '@/app/_components/molecules/Nav/NavPc'
import NavContainer from '@/app/_components/molecules/Nav/NavContainer'
import GoogleTagAnalytics from '@/app/_components/molecules/GoogleTagAnalytics/GoogleTagAnalytics'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import MixPanel from '@/app/_components/molecules/MixPanel/MixPanel'
import MetaInfo from './MetaInfo'

function Headers() {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <Suspense>
        <GoogleAnalytics />
        <GoogleTagAnalytics />
        <MixPanel />
        <MetaInfo />
      </Suspense>
      <NavContainer>
        <Logo />
        <NavMobile handleToggle={handleToggle} />
        <NavPc toggle={toggle} handleToggle={handleToggle} />
      </NavContainer>
    </>
  )
}

export default Headers
