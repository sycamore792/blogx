'use client'

import { Post } from '@/types/post'
import ReactMarkdown from 'react-markdown'
import { Image } from '@nextui-org/react'
import { formatNumber } from '@/utils/format'

export function PostContent({ post }: { post: Post }) {
  return (
    <article className="max-w-4xl mx-auto p-6">
      {/* Cover image */}
      {post.coverImage && (
        <div className="mb-8">
          <Image
            src={post.coverImage}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

      {/* Metadata */}
      <div className="flex items-center gap-4 text-gray-600 mb-8">
        <time>{post.date}</time>
        <span>·</span>
        <span>{formatNumber(post.viewCount)} views</span>
      </div>

      {/* Content */}
      <div className="markdown-content prose prose-lg max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  )
}
