import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./HowItWorks.module.scss";

export const HowItWorks = () => {
    return (
        <section className={styles.root}>
            <h2>How it works?</h2>
            <span>Integrated with the accounting software of a merchant and the supplier</span>

            <div className={styles.details}>
                <div className={styles.detail} data-index="1">
                    <h3 className={styles.detailTxt}>
                        Supplier-merchant payment terms are recognized
                    </h3>
                    <StaticImage
                        src="../../images/detail-1.png"
                        loading="eager"
                        formats={["auto", "webp", "avif"]}
                        alt="Supplier-merchant payment terms are recognized"
                        className={styles.detailImg}
                    />
                </div>
                <div className={styles.detail} data-index="2">
                    <h3 className={styles.detailTxt}>
                        Invoices are collected from the supplier
                    </h3>
                    <StaticImage
                        src="../../images/detail-2.png"
                        loading="eager"
                        formats={["auto", "webp", "avif"]}
                        alt="Supplier-merchant payment terms are recognized"
                        className={styles.detailImg}
                    />
                </div>
                <div className={styles.detail} data-index="3">
                    <h3 className={styles.detailTxt}>
                        Paysaction debits the merchant bank account and sends money to the supplier
                    </h3>
                    <StaticImage
                        src="../../images/detail-3.png"
                        loading="eager"
                        formats={["auto", "webp", "avif"]}
                        alt="Supplier-merchant payment terms are recognized"
                        className={styles.detailImg}
                    />
                </div>
            </div>
        </section>
    );
};