import path from 'path'
import fs from 'fs/promises'
import matter from 'gray-matter'
import { metadata } from '@/app/layout'

const rootDirectory = path.join(process.cwd(), 'content', 'posts')


export type Post = {
    metadata: PostMetadata
    content: string
}

export type PostMetadata = {
    title?: string
    summary?: string
    image?: string
    author?: string
    publishedAt?: string
    slug?: string
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    try {

        const filePath = path.join(rootDirectory, `${slug}.mdx`)
        const fileContents = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(fileContents)
        return { metadata: { ...data, slug }, content }

    } catch (error) {
        console.error(`Error getting post by slug: ${slug}`, error)
        return null
    }
}
