'use client'

import React from 'react'
import Select from '@/app/_components/atoms/Select/Select'

interface Props {}

// eslint-disable-next-line no-empty-pattern
function AdminNovelLengthSelect({}: Props) {
  return (
    <Select>
      <option selected>길이를 선택해주세요.</option>
      <option value="short">단편</option>
      <option value="long">장편</option>
    </Select>
  )
}

export default AdminNovelLengthSelect
