import { notFound } from 'next/navigation'
import posts from '@/data/posts'

export default function Post({ params }: { params: { id: string } }) {
  const post = posts.find(post => post.id === params.id)

  if (!post) notFound()

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <h1 className="text-3xl font-bold">Blog post {params.id}</h1>
      <p className="text-center">{post.content || `This is the content for the blog post ${params.id}`}</p>
    </div>
  )
}