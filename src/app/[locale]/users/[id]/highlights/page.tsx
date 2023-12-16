import ScreenContainer from '@/components/ui/screen-container'
import { getHighlightList } from '@/lib/utils/supabase-query'
import MyHighlightItem from '@/components/feature/users/my-highlight-item'
import MyHighlightTitle from '@/components/feature/users/my-highlight-title'
import MyHighlightNotFound from '@/components/feature/users/my-highlight-not-found'

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
        <MyHighlightTitle />
        <section className="mt-8 flex flex-col gap-4">
          {highlightList.length === 0 && <MyHighlightNotFound />}
          {highlightList.map((highlight) => (
            <MyHighlightItem key={highlight.id} highlight={highlight} />
          ))}
        </section>
      </section>
    </ScreenContainer>
  )
}

export const revalidate = 0

export default ServerPage
