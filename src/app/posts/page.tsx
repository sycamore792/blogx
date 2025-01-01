import Link from 'next/link'

export default function Posts() {
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
          <h1 className="text-4xl font-light text-gray-800 mb-4">
            All Posts
          </h1>
          <p className="text-gray-500 font-light">
            Thoughts, stories and ideas.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Post Item */}
            <article className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Link href="/posts/1111" className="block p-6">
                <h2 className="text-2xl text-gray-800 font-light mb-2">
                  Getting Started with Next.js
                </h2>
                <p className="text-gray-500 font-light mb-4">
                  An introduction to building modern web applications with Next.js. Learn about the key features and benefits of using Next.js for your projects.
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <span>January 1, 2025</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
              </Link>
            </article>

            <article className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Link href="/posts/2222" className="block p-6">
                <h2 className="text-2xl text-gray-800 font-light mb-2">
                  The Power of TypeScript
                </h2>
                <p className="text-gray-500 font-light mb-4">
                  Why TypeScript is becoming the standard for modern web development. Explore the benefits of static typing and how it can improve your code quality.
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <span>January 1, 2025</span>
                  <span className="mx-2">•</span>
                  <span>4 min read</span>
                </div>
              </Link>
            </article>

            <article className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Link href="/posts/3333" className="block p-6">
                <h2 className="text-2xl text-gray-800 font-light mb-2">
                  Modern CSS Techniques
                </h2>
                <p className="text-gray-500 font-light mb-4">
                  Exploring the latest CSS features and techniques that are transforming web design. From Grid to Custom Properties, learn how to write better CSS.
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <span>January 1, 2025</span>
                  <span className="mx-2">•</span>
                  <span>6 min read</span>
                </div>
              </Link>
            </article>
          </div>

          {/* Pagination - Optional */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-2">
              <button className="px-4 py-2 border border-gray-100 rounded text-gray-400 cursor-not-allowed">
                Previous
              </button>
              <div className="flex items-center gap-1">
                <span className="px-4 py-2 bg-gray-50 border border-gray-100 rounded text-gray-800">
                  1
                </span>
                <span className="px-4 py-2 hover:bg-gray-50 border border-gray-100 rounded text-gray-500">
                  2
                </span>
                <span className="px-4 py-2 hover:bg-gray-50 border border-gray-100 rounded text-gray-500">
                  3
                </span>
              </div>
              <button className="px-4 py-2 border border-gray-100 rounded text-gray-500 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </main>
    </div>
  )
}