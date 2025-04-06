import { JSX } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'

import Counter from '@/components/counter'
import ToDoApp from './todo-app/ToDoApp'

function Code({ children, ...props }: any) {
    let codeHTML = highlight(children)
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
    code: Code,
    Counter,
    ToDoApp
}

export default function MDXContent(
    props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
    return (
        <div style={{}}>
            <MDXRemote
                {...props}
                components={{ ...components, ...(props.components || {}) }}
            />
        </div>

    )
}