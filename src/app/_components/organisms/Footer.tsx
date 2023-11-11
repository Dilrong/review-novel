'use client'

import Board from '@/lib/types/Board'
import FooterNotice from '@/app/_components/molecules/Footer/FooterNotice'
import FooterContainer from '@/app/_components/molecules/Footer/FooterContainer'
import FooterCopyright from '@/app/_components/molecules/Footer/FooterCopyright'
import FooterContent from '@/app/_components/molecules/Footer/FooterContent'
import CtaButton from '@/app/_components/molecules/CtaButton/CtaButton'

interface Props {
  board: Board
}

function Footer({ board }: Props) {
  return (
    <>
      <FooterNotice board={board} />
      <FooterContainer>
        <FooterContent />
        <FooterCopyright />
        <CtaButton
          text="📝"
          href="https://w593jd2oyg0.typeform.com/to/DvoP8yMb"
        />
      </FooterContainer>
    </>
  )
}

export default Footer
