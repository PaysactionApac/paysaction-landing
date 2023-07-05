import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./WhyUs.module.scss";

export const WhyUs = () => {
    return (
        <section className={styles.root}>
            <h2>Why us?</h2>

            <div className={styles.features}>
                <div className={styles.feature}>
                    <StaticImage
                        src="../../images/feature-1.png"
                        loading="eager"
                        formats={["auto", "webp", "avif"]}
                        alt="Feature"
                        className={styles.featureImg}
                    />
                    <span className={styles.featureTxt}>Get paid 2-5X faster</span>
                </div>
                <div className={styles.feature}>
                    <StaticImage
                        src="../../images/feature-2.png"
                        loading="eager"
                        formats={["auto", "webp", "avif"]}
                        alt="Feature"
                        className={styles.featureImg}
                    />
                    <span className={styles.featureTxt}>No late payments</span>
                </div>
                <div className={styles.feature}>
                    <StaticImage
                        src="../../images/feature-3.png"
                        loading="eager"
                        formats={["auto", "webp", "avif"]}
                        alt="Feature"
                        className={styles.featureImg}
                    />
                    <span className={styles.featureTxt}>No chasing your customers</span>
                </div>
            </div>
        </section>
    )
};