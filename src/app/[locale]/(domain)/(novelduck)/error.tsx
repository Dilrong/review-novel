'use client'

export default function Custom500() {
  return (
    <section className="flex min-h-screen bg-white">
      <div className="mx-auto flex max-w-screen-xl content-center items-center px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-primary lg:text-9xl">
            🤯 500
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Internal Server Error.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 ">
            We are already working to solve the problem.
          </p>
        </div>
      </div>
    </section>
  )
}
