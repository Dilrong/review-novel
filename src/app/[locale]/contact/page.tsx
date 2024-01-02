import ScreenContainer from '@/components/ui/screen-container'
import ContactForm from '@/components/feature/contact/contact-form'

const ServerPage = async () => {
  return (
    <ScreenContainer>
      <section className="mx-auto flex w-full max-w-7xl flex-col px-2 py-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          노벨덕에 연락하기
        </h2>
        <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mb-4">
          문의할 내용을 써주시면 소덕이가 바로 담당자에게 전달합니다!
        </p>
        <ContactForm />
      </section>
    </ScreenContainer>
  )
}

export default ServerPage
