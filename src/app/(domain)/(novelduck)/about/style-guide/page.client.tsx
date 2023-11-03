'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../../../../../public/images/logo.svg'

function ClientPage() {
  return (
    <div className="flex min-h-screen flex-col text-left">
      <section className="mx-auto flex w-full max-w-7xl flex-col py-4">
        <h1 className="mt-8 text-center text-4xl font-bold">
          NovelDuck 스타일 가이드
        </h1>
        <h2 className="mt-2 text-center font-maruBuri text-xl text-gray-700">
          소설로 배우는 자연스러운 외국어 | 노벨덕
        </h2>
        <section className="mt-8">
          <h3 className="mb-4 text-2xl font-bold">로고</h3>
          <Image width={100} src={Logo} alt="novelduck logo" />
        </section>
        <section className="mt-8">
          <h3 className="text-2xl font-bold">색상</h3>
          <div>
            <h4 className="mt-2 text-xl font-bold">Brand Colors</h4>
            <p className="mt-2 font-maruBuri text-gray-600">
              노벨덕의 브랜드 색상은{' '}
              <span className="text-primary">#fde047</span> 입니다.
            </p>
            <p className="mt-2 font-maruBuri text-gray-600">
              노벨덕은 현재{' '}
              <Link
                className="text-blue-600 hover:text-blue-700"
                href="https://tailwindcss.com/docs/customizing-colors"
              >
                tailwindcss
              </Link>
              를 사용하며 기준점으로 합니다.
            </p>
          </div>
        </section>
        <section className="mt-8">
          <h3 className="text-2xl font-bold">타이포그래피</h3>
          <div>
            <p className="mt-2 font-maruBuri text-gray-600">
              제목이나 웹 표기는{' '}
              <Link
                className="text-blue-600 hover:text-blue-700"
                href="https://fonts.google.com/specimen/Ubuntu"
              >
                Ubuntu
              </Link>
              를 사용합니다.
            </p>
            <p className="mt-2 font-maruBuri text-gray-600">
              본문은 네이버의{' '}
              <Link
                className="text-blue-600 hover:text-blue-700"
                href="https://hangeul.naver.com/maruproject_10"
              >
                마루부리
              </Link>
              를 사용합니다.
            </p>
            <p className="mt-2 font-maruBuri text-gray-600">
              노벨덕은 현재{' '}
              <Link
                className="text-blue-600 hover:text-blue-700"
                href="https://tailwindcss.com/docs/font-size"
              >
                tailwindcss
              </Link>
              를 사용하며 기준점으로 합니다.
            </p>
          </div>
        </section>
        <section className="mt-8">
          <h3 className="text-2xl font-bold">리소스</h3>
        </section>
      </section>
    </div>
  )
}

export default ClientPage
