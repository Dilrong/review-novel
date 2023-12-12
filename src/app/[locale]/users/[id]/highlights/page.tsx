import ScreenContainer from '@/components/ui/screen-container'
import { getHighlightList } from '@/lib/utils/supabaseQuery'
import HighlightItem from '@/components/feature/users/highlight-item'

interface Props {
  params: {
    id: string
  }
}

const ServerPage = async ({ params: { id } }: Props) => {
  const highlightList = await getHighlightList(id)

  return (
    <ScreenContainer>
      <section className="mx-auto flex w-full max-w-7xl flex-col px-2 py-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          My Highlights
        </h3>
        <section className="mt-8 flex flex-col gap-4">
          {highlightList.map((highlight) => (
            <HighlightItem key={highlight.id} highlight={highlight} />
          ))}
        </section>
      </section>
    </ScreenContainer>
  )
}

export const revalidate = 0

export default ServerPage
