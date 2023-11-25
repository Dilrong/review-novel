'use client'

import React from 'react'
import { marked } from 'marked'
import DOMPurify from 'isomorphic-dompurify'

interface Props {
  content: string
}

function LearningViewer({ content }: Props) {
  return (
    <article
      className="prose-xs mt-2 leading-8"
      dangerouslySetInnerHTML={{
        __html: marked(DOMPurify.sanitize(content)),
      }}
    />
  )
}

export default LearningViewer
