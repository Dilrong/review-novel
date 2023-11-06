'use client'

import React, { ReactNode } from 'react'

interface Props {
  onSubmit: any
  children: ReactNode
}

function AdminAddForm({ onSubmit, children }: Props) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {children}
    </form>
  )
}

export default AdminAddForm
