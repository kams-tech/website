import React from 'react'
import Image from './Image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'

const defaultOptions = {
    renderMark: {
        [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
        [INLINES.HYPERLINK]: (node, children) => {
            const { uri } = node.data
            return (
                <a href={uri} className="underline">
                    {children}
                </a>
            )
        },
        [BLOCKS.HEADING_2]: (node, children) => {
            return <h2>{children}</h2>
        },
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const imageData = node.data.target
            return (
                <Image {...imageData} />
            )
        }
    },
}

export default function Text({ richText, options = {}, ...props }) {
    const { json } = richText
    const raw = JSON.stringify(json)
    return (
        <div {...props}>
            {renderRichText({ raw }, { ...defaultOptions, ...options })}
        </div>
    )
}