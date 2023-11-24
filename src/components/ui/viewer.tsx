'use client'

import { marked } from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import React from 'react'

interface Props {
  content: string
}

function Viewer({ content }: Props) {
  marked.use({
    gfm: true,
    breaks: true,
  })

  return (
    <article
      className="prose leading-10"
      dangerouslySetInnerHTML={{
        __html: marked(DOMPurify.sanitize(content)),
      }}
    />
  )
}

export default Viewer
