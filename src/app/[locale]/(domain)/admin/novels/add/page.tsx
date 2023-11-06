import ClientPage from '@/app/[locale]/(domain)/admin/novels/add/page.client'

const ServerPage = async () => 
  // const { data: categoryList } = await supabase
  //   .from('category')
  //   .select()
  //   .order('created_at', { ascending: true })

   <ClientPage />
  // return <AdminNovelAddTemplate categoryList={categoryList as Category[]} />


export default ServerPage
