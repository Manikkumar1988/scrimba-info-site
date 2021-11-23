import React from 'react'
import './businesscard.css'

const Info = () => {
    return (
        <div>
            <img
                src="images/Rectangle.png"
                alt="profile pic in business card"
            />
            <h1 className="info--name">Laura Smith</h1>
            <h4 className="info--job-title">Frontend Developer</h4>
            <div className="info--contact--site">laurasmith.website</div>
            <div className="contact">
                <button>Email</button>
                <button>LinkedIn</button>
            </div>
        </div>
    )
}

const About = () => {
    return (
        <div>
            <p className="about--title">About</p>
            <p className="about--content">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
            </p>
        </div>
    )
}

const Interests = () => {
    return (
        <div>
            <p className="about--title">Interests</p>
            <p className="about--content">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="columns">
                    <img
                        className="column"
                        src="images/twitter.svg"
                        alt="twitter"
                    />
                    <img
                        className="column"
                        src="images/facebook.svg"
                        alt="facebook"
                    />
                    <img
                        className="column"
                        src="images/insta.svg"
                        alt="insta"
                    />
                    <img
                        className="column"
                        src="images/git.svg"
                        alt="git"
                    />
                </div>
            </div>
        </div>
    )
}
const BusinessCard = () => {
    return (
        <div className="main">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default BusinessCard