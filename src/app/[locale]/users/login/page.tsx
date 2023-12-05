import ScreenContainer from '@/components/ui/screen-container'
import LoginForm from '@/components/feature/users/login-form'

const ServerPage = async () => {
  return (
    <ScreenContainer>
      <section className="my-auto flex flex-col items-center">
        <article className="w-full max-w-2xl px-2">
          <LoginForm />
        </article>
      </section>
    </ScreenContainer>
  )
}
export default ServerPage
