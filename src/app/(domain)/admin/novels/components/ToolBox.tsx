import Link from 'next/link'

function ToolBox() {
  return (
    <div className="mb-2 flex justify-end">
      <Link href="/novels/add">
        <button
          type="button"
          className="mb-2 mr-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-yellow-400 focus:outline-none"
        >
          소설 추가
        </button>
      </Link>
    </div>
  )
}

export default ToolBox
