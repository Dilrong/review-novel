'use client'

import React from 'react'
import ScreenContainer from '@/app/_components/molecules/Container/ScreenContainer'
import AdminAddForm from '@/app/_components/molecules/Container/AdminAddForm'
import Heading3 from '@/app/_components/atoms/Heading3'
import Input from '@/app/_components/atoms/Input'
import AdminNovelCategorySelect from '@/app/_components/organisms/AdminNovelCategorySelect'
import AdminNovelLengthSelect from '@/app/_components/organisms/AdminNovelLengthSelect'
import TextArea from '@/app/_components/atoms/TextArea'
import Button from '@/app/_components/atoms/Button'
import Category from '@/lib/types/Category'

interface Props {
  // novel: Novel
  // chapterList: Chapter[]
  categoryList: Category[]
}

function AdminNovelDetailTemplate({ categoryList }: Props) {
  return (
    <ScreenContainer>
      <AdminAddForm onSubmit={() => {}}>
        <Heading3 text="소설 수정" />
        <Input type="text" placeholder="소설제목을 입력하세요." />
        <AdminNovelCategorySelect categoryList={categoryList} />
        <AdminNovelLengthSelect />
        <Input type="text" placeholder="출처를 입력하세요." />
        <Input type="text" placeholder="챕터1의 제목을 입력하세요." />
        <TextArea rows={8} placeholder="영어 번역본을 입력하세요." />
        <TextArea rows={8} placeholder="한글 번역본을 입력하세요." />
        <TextArea rows={8} placeholder="일본어 번역본을 입력하세요." />
        <Button type="submit" text="추가하기" handleClick={() => {}} />
      </AdminAddForm>
    </ScreenContainer>
  )
}

export default AdminNovelDetailTemplate
