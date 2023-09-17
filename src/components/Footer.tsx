"use client";

const Footer = () => {
  return (
    <>
      <section className="text-xs bg-yellow-50">
        <article className="px-4 py-2">
          <span className="font-bold text-yellow-500 pr-4">공지</span>
          <span className="text-xs">내용</span>
        </article>
      </section>
      <footer className="bg-neutral-50 shadow">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <span className="font-ridi block text-xs text-gray-700 sm:text-center mb-1">
            소설 덕후를 위한 공간 - 노벨덕
          </span>
          <span className="block text-sm text-gray-700 sm:text-center ">
            © 2023{" "}
            <a href="/" className="hover:underline">
              Grit.Farm
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
