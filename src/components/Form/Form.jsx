import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../Button";
import * as styles from "./Form.module.scss";

export const Form = () => {
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        if (company && email) {
            console.info(company, email);
        }
    };

    const handleCompanyChange = (e) => {
        setCompany(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <section className={styles.root} id="formSection">
            <StaticImage
                src="../../images/message.png"
                loading="lazy"
                alt="message"
                className={styles.img}
            />

            <div className={styles.form}>
                <h2>
                    Start collecting your payments from your customers automatically from the first day
                </h2>
                <input
                    type="text"
                    className={styles.input}
                    value={company}
                    onChange={handleCompanyChange}
                    placeholder="Enter Company name"
                />
                <input
                    type="email"
                    className={styles.input}
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your e-mail"
                />

                <Button onClick={handleSubmit}>Get started</Button>
            </div>
        </section>
    );
};