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
                        <p>Hello! I’m Paul Alwin, a software developer based in Montreal, currently working at Société Générale.
                            With over a decade of experience in the software industry, my journey began in India, where I developed a passion for technology and innovation.
                            In 2017, I moved to Canada to pursue a Master’s in Software Engineering, which opened up new opportunities in the tech world.</p>
                        <br />
                        <p>During my studies, I interned and worked part-time at Genetec,
                            where I managed a project independently, honing my skills in real-world scenarios.
                            This experience led me to Quantum Consulting, where I worked with clients like Société Générale.
                            In 2021, I was thrilled to join Société Générale as a full-time employee.</p>
                        <br />
                        <p>My expertise lies in back-end development, specializing in C#, ASP.NET Core, and SQL,
                            with extensive experience in CI/CD pipelines using Jenkins. Throughout my career, I’ve had the privilege
                            of mentoring interns and being involved in the interview process, fostering a collaborative
                            and growth-oriented environment.</p>
                        <br />
                        <p>I’m passionate about continuous learning and applying best practices,
                            SOLID principles, and design patterns in my work. While my focus has been on back-end development,
                            I’m also expanding my skills into front-end technologies.
                            This website you’re visiting is built with Next.js, reflecting my commitment to modern web development.</p>
                        <br />
                        <p>This year, I’m aiming to enhance my skills further by obtaining certifications in Azure Cloud.</p>
                        <br />
                        <p>If you’re interested in connecting or have any questions, feel free to drop me an email!</p>
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