import { NextResponse } from 'next/server'
import { createApiResponse } from '@/types/api'
import { Post } from '@/types/post'

// 模拟数据
const posts = [
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
    title: "The Power of TypeScript",
    description: "Why TypeScript is becoming the standard for modern web development. Explore the benefits of static typing and how it can improve your code quality.",
    date: "January 1, 2025",
    viewCount: 5000,
    content: `
# The Power of TypeScript

TypeScript adds static typing to JavaScript, making it more powerful and maintainable. Let's explore why TypeScript is becoming the go-to choice for modern web development.

## Benefits of TypeScript

- Static typing
- Better IDE support
- Early error detection
- Enhanced code readability

## Getting Started with TypeScript

Install TypeScript:

\`\`\`bash
npm install -g typescript
\`\`\`

Create your first TypeScript file:

\`\`\`typescript
interface User {
  name: string;
  age: number;
}

function greet(user: User) {
  return \`Hello, \${user.name}!\`;
}
\`\`\`

## Key Features

### 1. Type Inference

TypeScript can infer types automatically in many cases.

### 2. Interface and Type Definitions

Define complex types with interfaces and type aliases.

### 3. Generics

Write reusable, type-safe code with generics.

## Conclusion

TypeScript is an invaluable tool for modern web development, providing better tooling, fewer bugs, and improved maintainability.
    `
  }
]

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = await context.params
  const post = posts.find(p => p.id === id)
  
  if (!post) {
    return NextResponse.json(
      createApiResponse(null, '文章不存在', 404)
    )
  }

  return NextResponse.json(
    createApiResponse<Post>(post)
  )
}
