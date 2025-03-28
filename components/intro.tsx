import Image from 'next/image'
import authorImage from '@/public/images/me/paulalwin.jpeg'
import Link from 'next/link'

export default function Intro() {
    return (
        <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-16 md:flex-row md:items-center'>
            <div className='mt-2 flex-1 md:mt-0'>
                <h1 className='title no-underline'>Hey, I&#39;m Paul.</h1>
                <p className='mt-3 mb-7 font-light text-muted-foreground'>
                    I&#39;m a senior software engineer in .Net with over 10 years of experience based in Montreal, Canada -
                    passionate about learning new technologies and sharing knowledge with others.
                </p>
                <p className='mt-3 font-light text-muted-foreground'>
                    <strong><i>Key Skills - C# | ASP.NET Core | SQL | CI/CD (Jenkins) | Powershell | Azure | React | Next.js | Angular</i></strong>
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
                        title="My resume and more details."
                    />
                </Link>
            </div>
        </section >
    )
}