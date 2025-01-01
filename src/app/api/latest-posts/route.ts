import { NextResponse } from 'next/server'
import { Post } from '@/types/post'

// Mock data - using the same posts but we'll sort them by date
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
  }
]

export async function GET() {
  // Sort posts by date (newest first) and return the latest ones
  // In a real application, you would fetch this from a database
  const latestPosts = [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 2) // Get only the latest 2 posts

  return NextResponse.json({ posts: latestPosts })
}
