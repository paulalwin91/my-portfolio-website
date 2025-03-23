import React from "react"


export default function Resume({ path, name }: ResumeProps) {

    return (
        <div className="pdf-container">
            <a
                href={path}
                download
                className="text-white italic underline hover:text-blue-400">
                {name}
            </a>
        </div>
    )
}