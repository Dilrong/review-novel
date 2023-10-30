'use client'

import {Suspense, useState} from 'react'
import Logo from "@/app/_components/molecules/Logo";
import NavMobile from "@/app/_components/molecules/NavMobile";
import NavPc from "@/app/_components/molecules/NavPc";
import NavContainer from "@/app/_components/molecules/NavContainer";
import Analytics from '../molecules/Analytics'
import MetaInfo from '../atoms/MetaInfo'

function Headers() {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <Suspense>
                <Analytics/>
                <MetaInfo/>
            </Suspense>
            <header>
                <NavContainer>
                    <Logo/>
                    <NavMobile handleToggle={handleToggle}/>
                    <NavPc toggle={toggle} handleToggle={handleToggle}/>
                </NavContainer>
            </header>
        </>
    )
}

export default Headers
