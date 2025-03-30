import { getProjects } from '@/lib/projects'
import ProjectsWithSearch from '@/components/projects-with-search';
import TodoApp from '@/components/todo-app/ToDoApp';

export default async function ProjectsPage() {
    const projects = await getProjects()

    return (
        <section className='pb-24 pt-40'>
            <div className='container max-w-4xl'>
                <h1 className='title mb-12'>Projects</h1>

                {/* <TodoApp /> */}
                <ProjectsWithSearch projects={projects} />
            </div>
        </section>
    )
}