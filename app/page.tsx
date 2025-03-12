import Intro from "@/components/intro";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function Home() {
  const content = `
---
title: "Introduction to MDX"
date: "2023-10-05"
---

# Introduction to MDX

MDX is a powerful format that enables you to write JSX in Markdown documents. This allows you to use React components within your Markdown content.

## Why Use MDX?

- **Component-based**: You can use React components to enhance your Markdown content.
- **Interactive**: Create interactive content with ease.
- **Reusable**: Reuse components across different Markdown files.

## Example

Here is a simple example of using a React component in MDX:
  `

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <Intro />
        <MDXRemote source={content} />
      </div>
    </section>
  )
}