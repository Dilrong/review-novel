import Loading from '@/components/ui/Loading'
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
