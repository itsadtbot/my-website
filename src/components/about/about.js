import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="about">
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src="https://secure.gravatar.com/avatar/c850f6e86af4253521f6cc9028257398" alt="Aditi Bhat's Profile Picture" />
                        </div>
                        <div class="nine columns main-col">

                            <h2>About Me</h2>

                            <p>To be updated</p>
                        </div>

                        <div className="row">
                            <div className="twelve columns collapsed">
                                {/* portfolio-wrapper */}
                                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                    <div className="columns portfolio-item">
                                        <div className="item-wrap">
                                            <a href="#modal-01" title>
                                                <img alt="" src="images/portfolio/travel.jpg" />
                                                <div className="overlay">
                                                    <div className="portfolio-item-meta">
                                                        <h5>Travel</h5>
                                                        {/* <p>Illustrration</p> */}
                                                    </div>
                                                </div>
                                                <div className="link-icon"><i className="icon-plus" /></div>
                                            </a>
                                        </div>
                                    </div> {/* item end */}
                                    <div className="columns portfolio-item">
                                        <div className="item-wrap">
                                            <a href="#modal-02" title>
                                                <img alt="" src="images/portfolio/hooping.jpg" />
                                                <div className="overlay">
                                                    <div className="portfolio-item-meta">
                                                        <h5>Hula Hooping</h5>
                                                        {/* <p>Web Development</p> */}
                                                    </div>
                                                </div>
                                                <div className="link-icon"><i className="icon-plus" /></div>
                                            </a>
                                        </div>
                                    </div> {/* item end */}
                                    <div className="columns portfolio-item">
                                        <div className="item-wrap">
                                            <a href="#modal-03" title>
                                                <img alt="" src="images/portfolio/psychology.png" />
                                                <div className="overlay">
                                                    <div className="portfolio-item-meta">
                                                        <h5>Psychology</h5>
                                                        {/* <p>Webdesign</p> */}
                                                    </div>
                                                </div>
                                                <div className="link-icon"><i className="icon-plus" /></div>
                                            </a>
                                        </div>
                                    </div> {/* item end */}
                                    <div className="columns portfolio-item">
                                        <div className="item-wrap">
                                            <a href="#modal-04" title>
                                                <img alt="" src="images/portfolio/baking.jpg" />
                                                <div className="overlay">
                                                    <div className="portfolio-item-meta">
                                                        <h5>Baking</h5>
                                                        {/* <p>Photography</p> */}
                                                    </div>
                                                </div>
                                                <div className="link-icon"><i className="icon-plus" /></div>
                                            </a>
                                        </div>
                                    </div> {/* item end */}
                                    <div className="columns portfolio-item">
                                        <div className="item-wrap">
                                            <a href="#modal-05" title>
                                                <img alt="" src="images/portfolio/volunteer.jpg" />
                                                <div className="overlay">
                                                    <div className="portfolio-item-meta">
                                                        <h5>Social Volunteering</h5>
                                                        {/* <p>Branding</p> */}
                                                    </div>
                                                </div>
                                                <div className="link-icon"><i className="icon-plus" /></div>
                                            </a>
                                        </div>
                                    </div> {/* item end */}
                                    <div className="columns portfolio-item">
                                        <div className="item-wrap">
                                            <a href="#modal-06" title>
                                                <img alt="" src="images/portfolio/poetry.jpg" />
                                                <div className="overlay">
                                                    <div className="portfolio-item-meta">
                                                        <h5>Poetry</h5>
                                                        {/* <p>Photography</p> */}
                                                    </div>
                                                </div>
                                                <div className="link-icon"><i className="icon-plus" /></div>
                                            </a>
                                        </div>
                                    </div> {/* item end */}
                                    <div className="columns portfolio-item">
                                        <div className="item-wrap">
                                            <a href="#modal-07" title>
                                                <img alt="" src="images/portfolio/art.jpg" />
                                                <div className="overlay">
                                                    <div className="portfolio-item-meta">
                                                        <h5>Art</h5>
                                                        {/* <p>Illustrration</p> */}
                                                    </div>
                                                </div>
                                                <div className="link-icon"><i className="icon-plus" /></div>
                                            </a>
                                        </div>
                                    </div> {/* item end */}
                                    <div className="columns portfolio-item">
                                        <div className="item-wrap">
                                            <a href="#modal-08" title>
                                                <img alt="" src="images/portfolio/decor.jpg" />
                                                <div className="overlay">
                                                    <div className="portfolio-item-meta">
                                                        <h5>Decor</h5>
                                                        {/* <p>Web Development</p> */}
                                                    </div>
                                                </div>
                                                <div className="link-icon"><i className="icon-plus" /></div>
                                            </a>
                                        </div>
                                    </div>  {/* item end */}
                                </div> {/* portfolio-wrapper end */}
                            </div> {/* twelve columns end */}
                            {/* Modal Popup
	      --------------------------------------------------------------- */}
                            <div id="modal-01" className="popup-modal mfp-hide">
                                <img className="scale-with-grid" src="images/portfolio/modals/m-travel.jpg" alt="" />
                                <div className="description-box">
                                    <h4>Travel</h4>
                                    <p>To be updated</p>
                                    <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
                                </div>
                                <div className="link-box">
                                    {/* <a href="http://www.behance.net">Details</a> */}
                                    <a className="popup-modal-dismiss">Close</a>
                                </div>
                            </div>{/* modal-01 End */}
                            <div id="modal-02" className="popup-modal mfp-hide">
                                <img className="scale-with-grid" src="images/portfolio/modals/m-hooping.jpg" alt="" />
                                <div className="description-box">
                                    <h4>Hula Hooping</h4>
                                    <p>To be updated</p>
                                    <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
                                </div>
                                <div className="link-box">
                                    <a href="http://www.behance.net">Details</a>
                                    <a className="popup-modal-dismiss">Close</a>
                                </div>
                            </div>{/* modal-02 End */}
                            <div id="modal-03" className="popup-modal mfp-hide">
                                <img className="scale-with-grid" src="images/portfolio/modals/m-psychology.jpg" alt="" />
                                <div className="description-box">
                                    <h4>Psychology</h4>
                                    <p>To be updated</p>
                                    <span className="categories"><i className="fa fa-tag" />Branding</span>
                                </div>
                                <div className="link-box">
                                    <a href="http://www.behance.net">Details</a>
                                    <a className="popup-modal-dismiss">Close</a>
                                </div>
                            </div>{/* modal-03 End */}
                            <div id="modal-04" className="popup-modal mfp-hide">
                                <img className="scale-with-grid" src="images/portfolio/modals/m-baking.jpg" alt="" />
                                <div className="description-box">
                                    <h4>Baking</h4>
                                    <p>To be updated</p>
                                    <span className="categories"><i className="fa fa-tag" />Photography</span>
                                </div>
                                <div className="link-box">
                                    <a href="http://www.behance.net">Details</a>
                                    <a className="popup-modal-dismiss">Close</a>
                                </div>
                            </div>{/* modal-04 End */}
                            <div id="modal-05" className="popup-modal mfp-hide">
                                <img className="scale-with-grid" src="images/portfolio/modals/m-volunteer.jpg" alt="" />
                                <div className="description-box">
                                    <h4>Social Volunteering</h4>
                                    <p>To be updated</p>
                                </div>
                                <div className="link-box">
                                    <a href="http://www.behance.net">Details</a>
                                    <a className="popup-modal-dismiss">Close</a>
                                </div>
                            </div>{/* modal-05 End */}
                            <div id="modal-06" className="popup-modal mfp-hide">
                                <img className="scale-with-grid" src="images/portfolio/modals/m-poetry.jpg" alt="" />
                                <div className="description-box">
                                    <h4>Poetry</h4>
                                    <p>To be updated</p>
                                    <span className="categories"><i className="fa fa-tag" />Photography</span>
                                </div>
                                <div className="link-box">
                                    <a href="http://www.behance.net">Details</a>
                                    <a className="popup-modal-dismiss">Close</a>
                                </div>
                            </div>{/* modal-06 End */}
                            <div id="modal-07" className="popup-modal mfp-hide">
                                <img className="scale-with-grid" src="images/portfolio/modals/m-art.jpg" alt="" />
                                <div className="description-box">
                                    <h4>Art</h4>
                                    <p>To be updated</p>
                                    <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
                                </div>
                                <div className="link-box">
                                    <a href="http://www.behance.net">Details</a>
                                    <a className="popup-modal-dismiss">Close</a>
                                </div>
                            </div>{/* modal-07 End */}
                            <div id="modal-08" className="popup-modal mfp-hide">
                                <img className="scale-with-grid" src="images/portfolio/modals/m-decor.jpg" alt="" />
                                <div className="description-box">
                                    <h4>Decor</h4>
                                    <p>To be updated</p>
                                    <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
                                </div>
                                <div className="link-box">
                                    <a href="http://www.behance.net">Details</a>
                                    <a className="popup-modal-dismiss">Close</a>
                                </div>
                            </div>{/* modal-01 End */}
                        </div> {/* row End */}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}