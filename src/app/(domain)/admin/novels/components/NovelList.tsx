import Novel from '@/lib/types/Novel'
import NovelItem from './NovelItem'
import ToolBox from './ToolBox'

interface Props {
  novelList: Novel[]
}

function NovelList({ novelList }: Props) {
  return (
    <div className="relative overflow-auto">
      <ToolBox />
      <table className="w-full text-left text-sm text-gray-500">
        <thead className=" bg-gray-50 uppercase text-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              제목
            </th>
            <th scope="col" className="px-6 py-3">
              카테고리
            </th>
            <th scope="col" className="px-6 py-3">
              길이
            </th>
            <th scope="col" className="px-6 py-3">
              등록일
            </th>
          </tr>
        </thead>
        <tbody>
          {novelList?.map((novel: Novel) => (
            <NovelItem key={novel.id} novel={novel} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default NovelList
