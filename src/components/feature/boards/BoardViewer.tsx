'use client'

import React from 'react'
import { marked } from 'marked'
import DOMPurify from 'isomorphic-dompurify'

interface Props {
  content: string
}

function BannerViewer({ content }: Props) {
  return (
    <article
      className="prose mt-2 leading-10"
      dangerouslySetInnerHTML={{
        __html: marked(DOMPurify.sanitize(content)),
      }}
    />
  )
}

export default BannerViewer
