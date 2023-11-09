'use client'

import React from 'react'
import ScreenContainer from '@/app/_components/molecules/Container/ScreenContainer'
import Heading3 from '@/app/_components/atoms/Heading3/Heading3'
import Input from '@/app/_components/atoms/Input/Input'
import AdminNovelCategorySelect from '@/app/_components/organisms/AdminNovelCategorySelect'
import Category from '@/lib/types/Category'
import TextArea from '@/app/_components/atoms/TextArea/TextArea'
import Button from '@/app/_components/atoms/Button/Button'
import AdminAddForm from '@/app/_components/molecules/Container/AdminAddForm'
import AdminNovelLengthSelect from '@/app/_components/organisms/AdminNovelLengthSelect'
import { SubmitHandler, useForm } from 'react-hook-form'
import supabase from '@/lib/utils/supabase'
import Swal from 'sweetalert2'
import sendSlackMessage from '@/lib/utils/slack'
import { useRouter } from 'next/navigation'

interface Props {
  categoryList: Category[]
}

type Inputs = {
  title: string
  category: string
  length: string
  source: string
  chapterTitle: string
  content: string
  contentKo: string
  contentJp: string
}

function AdminNovelAddTemplate({ categoryList }: Props) {
  const router = useRouter()
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const { data: novel, error: novelError } = await supabase
        .from('novel')
        .insert({
          title: data.title,
          category: data.category,
          length: data.length,
        })
        .select('*')
      if (novelError) {
        Swal.fire(
          '오류가 발생하였습니다.',
          '오류는 개발 담당자에게 바로 전달됩니다.',
          'error',
        )
        sendSlackMessage(
          '#개발-알림',
          '오류봇',
          ':space_invader:',
          `[admin.novelduck.farm | novels/add] Code: ${novelError.code} | Message: ${novelError.message}`,
        )

        return
      }

      const { error: chapterError } = await supabase.from('chapter').insert({
        order: 1,
        title: data.chapterTitle,
        content: data.content,
        content_ko: data.contentKo,
        content_jp: data.contentJp,
        source: data.source,
        novel_id: novel[0].id,
      })
      if (chapterError) {
        Swal.fire(
          '오류가 발생하였습니다.',
          '오류는 개발 담당자에게 바로 전달됩니다.',
          'error',
        )
        sendSlackMessage(
          '#개발-알림',
          '오류봇',
          ':space_invader:',
          `[admin.novelduck.farm | novels/add] Code: ${chapterError.code} | Message: ${chapterError.message}`,
        )
        return
      }

      Swal.fire(
        '저장완료',
        `요청하신 ${data.title}을 등록하였습니다.`,
        'success',
      )
      router.push('/novels')
    } catch (error) {
      Swal.fire(
        '오류가 발생하였습니다.',
        '오류는 개발 담당자에게 바로 전달됩니다.',
        'error',
      )
      sendSlackMessage(
        '#개발-알림',
        '오류봇',
        ':space_invader:',
        `[admin.novelduck.farm | novels/add] ${error}`,
      )
    }
  }

  return (
    <ScreenContainer>
      <AdminAddForm onSubmit={handleSubmit(onSubmit)}>
        <Heading3 text="소설 추가" />
        <Input
          type="text"
          placeholder="소설제목을 입력하세요."
          {...register('title', {
            required: true,
          })}
        />
        <AdminNovelCategorySelect
          categoryList={categoryList}
          {...register('category', {
            required: true,
          })}
        />
        <AdminNovelLengthSelect
          {...register('length', {
            required: true,
          })}
        />
        <Input
          type="text"
          placeholder="출처를 입력하세요."
          {...register('source', {
            required: true,
          })}
        />
        <Input
          type="text"
          placeholder="챕터1의 제목을 입력하세요."
          {...register('chapterTitle', {
            required: true,
          })}
        />
        <TextArea
          rows={8}
          placeholder="영어 번역본을 입력하세요."
          {...register('content', {})}
        />
        <TextArea
          rows={8}
          placeholder="한글 번역본을 입력하세요."
          {...register('contentKo', {})}
        />
        <TextArea
          rows={8}
          placeholder="일본어 번역본을 입력하세요."
          {...register('contentJp', {})}
        />
        <Button type="submit" text="추가하기" />
      </AdminAddForm>
    </ScreenContainer>
  )
}

export default AdminNovelAddTemplate
