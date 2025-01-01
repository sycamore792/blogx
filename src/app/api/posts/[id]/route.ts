import { NextResponse } from 'next/server'
import { createApiResponse } from '@/types/api'
import { Post } from '@/types/post'

// 模拟数据
const posts = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    description: "An introduction to building modern web applications with Next.js. Learn about the key features and benefits of using Next.js for your projects.",
    date: "January 1, 2025",
    viewCount: 5000,
    content: `
# Getting Started with Next.js

Next.js is a powerful React framework that makes building web applications a breeze. In this post, we'll explore the key features that make Next.js stand out.

## Why Next.js?

Next.js provides an excellent developer experience with features like:

- Server-side rendering
- Static site generation
- API routes
- File-system based routing
- Built-in CSS and Sass support

## Getting Started

First, create a new Next.js project:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

Then, run the development server:

\`\`\`bash
cd my-app
npm run dev
\`\`\`

## Key Features

### 1. File-System Based Routing

Next.js uses the file system for routing. Simply create a file in the pages directory, and it becomes a route.

### 2. API Routes

Create API endpoints by adding files to the \`pages/api\` directory.

### 3. Built-in CSS Support

Next.js has built-in support for CSS and CSS Modules.

## Conclusion

Next.js is an excellent choice for building modern web applications. Its features and developer experience make it a top choice for React developers.
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
  { params }: { params: { id: string } }
) {
  const { id } = await params
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