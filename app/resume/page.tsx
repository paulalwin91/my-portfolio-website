import Resume from "@/components/my-resume";

export default async function AboutMe() {
    return (
        <section className='pb-24 pt-40'>
            <div className='container max-w-3xl'>
                <h1 className='title mb-12'>Resume</h1>
                <div className="p-6">
                    <Resume path="/files/Paul_Alwin_Senior_Dev_En.pdf" name="My resume english" />
                </div>
                <div className="p-6">
                    <Resume path="/files/Paul_Alwin_Senior_Dev_Fr.pdf" name="My resume french" />
                </div>
            </div>
        </section>
    )
}