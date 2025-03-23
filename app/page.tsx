import Intro from "@/components/intro";
import Resume from "@/components/my-resume";
import ProjectsWithSearch from "@/components/projects-with-search";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function Home() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-4xl'>
        <Intro />
        <RecentPosts />
        <div className="mt-10">
          <RecentProjects />
        </div>
      </div>
    </section>
  )
}