import { Post } from '@/types/post'

export const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js 14",
    description: "Learn how to build modern web applications with Next.js 14",
    date: "2024-01-02",
    viewCount: 1234,
    content: `
# Getting Started with Next.js 14

Next.js is a powerful framework for building React applications. In this post, we'll explore its key features and how to get started.

## Key Features

1. Server Components
2. File-based Routing
3. API Routes
4. Server-side Rendering

## Getting Started

First, create a new Next.js project:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

## Conclusion

Next.js 14 brings significant improvements to the developer experience and application performance.
    `
  },
  {
    id: "2",
    title: "Understanding React Server Components",
    description: "Deep dive into React Server Components and their benefits",
    date: "2024-01-02",
    viewCount: 856,
    content: `
# Understanding React Server Components

React Server Components represent a paradigm shift in how we build React applications. Let's explore what makes them special.

## What are Server Components?

Server Components are a new way to build React applications that combine the rich interactivity of client-side apps with the improved performance of traditional server rendering.

## Benefits

1. Reduced Bundle Size
2. Improved Performance
3. Better SEO
4. Direct Backend Access

## Best Practices

- Keep data fetching on the server
- Use client components for interactivity
- Leverage streaming for better UX

## Conclusion

Server Components are changing how we think about React applications, providing a better balance between performance and developer experience.
    `
  }
]
