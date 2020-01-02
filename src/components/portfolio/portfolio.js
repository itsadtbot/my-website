import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation';
import Instagram from '../../projects/Instagram_User_Assessment.pdf'
import SUS from '../../projects/SUS.pdf'
import CourseraHE from '../../projects/Coursera-HeuristicEval.pdf'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
        // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
        // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
        // optional, default to 1.
    },
};




export default class Portfolio extends Component {

    render() {
        return (
            <React.Fragment>
                <section id="portfolio">
                    <div>
                        <h1><span>Projects</span></h1>
                    </div>
                    <br />
                    <div>
                        <h2>Check out some of my work here!</h2>
                    </div>
                    <br />
                    <Carousel
                        swipeable={false}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        renderButtonGroupOutside={true}

                    >

                        <div className="columns portfolio-item">
                            <div>
                                <div className="item-wrap">
                                    <a href="#modal-02" title>
                                        <img src="images/portfolio/instagram.jpg"></img>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>User Needs Assessment - Instagram</h5>
                                                {/* <p>Web Development</p> */}
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="columns portfolio-item">
                            <div>
                                <div className="item-wrap">
                                    <a href="#modal-SUS" title>
                                        <img src="images/portfolio/StartUpStarter.jpg"></img>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>StartUp Starter</h5>
                                                {/* <p>Web Development</p> */}
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="columns portfolio-item">
                            <div>
                                <div className="item-wrap">
                                    <a href="#modal-CourseraHE" title>
                                        <img src="images/portfolio/coursera.jpg"></img>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Coursera- Heuristic Evaluation</h5>
                                                {/* <p>Web Development</p> */}
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="columns portfolio-item">
                            <div>
                                <div className="item-wrap">
                                    <a href="#modal-02" title>
                                        <img src="images/portfolio/art.jpg"></img>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Hula Hooping</h5>
                                                <p>Web Development</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </Carousel>
                    <div id="modal-02" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/affinitywall.jpg" alt="User Needs Assessment - Instagram" />
                        <div className="description-box">
                            <h4>User Needs Assessment - Instagram</h4>
                            <p>Instagram is a popular social media platform with over 1 billion active users. Users share moments of their life via photos with their friends and family. Businesses use Instagram to increase their customer base and spread awareness.
What do Instagrammers find useful or frustrating while uploading their pictures? I want to explore the whole process of uploading a picture (or multiple pictures) and understand which parts users like and don't like. 
</p>
                            <span className="categories"><i className="fa fa-tag" />User Experience, Social Media</span>
                        </div>
                        <div className="link-box">
                            <a href = {Instagram} target = "_blank">Open PDF</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    <div id="modal-SUS" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/SUS.jpg" alt="StartUp Starter" />
                        <div className="description-box">
                            <h4>StartUp Starter</h4>
                            <p>There are many upcoming startups in the world today, approaching problems with creative solutions. This platform has been designed to help them start up their start up! If someone has an idea that can change the world, this application will help them get started. It will provide a structure to the entire process, in an easy and efficient manner.</p>
                            <span className="categories"><i className="fa fa-tag" />User Experience, User Interface Design, Web Design</span>
                        </div>
                        <div className="link-box">
                            <a href = {SUS} target = "_blank">Open PDF</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    <div id="modal-CourseraHE" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/coursera-icon.jpg" alt="Coursera- Heuristic Evaluation" />
                        <div className="description-box">
                            <h4>Heuristic Evaluation of Coursera Discussion Boards</h4>
                            <span className="categories"><i className="fa fa-tag" />User Experience, User Interface Design, Web Design</span>
                        </div>
                        <div className="link-box">
                            <a href = {CourseraHE} target = "_blank">Open PDF</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                
                </section>
            </React.Fragment>
        );
    }
}
