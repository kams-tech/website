import React from "react"
import { Image, Text } from "../components/contentful"

export default function Page({ pageContext: { page }, ...props }) {

    return (
        <main>
            <section className="stage__content-section">
                <div className="stage__inner-container">
                    <div className="stage__image-wrapper">
                        <Image {...page.stageImage} />
                    </div>
                    <div className="stage__content">
                        <h1 className="stage__headline">{page.headline}</h1>
                    </div>
                </div>
            </section>

            <section className="content__content-section">
                <div className="content__inner-container">
                    <Text className="content__content-wrapper" richText={page.content} />
                </div>
            </section>

            <section className="editors-picks__content-section">
                <div className="editors-picks__inner-container">
                    <div className="editors-picks__content-wrapper">
                        {/* todo: editors pick */}
                    </div>
                </div>
            </section>

            <section className="teasers__content-section">
                <div className="teasers__inner-container">
                    <div className="teaser__content-wrapper">
                        {/* todo: teaser */}
                    </div>
                </div>
            </section>

        </main>
    )
}