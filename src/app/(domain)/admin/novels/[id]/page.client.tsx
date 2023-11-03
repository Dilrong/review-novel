'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Novel from '@/lib/types/Novel'
import Chapter from '@/lib/types/Chapter'
import supabase from '@/lib/utils/supabase'
import sendSlackMessage from '@/lib/utils/slack'
import Swal from 'sweetalert2'

interface Props {
  novel: Novel
  chapterList: Chapter[]
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

function ClientPage({ novel, chapterList }: Props) {
  const router = useRouter()
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const { data: novelData, error: novelError } = await supabase
        .from('novel')
        .update({
          title: data.title,
          category: data.category,
          length: data.length,
        })
        .eq('id', novel.id)
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

      const { error: chapterError } = await supabase
        .from('chapter')
        .update({
          order: 1,
          title: data.chapterTitle,
          content: data.content,
          content_ko: data.contentKo,
          content_jp: data.contentJp,
          source: data.source,
          novel_id: novelData[0].id,
        })
        .eq('novel_id', novel.id)
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
        `[admin.novelduck.farm | novels/${novel.id}] ${error}`,
      )
    }
  }

  const deleteNovel = async (id: number) => {
    try {
      const { error } = await supabase.from('novel').delete().eq('id', id)

      if (error) {
        Swal.fire(
          '오류가 발생하였습니다.',
          '오류는 개발 담당자에게 바로 전달됩니다.',
          'error',
        )
        sendSlackMessage(
          '#개발-알림',
          '오류봇',
          ':space_invader:',
          `[admin.novelduck.farm | novels/${novel.id}] Code: ${error.code} | Message: ${error.message}`,
        )

        return
      }

      Swal.fire(
        '삭제완료',
        `요청하신 ${novel.title}를 삭제하였습니다.`,
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
        `[admin.novelduck.farm | novels/${novel.id}] ${error}`,
      )
    }
  }

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4">
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-medium text-gray-900 "
          >
            <input
              className="mt-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="제목을 입력하세요."
              type="text"
              defaultValue={novel.title}
              {...register('title', {
                required: true,
              })}
            />
            제목
          </label>
        </div>
        <div className="mt-4">
          <label
            htmlFor="category"
            className="mb-2 block text-sm font-medium text-gray-900 "
          >
            카테고리
            <select
              className="mt-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              defaultValue={novel.category}
              {...register('category', {
                required: true,
              })}
            >
              <option selected>카테고리를 선택해주세요.</option>
              <option value="fantasy">FANTASY</option>
              <option value="fun">FUN</option>
              <option value="meme">MEME</option>
              <option value="horror">HORROR</option>
              <option value="romance">ROMANCE</option>
              <option value="sad">SAD</option>
              <option value="sf">SF</option>
              <option value="etc">ETC</option>
            </select>
          </label>
        </div>
        <div className="mt-4">
          <label
            htmlFor="length"
            className="mb-2 block text-sm font-medium text-gray-900 "
          >
            길이
            <select
              className="mt-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              defaultValue={novel.length}
              {...register('length', {
                required: true,
              })}
            >
              <option selected>길이를 선택해주세요.</option>
              <option value="short">단편</option>
              <option value="long">장편</option>
            </select>
          </label>
        </div>
        {chapterList.map((chapter) => (
          <div key={chapter.id}>
            <label
              htmlFor="source"
              className="mb-2 mt-4 block text-sm font-medium text-gray-900"
            >
              챕터 1.
              <input
                className="my-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="챕터1의 제목을 입력하세요."
                type="text"
                defaultValue={chapter.title}
                {...register('chapterTitle', {
                  required: true,
                })}
              />
              <textarea
                rows={4}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                defaultValue={chapter.content}
                placeholder="내용을 입력하세요."
                {...register('content', {})}
              />
              <textarea
                rows={4}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                defaultValue={chapter.content_ko}
                placeholder="한글 번역본을 입력하세요."
                {...register('contentKo', {})}
              />
              <textarea
                rows={4}
                className="my-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                defaultValue={chapter.content_jp}
                placeholder="일본어 번역본을 입력하세요."
                {...register('contentJp', {})}
              />
            </label>
            <div className="mt-4">
              <label
                htmlFor="source"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                출처
                <input
                  className="mt-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="출처를 입력하세요."
                  type="text"
                  defaultValue={chapter.source}
                  {...register('source', {
                    required: true,
                  })}
                />
              </label>
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="focus:ring-primary-300 mt-8 w-full rounded-lg bg-yellow-300 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-400 focus:outline-none focus:ring-0"
        >
          수정하기
        </button>
      </form>
      <button
        type="button"
        className="focus:ring-primary-300 mt-2 w-full rounded-lg bg-red-300 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-0"
        onClick={() => {
          deleteNovel(novel.id)
        }}
      >
        삭제하기
      </button>
    </>
  )
}

export default ClientPage
