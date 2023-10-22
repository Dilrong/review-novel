"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "../../../../public/images/logo.svg";

interface Props {}

const ClientPage = ({}: Props) => {
  return (
    <div className="flex flex-col min-h-screen text-left px-2">
      <h1 className="text-4xl text-center font-bold mt-8">
        NovelDuck 스타일 가이드
      </h1>
      <h2 className="font-maruBuri mt-2 text-xl text-gray-700 text-center">
        소설로 배우는 자연스러운 외국어 | 노벨덕
      </h2>
      <section className="mt-8">
        <h3 className="text-2xl font-bold mb-4">로고</h3>
        <Image width={100} src={Logo} alt="novelduck logo"></Image>
      </section>
      <section className="mt-8">
        <h3 className="text-2xl font-bold">색상</h3>
        <div>
          <h4 className="text-xl font-bold mt-2">Brand Colors</h4>
          <p className="font-maruBuri text-gray-600 mt-2">
            노벨덕의 브랜드 색상은{" "}
            <span className="text-yellow-300">#fde047</span> 입니다.
          </p>
          <p className="font-maruBuri text-gray-600 mt-2">
            노벨덕은 현재{" "}
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
          <p className="font-maruBuri text-gray-600 mt-2">
            제목이나 웹 표기는{" "}
            <Link
              className="text-blue-600 hover:text-blue-700"
              href="https://fonts.google.com/specimen/Ubuntu"
            >
              Ubuntu
            </Link>
            를 사용합니다.
          </p>
          <p className="font-maruBuri text-gray-600 mt-2">
            본문은 네이버의{" "}
            <Link
              className="text-blue-600 hover:text-blue-700"
              href="https://hangeul.naver.com/maruproject_10"
            >
              마루부리
            </Link>
            를 사용합니다.
          </p>
          <p className="font-maruBuri text-gray-600 mt-2">
            노벨덕은 현재{" "}
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
    </div>
  );
};

export default ClientPage;
