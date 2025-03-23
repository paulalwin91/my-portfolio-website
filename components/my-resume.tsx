import React from "react"


export default function Resume({ path, name }: ResumeProps) {

    return (
        <div className="pdf-container">
            <h1 className="text-2xl font-bold mb-4">{name}</h1>
            <iframe
                src={path}
                className="w-full h-screen border-2"
                title="English Resume PDF"
            />
        </div>
    )
}