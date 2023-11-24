'use client'

import Link from 'next-intl/link'

export default function Custom500() {
  return (
    <section className="flex min-h-screen">
      <div className="mx-auto flex max-w-screen-xl flex-col content-center items-center justify-center px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight  lg:text-9xl">
            🤯 500
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Internal Server Error.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 ">
            We are already working to solve the problem.
          </p>
        </div>
        <Link
          href="/"
          className="my-4 inline-flex rounded px-5 py-2.5 text-center text-sm font-medium"
        >
          Back to Homepage
        </Link>
      </div>
    </section>
  )
}
