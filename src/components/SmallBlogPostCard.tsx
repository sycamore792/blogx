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

export default function SmallBlogPostCard({ id, title, description, date, viewCount }: BlogPostCardProps) {
  return (
    <Card isFooterBlurred className="border-none h-[300px] relative group" radius="lg">
      <Image
       
        alt={title}
        className="object-cover w-full h-full z-0"
        src="/post-cover.jpg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 z-10" />
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
        <div>
          <h2 className="text-2xl text-white/90 font-light mb-2">
            {title}
          </h2>
          <p className="text-white/70 font-light line-clamp-2">
            {description}
          </p>
        </div>
      </div>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-5 min-w-[280px] w-[60%] max-w-[380px] left-1/2 -translate-x-1/2 shadow-small z-30">
        <div className="flex items-center text-tiny text-white/60">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <div className="flex items-center gap-1">
            <span>{formatNumber(viewCount)}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
        <NextLink href={`/posts/${id}`}>
          <Button
            className="text-tiny text-white bg-black/20"
            radius="lg"
            size="sm"
            variant="flat"
          >
            Read More
          </Button>
        </NextLink>
      </CardFooter>
    </Card>
  )
}
