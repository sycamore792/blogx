'use client';

import NextLink from 'next/link'
import { Card, CardFooter, Button, Image } from "@nextui-org/react"
import { formatNumber } from "@/utils/format"

interface BlogPostCardProps {
  id: string
  title: string
  description: string
  date: string
  viewCount: number
}

export default function BlogPostCard({ id, title, description, date, viewCount }: BlogPostCardProps) {
  return (
    <Card className="border-none min-h-[200px] relative group flex flex-col md:flex-row overflow-hidden" radius="lg">
      {/* Image container with aspect ratio */}
      <div className="w-full md:w-1/2 relative">
        <div className="aspect-[16/9] md:aspect-none md:h-full">
          <Image
            isZoomed
            alt={title}
            className="object-cover w-full h-full z-0"
            src="/post-cover.jpg"
            radius="none"
            classNames={{
              wrapper: "rounded-none"
            }}
          />
        </div>
      </div>

      {/* Content container */}
      <div className="flex-1 p-4 md:p-6 flex flex-col justify-between bg-white relative min-h-[180px]">
        <div className="mb-12">
          <h2 className="text-xl text-gray-800 font-light mb-2 line-clamp-2">
            {title}
          </h2>
          <p className="text-gray-500 font-light text-sm line-clamp-2 md:line-clamp-3">
            {description}
          </p>
        </div>

        <CardFooter className="justify-between border-t border-gray-100 overflow-hidden py-3 absolute bottom-0 left-0 right-0">
          <div className="flex items-center gap-2 text-tiny text-gray-400">
            <span className=" md:inline">{date}</span>
            <span className=" md:inline">•</span>
            <div className="flex items-center gap-1">
              <span>{formatNumber(viewCount)}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <Button
            as={NextLink}
            href={`/posts/${id}`}
            className="text-tiny text-gray-700 bg-gray-100 hover:bg-gray-200 min-w-[80px]"
            radius="lg"
            size="sm"
          >
            Read More
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}
