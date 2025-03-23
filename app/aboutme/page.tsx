import Resume from "@/components/my-resume";

export default async function AboutMe() {
    return (
        <section className='pb-24 pt-40'>
            <div className='container max-w-3xl'>
                <h1 className='title mb-12'>About Me</h1>
                <div className="p-6 mt-1000 flex flex-row justify-center gap-5">
                    <span><Resume path="/files/Paul_Alwin_Senior_Dev_En.pdf" name="English Resume" /></span>
                    <span><Resume path="/files/Paul_Alwin_Senior_Dev_Fr.pdf" name="French Resume" /></span>
                </div>
            </div>
        </section>
    )
}