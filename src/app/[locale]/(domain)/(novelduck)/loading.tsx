import Loading from '@/app/_components/atoms/Loading/Loading'
import ScreenContainer from '@/app/_components/molecules/Container/ScreenContainer'

export default function LoadingPage() {
  return (
    <ScreenContainer>
      <div className="flex content-center justify-center">
        <Loading />
      </div>
    </ScreenContainer>
  )
}
