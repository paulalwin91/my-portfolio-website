import Resume from "@/components/my-resume";
import authorImage from '@/public/images/me/potrait.jpeg'
import Image from 'next/image'
export default async function AboutMe() {
    return (
        <section className='pb-24 pt-40'>
            <div className='container max-w-4xl'>
                <h1 className='title mb-12'>About Me</h1>
                <div className='flex flex-col md:flex-row gap-5'>
                    <div className="flex-shrink-0 self-center md:self-start">
                        <Image
                            className='rounded-lg'
                            src={authorImage}
                            alt='Paul Alwin'
                            width={300}
                            height={300}
                            priority
                        />
                    </div>
                    <div className="flex-1">
                        <p>Hello! I’m Paul Alwin, a senior software developer in .net based in Montreal.
                            With over a decade of experience in the software industry, my journey began in India, where I developed a passion for technology.
                            In 2017, I moved here to Canada to pursue a Master’s in Software Engineering, and now working in Societe Generale in Montreal.</p>
                        <br />
                        <p> Majority of my expertise lies in back-end development, specializing in C#, ASP.NET Core, and SQL,
                            with extensive experience in CI/CD pipelines using Jenkins. I also am working on my front end skills by learning
                            React and Next js - for example this website is build on Next.js hosted on Vercel.</p>
                        <br />
                        <p>I’m passionate about technology and am always trying to improve my skills by learning and keeping myself updated
                            with the latest advancements in the software industry. At work I have a growth mindset by proactivly going for challenging tasks
                            and be on the lookout for improving existing processes.</p>
                        <br />
                        <p>This year, I’m aiming to enhance my skills further by obtaining certifications in Azure Cloud.</p>
                        <br />
                        <p>If you’re interested in connecting or have any questions, feel free to drop me an <b><i><a href="mailto:paulalwin.it@gmail.com">email!</a></i></b></p>
                    </div>
                </div>
                <div className="p-6 flex flex-row justify-end gap-5">
                    <span><Resume path="/files/Paul_Alwin_Senior_Dev_En.pdf" name="English Resume" /></span>
                    <span><Resume path="/files/Paul_Alwin_Senior_Dev_Fr.pdf" name="French Resume" /></span>
                </div>
            </div>
        </section>
    )
}