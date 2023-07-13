import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../Button";
import * as styles from "./Form.module.scss";
import OutlinedLogo from "../../images/outlined-logo.svg";

export const Form = () => {
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [dataSent, setDataSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (company && email) {
            setDataSent(true);
            setEmail('');
            setCompany('');
        }
    };

    const handleOK = () => {
        setDataSent(false);
    };

    const handleCompanyChange = (e) => {
        setCompany(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <section className={styles.root} id="formSection">
            {!dataSent ?
            <>
                <StaticImage
                    src="../../images/message.png"
                    loading="lazy"
                    alt="message"
                    className={styles.img}
                    objectFit="contain"
                />

                <form
                    method="post"
                    className={styles.form}
                    onSubmit={handleSubmit}
                    name="contact"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                >
                    <h2>
                        Start collecting your payments from your customers automatically from the first day
                    </h2>
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <input
                        type="text"
                        className={styles.input}
                        value={company}
                        onChange={handleCompanyChange}
                        placeholder="Enter Company name"
                        name="company"
                    />
                    <input
                        type="email"
                        className={styles.input}
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your e-mail"
                        name="email"
                    />

                    <Button type="submit">Get started</Button>
                </form>
            </> : (
                <div className={styles.thanks}>
                    <img src={OutlinedLogo} alt="logo" />

                    <h2>Thank you! We will be in touch shortly</h2>
                    <Button onClick={handleOK}>OK</Button>
                </div>
            )}
        </section>
    );
};