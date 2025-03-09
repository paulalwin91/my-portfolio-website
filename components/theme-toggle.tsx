import { useTheme } from "next-themes"
import React, { useEffect } from "react"
import { Button } from "./ui/button"
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"



export default function ThemeToggle() {

    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <Button
            size='sm'
            variant={"ghost"}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>

            {theme === 'dark' ? (
                <SunIcon className='size-4 text-orange-300' />
            ) : (
                <MoonIcon className='size-4 text-sky-950' />
            )}

            <span className='sr-only'>Toggle theme</span>
        </Button>

    )
}