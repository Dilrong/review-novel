'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import Swal from 'sweetalert2'
import supabase from '@/lib/utils/supabase'
import sendSlackMessage from '@/lib/utils/slack'

type Inputs = {
  email: string
  password: string
}

function ClientPage() {
  const router = useRouter()
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      })

      if (error) {
        Swal.fire(
          '로그인 오류가 발생하였습니다.',
          '아이디와 비밀번호를 확인해주세요.',
          'error',
        )
        sendSlackMessage(
          '#개발-알림',
          '오류봇',
          ':space_invader:',
          `[admin.novelduck.farm | auth] ${error.message}`,
        )
        return
      }

      if (authData.user.email !== 'admin@cowcow.farm') {
        await supabase.auth.signOut()
      }

      router.push('/')
      router.refresh()
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
        `[admin.novelduck.farm | auth] ${error}`,
      )
    }
  }

  return (
    <section>
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <a
          href="/"
          className="mb-6 flex items-center font-maruBuri text-2xl font-semibold text-gray-900"
        >
          Novel<span className="ml-1 font-bold text-yellow-300">DucK</span>
        </a>
        <div className="w-full rounded-lg bg-white shadow dark:border sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              어드민 로그인
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  <input
                    type="email"
                    {...register('email', {
                      required: true,
                    })}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary focus:ring-primary sm:text-sm"
                    placeholder="name@email.com"
                    required
                  />
                  계정명
                </label>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-900 "
                >
                  <input
                    type="password"
                    {...register('password', {
                      required: true,
                    })}
                    placeholder="••••••••"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary focus:ring-primary sm:text-sm"
                    required
                  />
                  비밀번호
                </label>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-yellow-300 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-400 focus:outline-none focus:ring-0 focus:ring-primary"
              >
                로그인
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientPage
