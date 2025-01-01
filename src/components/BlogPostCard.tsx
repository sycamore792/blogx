'use client';

import NextLink from 'next/link'
import { Card, CardFooter, Button, Image } from "@nextui-org/react"

interface BlogPostCardProps {
  id: string
  title: string
  description: string
  date: string
  readTime: string
}

export default function BlogPostCard({ id, title, description, date, readTime }: BlogPostCardProps) {
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
          <span>{readTime} min read</span>
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
