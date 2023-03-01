import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useContentfulImage } from 'gatsby-source-contentful/hooks';

const removeProtocol = src => {
    const url = new URL(src);
    return url.href.slice(url.protocol.length);
}

export default function Image({ description, ...props }) {

    const dynamicImage = useContentfulImage({
        image: {
            ...props,
            url: removeProtocol(props.url)
        }
    })

    return <GatsbyImage image={dynamicImage} alt={description} />
}