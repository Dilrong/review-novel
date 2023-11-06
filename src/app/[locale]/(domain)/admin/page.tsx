import ClientPage from '@/app/[locale]/(domain)/admin/page.client'

const ServerPage = async () => <ClientPage />

export const revalidate = 0

export default ServerPage
