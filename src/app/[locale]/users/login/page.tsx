import ScreenContainer from '@/components/ui/screen-container'
import LoginForm from '@/components/feature/users/login-form'
import supabase from '@/lib/utils/supabase'

const ServerPage = async () => {
  return (
    <ScreenContainer>
      <section className="my-auto flex flex-col items-center">
        <article className="w-full max-w-2xl px-2">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Novel<span className="ml-1 font-bold text-yellow-300">DucK</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              소설로 자연스럽게 배우는 외국어
            </p>
          </div>
          <LoginForm />
        </article>
      </section>
    </ScreenContainer>
  )
}
export default ServerPage
