import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../Button";
import * as styles from "./Hero.module.scss";

export const Hero = () => {
    const handleBtnClick = () => {
        const formSection = document.querySelector('#formSection');
        formSection.scrollIntoView({ block: "center", behavior: "smooth" });
    };

    return (
        <section className={styles.root}>
            <div className={styles.intro}>
                <h1>
                    Automatic collection of accounts receivable 
                </h1>
                <span>Receive your payments on time without chasing your customers</span>

                <Button onClick={handleBtnClick}>
                    Get started
                </Button>

                <div className={styles.backedByDesktop}>
                    <span className={styles.backedByText}>Backed by</span>
                    <StaticImage
                        src="../../images/antler.png"
                        loading="eager"
                        formats={["auto", "webp", "avif"]}
                        alt="Antler"
                        className={styles.backedByImg}
                    />
                </div>
            </div>

            <div className={styles.image}></div>

            <div className={styles.backedBy}>
                <span className={styles.backedByText}>Backed by</span>
                <StaticImage
                    src="../../images/antler.png"
                    loading="eager"
                    formats={["auto", "webp", "avif"]}
                    alt="Antler"
                    className={styles.backedByImg}
                />
            </div>
        </section>
    )
};