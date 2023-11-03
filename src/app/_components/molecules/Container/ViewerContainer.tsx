'use client'

import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function ViewerContainer({ children }: Props) {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col px-2 py-4 font-maruBuri">
      {children}
    </section>
  )
}

export default ViewerContainer
