'use client';

import Image from "next/image";
import Link from "next/link";
import SmallBlogPostCard from '../components/SmallBlogPostCard'
import { Post } from '../types/post'
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]) 

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const response = await fetch('/api/latest-posts')
        const data = await response.json()
        setPosts(data.posts)
      } catch (error) {
        console.error('Error fetching latest posts:', error)
      }
    }

    fetchLatestPosts()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="container mx-auto px-4 py-24 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="relative w-16 h-16">
            <Image
              src="/waving_hand_converted.gif"
              alt="Waving Hand"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl font-light text-gray-800">
            &lt; Coding My Story /&gt;
          </h1>
        </div>
        <p className="text-lg text-gray-500 mt-6 font-light tracking-wide">
          Exploring the digital frontier, one commit at a time
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 shadow-sm">
            <div className="flex items-center space-x-6 mb-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src="/avatar.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
                <p className="text-blue-600 font-medium">Full Stack Developer </p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                Hey there! 👋 I&apos;m a passionate developer who loves building things that live on the internet. 
                With a deep appreciation for clean code and user-centric design, I enjoy crafting digital experiences 
                that make a difference.
              </p>
              
              <div className="py-3">
                <h3 className="text-lg font-medium text-gray-800 mb-2"> Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Golang','Java','TypeScript', 'Next.js', 'Node.js', ].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="py-3">
                <h3 className="text-lg font-medium text-gray-800 mb-2"> Current Focus</h3>
                <p className="leading-relaxed">
                  Currently diving deep into cloud architecture and AI/ML integration in web applications. 
                  Always learning and exploring new technologies to stay at the cutting edge.
                </p>
              </div>

              <div className="py-3">
                <h3 className="text-lg font-medium text-gray-800 mb-2"> Beyond Coding</h3>
                <p className="leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring photography, writing technical blogs, 
                  and contributing to open-source projects. I believe in the power of community and 
                  continuous learning.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center space-x-4">
                <Link href="https://github.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </Link>
                <Link href="https://twitter.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </Link>
                <Link href="https://linkedin.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Posts Section */}
        <section className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl text-gray-800 font-light">
              Latest Posts
            </h2>
            <Link
              href="/posts"
              className="text-gray-500 hover:text-gray-800 transition-colors flex items-center gap-1 group"
            >
              View all
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map(post => (
              <SmallBlogPostCard key={post.id} {...post} />
            ))}
          </div>
        </section>

        {/* 社交媒体链接 Section */}
        {/* <section className="max-w-4xl mx-auto mt-16 text-center">
          <div className="flex justify-center space-x-8">
            <Link
              href="https://github.com/sycamore792"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
            <Link
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-gray-100">
        <div className="text-center text-gray-400 font-light">
          2025 Blogx. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
