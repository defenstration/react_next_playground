import Link from "next/link"
import posts from "@/data/posts"

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Welcome to my blog website!</h1>
      <div className="text-center">
        <p className="mb-4">Click a post to read more!</p>
        <ul className="space-y-2">
          {posts.map(post => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}