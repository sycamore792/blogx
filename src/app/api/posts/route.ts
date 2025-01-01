import { NextRequest, NextResponse } from 'next/server'
import { Post } from '@/types/post'

// Mock data
const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    description: "An introduction to building modern web applications with Next.js. Learn about the key features and benefits of using Next.js for your projects.",
    date: "January 1, 2025",
    readTime: "5"
  },
  {
    id: "2",
    title: "The Power of TypeScript",
    description: "Why TypeScript is becoming the standard for modern web development. Explore the benefits of static typing and how it can improve your code quality.",
    date: "January 1, 2025",
    readTime: "4"
  },
  {
    id: "3",
    title: "Modern CSS Techniques",
    description: "Exploring the latest CSS features and techniques that are transforming web design. From Grid to Custom Properties, learn how to write better CSS.",
    date: "January 1, 2025",
    readTime: "6"
  },
]

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query') || ''
  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '10')

  // Filter posts based on search query
  let filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.description.toLowerCase().includes(query.toLowerCase())
  )

  // Calculate pagination
  const total = filteredPosts.length
  const totalPages = Math.ceil(total / pageSize)
  const start = (page - 1) * pageSize
  const end = start + pageSize
  
  // Get posts for current page
  filteredPosts = filteredPosts.slice(start, end)

  return NextResponse.json({
    posts: filteredPosts,
    pagination: {
      total,
      totalPages,
      currentPage: page,
      pageSize
    }
  })
}
