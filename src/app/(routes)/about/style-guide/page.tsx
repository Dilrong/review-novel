import Custom500 from '@/app/(routes)/error/500'
import ClientPage from './page.client'

const ServerPage = async () => {
  try {
    return <ClientPage />
  } catch (e) {
    return <Custom500 />
  }
}

export default ServerPage
