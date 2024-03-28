/**
 * @author Millicent Riordan; AtlantaEmrys2002
 * @module LandingPage
 * @external Script
 * @description Used to create the content for the home page on the website.
 */

`use client`;

import Script from 'next/script'

/**
 * @exports LandingPage
 * @function
 * @returns HTML Layout with appropriate content.
 */
export default function LandingPage() {
    return <div><div className="container"><iframe title="AR Component" className="responsive-iframe" src="https://atlantaemrys2002.github.io/blah/" allowFullScreen={true}></iframe></div><div><p>Please use Chrome when interacting with our website to ensure compatibility.</p></div><div><p>For more information on Quantum Computing, please consult: </p><a href="https://skillsbuild.org/students/course-catalog/quantum-computing">IBM Quantum Skillsbuild</a></div><Script src="./Chatbot/Chatbot.js"/></div>;
}