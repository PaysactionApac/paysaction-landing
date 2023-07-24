import React from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./OurTeam.module.scss";

export const OurTeam = () => {
    return (
        <section className={styles.root}>
            <h2>Our team</h2>

            <div className={styles.teamMembers}>
                <div className={styles.teamMember}>
                    <StaticImage
                        src="../../images/aidos.png"
                        loading="lazy"
                        formats={["auto", "webp", "avif"]}
                        alt="Aidos"
                        className={styles.memberImg}
                    />

                    <div className={styles.memberInfo}>
                        <h4 className={styles.memberName}>Aidos Telzhan</h4>
                        <span className={styles.memberDescription}>CEO&Founder, 15 years of entrepreneurial experience</span>

                        <Link className={styles.memberLink} to="/">Learn more</Link>
                    </div>            
                </div>

                <div className={styles.teamMember}>
                    <StaticImage
                        src="../../images/rustam.png"
                        loading="lazy"
                        formats={["auto", "webp", "avif"]}
                        alt="Rustam"
                        className={styles.memberImg}
                    />

                    <div className={styles.memberInfo}>
                        <h4 className={styles.memberName}>Rustam Kulpeis</h4>
                        <span className={styles.memberDescription}>CPO&Co-Founder, 4 years of entrepreneurial experience</span>

                        <Link className={styles.memberLink} to="/">Learn more</Link>
                    </div>                 
                </div>
            </div>
        </section>
    );
};