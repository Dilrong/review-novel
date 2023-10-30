'use client'

import Board from '@/lib/types/Board'
import FooterNotice from "@/app/_components/molecules/Footer/FooterNotice";
import FooterContainer from "@/app/_components/molecules/Footer/FooterContainer";
import FooterCopyright from "@/app/_components/molecules/Footer/FooterCopyright";
import FooterContent from "@/app/_components/molecules/Footer/FooterContent";

interface Props {
    board: Board
}

function Footer({board}: Props) {
    return (
        <>
            <FooterNotice board={board}/>
            <FooterContainer>
                <FooterContent/>
                <FooterCopyright/>
            </FooterContainer>
        </>
    )
}

export default Footer
