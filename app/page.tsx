import Intro from "@/components/intro";
import ProjectsWithSearch from "@/components/projects-with-search";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function Home() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <Intro />
        <RecentPosts />
        <div className="mt-10">
          <RecentProjects />
        </div>
      </div>
    </section>
  )
}