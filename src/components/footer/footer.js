import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <footer>

                    <div class="row">

                        <div class="twelve columns">

                            <ul class="social-links">
                            <li><a href="https://www.facebook.com/aditi.bhat.37" target="_blank"><i className="fa fa-facebook" /></a></li>
                                <li><a href="https://www.instagram.com/itsadtbot" target="_blank"><i className="fa fa-instagram" /></a></li>
                                <li><a href="https://www.youtube.com/hoopsdontlie" target="_blank"><i className="fa fa-youtube" /></a></li>
                                <li><a href="https://www.linkedin.com/in/aditibhat7" target="_blank"><i className="fa fa-linkedin" /></a></li>
                                {/* <li><a href="https://www.linkedin.com/in/aditibhat7" target="_blank"><i className="fa fa-wordpress" /></a></li> */}
                                <li><a href="https://twitter.com/itsadtbot" target="_blank"><i className="fa fa-twitter" /></a></li>
                                <li><a href="https://github.com/itsadtbot" target="_blank"><i className="fa fa-github" /></a></li>
                                
                                <li><a href="mailto:aditiabhat@gmail.com" target="_blank"><i className="fa fa-envelope" /></a></li>

                                {/* <li><a href="#"><i className="fa fa-dribbble" /></a></li> */}
                                <li><a href="https://join.skype.com/invite/kP12MErRSocy" target="_blank"><i className="fa fa-skype" /></a></li>
                            </ul>

                            <ul class="copyright">
                                <li>&copy; Aditi Bhat 2021</li>
                                {/* <li>Template by Styleshout</li>
                                <li>Edited by Aditi Bhat</li> */}
                            </ul>

                        </div>

                        {/* <div id="go-top"><a class="smoothscroll" title="Back to Top" href="#home"><i class="icon-up-open"></i></a></div> */}

                    </div>

                </footer>
            </React.Fragment>
        );
    }
}