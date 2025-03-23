import Resume from "@/components/my-resume";
import authorImage from '@/public/images/me/potrait.jpeg'
import Image from 'next/image'
export default async function AboutMe() {
    return (
        <section className='pb-24 pt-40'>
            <div className='container max-w-4xl'>
                <h1 className='title mb-12'>About Me</h1>
                <div className='relative'>
                    <Image
                        className='flex-1 rounded-lg'
                        src={authorImage}
                        alt='Paul Alwin'
                        width={300}
                        priority
                    />
                </div>
                <div className="p-6 mt-1000 flex flex-row justify-center gap-5">
                    <span><Resume path="/files/Paul_Alwin_Senior_Dev_En.pdf" name="English Resume" /></span>
                    <span><Resume path="/files/Paul_Alwin_Senior_Dev_Fr.pdf" name="French Resume" /></span>
                </div>
            </div>
        </section>
    )
}