import Head from "next/head";

import ContactForm from "@/components/contactForm";

export default function ContactPage(){
  return(
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description"
        content="Contact me"/>
      </Head>
      <ContactForm/>
    </>
  );
}