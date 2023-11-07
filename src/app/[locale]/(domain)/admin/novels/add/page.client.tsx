'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import supabase from '@/lib/utils/supabase'
import sendSlackMessage from '@/lib/utils/slack'

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

function ClientPage() {
  const router = useRouter()
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const { data: novel, error: novelError } = await supabase
        .from('novel')
        .insert({
          title: data.title,
          thumbnail:
            'https://ywvpflgpzvitldkbyzmi.supabase.co/storage/v1/object/sign/novel-thumbnail/No%20Cover.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJub3ZlbC10aHVtYm5haWwvTm8gQ292ZXIuanBlZyIsImlhdCI6MTY5OTM2MjkwNCwiZXhwIjoxNzMwODk4OTA0fQ.n16ASDA_NunEqmensxi64ysXyVFtiUdSPJnV3cghQPk&t=2023-11-07T13%3A15%3A04.367Z',
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
    <>
      <h1 className="text-xl font-bold">소설 추가</h1>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mt-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="제목을 입력하세요."
          type="text"
          {...register('title', {
            required: true,
          })}
        />
        <select
          className="mt-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          {...register('category', {
            required: true,
          })}
        >
          <option selected>카테고리를 선택해주세요.</option>
          <option value="fantasy">FANTASY</option>
          <option value="fun">FUN</option>
          <option value="meme">MEME</option>
          <option value="motivation">MOTIVATION</option>
          <option value="horror">HORROR</option>
          <option value="romance">ROMANCE</option>
          <option value="sad">SAD</option>
          <option value="sf">SF</option>
          <option value="etc">ETC</option>
        </select>
        <select
          className="mt-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          {...register('length', {
            required: true,
          })}
        >
          <option selected>길이를 선택해주세요.</option>
          <option value="short">단편</option>
          <option value="long">장편</option>
        </select>
        <input
          className="mt-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="출처를 입력하세요."
          type="text"
          {...register('source', {
            required: true,
          })}
        />
        <input
          className="mt-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="챕터1의 제목을 입력하세요."
          type="text"
          {...register('chapterTitle', {
            required: true,
          })}
        />
        <div className="mt-4">
          <textarea
            rows={8}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 font-maruBuri text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="영어 번역본을 입력하세요."
            {...register('content', {})}
          />
        </div>
        <textarea
          rows={4}
          className="mt-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="한글 번역본을 입력하세요."
          {...register('contentKo', {})}
        />
        <textarea
          rows={4}
          className="my-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="일본어 번역본을 입력하세요."
          {...register('contentJp', {})}
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-yellow-300 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-400 focus:outline-none focus:ring-0 focus:ring-primary"
        >
          추가하기
        </button>
      </form>
    </>
  )
}

export default ClientPage
