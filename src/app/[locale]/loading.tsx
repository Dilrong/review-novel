import ScreenContainer from '@/components/ui/screen-container'
import Loading from '@/components/ui/loading'

export default function LoadingPage() {
  return (
    <ScreenContainer>
      <div className="flex content-center justify-center">
        <Loading />
      </div>
    </ScreenContainer>
  )
}
