import React, { Component } from 'react';


class About extends Component {
    render() {
        return(
            <div className="container-fluid fade-in">
                <div className="row about-container">
                    <div className="about-wrapper">
                        <h1>Hello, future billionaires.</h1>

                        <p>
                            This app is brought to you via the inspiration of the "Double a Penny a Day" analogy and I hope that you enjoyed playing with it. Some people who have heard of that analogy probably thought of it as a fairy tale because it could be hard to double the value of something within one day. But that doesn't make it impossible! Building wealth sure does require a lot of hustling. It is the combination of preparation, perseverance, and patience making it possible. Oh and, don't forget, fantasies do motivate people to keep going <span role="img" aria-label="Unicorn">🦄</span>.

                            <br/>
                            <br/>

                            If you like this app, please 
                            <a className="social-button twitter" target="_blank" href="https://twitter.com/intent/tweet?text=Find%20out%20when%20you'll%20become%20a%20billionaire!%20https%3A//renyxz.github.io/billionaire-by-when" rel="noopener noreferrer"> 
                            <i className="fa fa-twitter"></i> Tweet
                            </a> 
                            or
                            <a className="social-button facebook" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A//renyxz.github.io/billionaire-by-when" rel="noopener noreferrer"> 
                            <i className="fa fa-facebook"></i> Share
                            </a>
                            on facebook!
                        
                            <br/>
                            <br/>

                            Happy wealth adventure!
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;