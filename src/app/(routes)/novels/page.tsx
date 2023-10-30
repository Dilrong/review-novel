import supabase from '@/lib/utils/supabase'
import Novel from '@/lib/types/Novel'
import NovelTemplate from "@/app/_components/templates/NovelTemplate";
import Custom500 from '../error/500'

const ServerPage = async () => {
    const {data: novelList} = await supabase
        .from('novel')
        .select()
        .order('created_at', {ascending: false})

    try {
        return <NovelTemplate novelList={novelList as Novel[]}/>
    } catch (e) {
        return <Custom500/>
    }
}

export const revalidate = 0
export default ServerPage
