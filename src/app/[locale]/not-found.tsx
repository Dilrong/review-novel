'use client'

import Link from 'next-intl/link'

export default function Custom404() {
  return (
    <section className="flex min-h-screen">
      <div className="mx-auto flex max-w-screen-xl content-center items-center px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
            😅 404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            That page doesn’t exist.
          </p>
          <p className="mb-4 text-lg font-light ">
            Sorry, we can&apos;t find that page. <br />
            You&apos;ll find lots to explore on the home page.
          </p>
          <Link
            href="/"
            className="my-4 inline-flex rounded px-5 py-2.5 text-center text-sm font-medium text-white"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  )
}
