import Image from 'next/image'
import authorImage from '@/public/images/me/paulalwin.jpeg'
import Link from 'next/link'

export default function Intro() {
    return (
        <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
            <div className='mt-2 flex-1 md:mt-0'>
                <h1 className='title no-underline'>Hey, I&#39;m Paul.</h1>
                <p className='mt-3 font-light text-muted-foreground'>
                    I&#39;m a senior software engineer in .Net with over 10 years of experience based in Montreal, Canada -
                    passionate about learning new technologies and sharing knowledge with others. Click below for more details and my resume.
                </p>
                <p className='mt-3 font-light text-muted-foreground'>
                    <strong>Key Skills - C# | ASP.NET Core | SQL | CI/CD (Jenkins) | Powershell | Azure | React | Next.js | Angular</strong>
                </p>
            </div>
            <div className='relative'>
                <Link href="/aboutme">
                    <Image
                        className='flex-1 rounded-lg'
                        src={authorImage}
                        alt='Paul Alwin'
                        width={175}
                        height={175}
                        priority
                    />
                </Link>
            </div>
        </section >
    )
}