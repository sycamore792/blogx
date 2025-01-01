'use client';

import Link from 'next/link'
import BlogPostCard from '../../components/BlogPostCard'
import { Post } from '../../types/post'
import { Input } from "@nextui-org/react"
import { SearchIcon } from '../../components/icons/SearchIcon'
import { useState } from 'react'
import { Pagination, PaginationItem, PaginationCursor} from "@nextui-org/pagination";

export default function Posts() {
  const [searchQuery, setSearchQuery] = useState('')

  const posts: Post[] = [
    {
      id: "1111",
      title: "Getting Started with Next.js",
      description: "An introduction to building modern web applications with Next.js. Learn about the key features and benefits of using Next.js for your projects.",
      date: "January 1, 2025",
      readTime: "5"
    },
    {
      id: "2222",
      title: "The Power of TypeScript",
      description: "Why TypeScript is becoming the standard for modern web development. Explore the benefits of static typing and how it can improve your code quality.",
      date: "January 1, 2025",
      readTime: "4"
    },
    {
      id: "3333",
      title: "Modern CSS Techniques",
      description: "Exploring the latest CSS features and techniques that are transforming web design. From Grid to Custom Properties, learn how to write better CSS.",
      date: "January 1, 2025",
      readTime: "6"
    }
  ]

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <Link 
            href="/"
            className="text-gray-500 hover:text-gray-800 transition-colors flex items-center gap-1 mb-8 w-fit"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-light text-gray-800 mb-2">
                All Posts
              </h1>
              <p className="text-gray-500 font-light">
                Thoughts, stories and ideas.
              </p>
            </div>
            <Input
              classNames={{
                base: "max-w-full sm:max-w-[24rem] h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Search posts..."
              size="sm"
              startContent={<SearchIcon size={18} />}
              type="search"
              value={searchQuery}
              onValueChange={setSearchQuery}
            />
          </div>
        </div>

        {/* Posts Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {filteredPosts.map(post => (
              <BlogPostCard key={post.id} {...post} />
            ))}
            {filteredPosts.length === 0 && (
              <p className="text-center text-gray-500 py-8">
                No posts found matching your search.
              </p>
            )}
          </div>

          <div className="mt-12 flex justify-center">
            <Pagination 
              color="primary" 
              initialPage={3} 
              total={10}
              size="lg"
              className="gap-2"
              showControls
            />
          </div>
        </div>
      </main>
    </div>
  )
}