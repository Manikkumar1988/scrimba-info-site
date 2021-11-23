import React from 'react'
import './businesscard.css'

const BusinessCard = () => {
    return (
        <div className="main">
            <img
                src="images/Rectangle.png"
                alt="profile pic in business card"
            />
            <div>Laura Smith</div>
            <div>Frontend Developer</div>
            <div>laurasmith.website</div>
            <div className="contact">
                <button>Email</button>
                <button>LinkedIn</button>
                <h6>About</h6>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
                <h6>Interests</h6>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </div>
            <div>
                <div className="footer">
                    <div className="columns"></div>
                    <img
                        className="column"
                        src="images/twitter.svg"
                    />
                    <img
                        className="column"
                        src="images/facebook.svg"
                    />
                    <img
                        className="column"
                        src="images/insta.svg"
                    />
                    <img
                        className="column"
                        src="images/git.svg"
                    />
                </div>
            </div>
        </div>
    )
}

export default BusinessCard