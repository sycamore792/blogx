import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { Post } from '@/types/post'
import { PostContent } from '@/components/PostContent'
import { posts } from '@/data/posts'
import '@/styles/markdown.css'

async function getPost(id: string) {
  const post = posts.find(p => p.id === id)
  
  if (!post) {
    notFound()
  }
  
  return post
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = await getPost(id)
  
  return (
    <Suspense fallback={<PostSkeleton />}>
      <PostContent post={post} />
    </Suspense>
  )
}

function PostSkeleton() {
  return (
    <div className="max-w-4xl mx-auto p-6 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
}