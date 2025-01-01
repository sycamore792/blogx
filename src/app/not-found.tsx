'use client'

import Link from 'next/link'
import { Button } from '@nextui-org/react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">page not found</h2>
      <p className="text-gray-500 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <Button color="primary" size="lg">
          Go Home
        </Button>
      </Link>
    </div>
  )
}
