import * as React from "react"

import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { WhyUs } from "../components/WhyUs";
import { HowItWorks } from "../components/HowItWorks";
import { OurTeam } from "../components/OurTeam";
import { Form } from "../components/Form";
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Hero />
    <WhyUs />
    <HowItWorks />
    <OurTeam />
    <Form />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Paysaction" />;

export default IndexPage;