import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase, faHandsHelping } from '@fortawesome/free-solid-svg-icons'

export default class Resume extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="resume">
                    {/* Education
      ----------------------------------------------- */}
                    <div>
                        <h1><span>Education</span></h1>
                    </div>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(FF, FF, FF)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #F06000' }}
                            date="2015 - 2019"
                            iconStyle={{ background: '#2B2B2B', color: '#ffffff' }}
                            icon={<FontAwesomeIcon icon={faGraduationCap} size="lg" pull="left" />}
                        >

                            <h3 className="vertical-timeline-element-title">Manipal Institute of Technology</h3>
                            <p className="info">Bachelors of Technology in Computer Science Engineering<span>•</span>8.10/10</p>
                            <p className="info-1">Minor Specialization in Business Managament</p>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(FF, FF, FF)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #F06000' }}
                            date="2014 - 2015"
                            iconStyle={{ background: '#2B2B2B', color: '#ffffff' }}
                            icon={<FontAwesomeIcon icon={faGraduationCap} size="lg" pull="left" />}
                        >

                            <h3 className="vertical-timeline-element-title">Bethany Junior College</h3>
                            <p className="info">XII ISC Science<span>•</span>93.75%</p>
                            <p className="info-1">Excellent Leadership Skills Award</p>
                            <p className="info-1">President of the Bethany Student Organisation</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(FF, FF, FF)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #F06000' }}
                            date="2014 - 2015"
                            iconStyle={{ background: '#2B2B2B', color: '#ffffff' }}
                            icon={<FontAwesomeIcon icon={faGraduationCap} size="lg" pull="left" />}
                        >

                            <h3 className="vertical-timeline-element-title">Bethany High School</h3>
                            <p className="info">X ICSE<span>•</span>93.75%</p>
                            <p className="info-1">Best Outgoing Student Award</p>
                            <p className="info-1">Head Girl of the Bethany Student Organisation</p>
                        </VerticalTimelineElement>
                    </VerticalTimeline> {/* End Education */}
                    {/* Work
      ----------------------------------------------- */}
                    <div>
                        <h1><span>Work Experience</span></h1>
                    </div>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(FF, FF, FF)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #F06000' }}
                            date="2019 - Present"
                            iconStyle={{ background: '#11ABB0', color: '#ffffff' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} size="lg" pull="left" />}
                        >
                            <h3 className="vertical-timeline-element-title">Hewlett Packard Enterprise</h3>
                            <p className="info">Research and Development Engineer </p>
                            <p className="info-1">• Part of the OS Enablement Team that ensures that Linux Operating Systems are correctly functioning on HPE Superdome Flex Servers</p>
                            <p className="info-1">• Assisting UX team in researching Data Visualization Methods for HPE softwares</p>
                            <p className="info-1">• Developing Reactjs based components for Dashboards</p>
                            <p className="info-1">• Creating Marketing Content in the form of Animation videos for HPE Products</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(FF, FF, FF)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #F06000' }}
                            date="Jan - Jul 2019"
                            iconStyle={{ background: '#11ABB0', color: '#ffffff' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} size="lg" pull="left" />}
                        >
                            <h3 className="vertical-timeline-element-title">Hewlett Packard Enterprise</h3>
                            <p className="info">Research and Development Intern </p>
                            <p className="info-1">• Automation of Data Centers with Ansible, Python and Expect Programming</p>
                            <p className="info-1">• Feasibility Study of Test Framework for Superdome Flex Servers</p>
                            <p className="info-1">• Automation of Operating System Installation on SuperdomeX and Superdome Flex Servers</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(FF, FF, FF)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #F06000' }}
                            date="May - Jul 2018"
                            iconStyle={{ background: '#11ABB0', color: '#ffffff' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} size="lg" pull="left" />}
                        >
                            <h3 className="vertical-timeline-element-title">Toshiba Software India Pvt. Ltd.</h3>
                            <p className="info">Mobile Application Development Intern </p>
                            <p className="info-1">Designed and developed an Android Application that connects to the User’s electricity meters, gas meters, heaters, and other appliances, giving them details about their hourly, daily, and monthly consumption along with a monthly budget. The App can also be used to set temperatures on the User’s appliances.</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(FF, FF, FF)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #F06000' }}
                            date="Jun - Jul 2017"
                            iconStyle={{ background: '#11ABB0', color: '#ffffff' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} size="lg" pull="left" />}
                        >
                            <h3 className="vertical-timeline-element-title">Tessolve Semiconductors India Pvt. Ltd.</h3>
                            <p className="info">Technical Intern </p>
                            <p className="info-1">Optimization of Technology Migration Scripts written in Perl and Python.</p>
                        </VerticalTimelineElement>

                    </VerticalTimeline>
                    <div>
                        <h1><span>Volunteer Experience</span></h1>
                    </div>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(FF, FF, FF)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #F06000' }}
                            date="Jul 19-Present"
                            iconStyle={{ background: '#F06000', color: '#ffffff' }}
                            icon={<FontAwesomeIcon icon={faHandsHelping} size="lg" pull="left" />}
                        >
                            <img src="images/resume/GiftAMem.jpg"></img>
                            <h3 className="vertical-timeline-element-title">U&I</h3>
                            <p className="info">Child Enrichment Program Volunteer </p>
                            <p className="info-1">With the Child Enrichment Program, we concentrate on the holistic development of the children. We wish to inculcate a love for reading in the children, along with music, art, dance and life skills like public speaking, teamwork and respecting their community. Apart from these activities, my role in this program is teaching children how to hula hoop so that they can remain fit and have fun while doing it.</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(FF, FF, FF)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #F06000' }}
                            date="Jan 19-Present"
                            iconStyle={{ background: '#F06000', color: '#ffffff' }}
                            icon={<FontAwesomeIcon icon={faHandsHelping} size="lg" pull="left" />}
                        >
                            <img src="images/resume/HPE_SI.jpg"></img>
                            <h3 className="vertical-timeline-element-title">U&I</h3>
                            <p className="info">HPE Social Impact Volunteer</p>
                            <p className="info-1">Through this program, I volunteered at a Notebook Distribution Drive for 20 schools and painted school premises so that the children have a conducive learning environment and basic school supplies.</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(FF, FF, FF)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #F06000' }}
                            date="May - Jul 2016"
                            iconStyle={{ background: '#F06000', color: '#ffffff' }}
                            icon={<FontAwesomeIcon icon={faHandsHelping} size="lg" pull="left" />}
                        >
                            <img src="images/resume/Samarthanam.jpg"></img>
                            <h3 className="vertical-timeline-element-title">Samarthanam Trust for the Disabled</h3>
                            <p className="info">Teaching Volunteer</p>
                            <p className="info-1">Taught Fifth, Sixth and Seventh Standard students Mathematics and English, in Kannada. In the above picture, my students wanted me to be in the frame as well, so they came up with this creative solution!</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(FF, FF, FF)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #F06000' }}
                            date="May 2016 - Present"
                            iconStyle={{ background: '#F06000', color: '#ffffff' }}
                            icon={<FontAwesomeIcon icon={faHandsHelping} size="lg" pull="left" />}
                        >
                            <img src="images/resume/YDP.jpg"></img>
                            <h3 className="vertical-timeline-element-title">Youth Development Program, Bangalore</h3>
                            <p className="info-1">Engaged with Young students in Government schools and Orphanages, to help them develop their skills. I also conducted two Hula Hoop Workshops whose proceeds went to schools and orphanages.</p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>

                    {/* End Work */}
                    {/* Skills
      ----------------------------------------------- */}

                    {/* <div className="row skill">
                        <div className="three columns header-col">
                            <h1><span>Skills</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                              voluptatem sequi nesciunt.
            </p>
                            <div className="bars">
                                <ul className="skills">
                                    <li><span className="bar-expand html5" /><em>Python</em></li>
                                    <li><span className="bar-expand css" /><em>Java</em></li>
                                    <li><span className="bar-expand photoshop" /><em>Adobe XD</em></li>
                                    <li><span className="bar-expand wordpress" /><em>TensorFlow</em></li>
                                    <li><span className="bar-expand illustrator" /><em>Reactjs</em></li>
                                    <li><span className="bar-expand jquery" /><em>CSS</em></li>
                                </ul>
                            </div>{/* end skill-bars */}
                    {/* </div> {/* main-col end */}
                    {/* </div> End skills */}
                </section>
            </React.Fragment>
        );
    }
}