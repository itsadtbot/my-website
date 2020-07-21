import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase, faHandsHelping, faBook, faMedal } from '@fortawesome/free-solid-svg-icons'
import Pdf from '../../projects/IEEEWIECONPaperID154.pdf'
import Courses from '../../projects/Courses.pdf'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
class Resume extends Component {
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
                            <p className="info-1">Minor Specialization in Business Management</p>

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
                            date="2012 - 2013"
                            iconStyle={{ background: '#2B2B2B', color: '#ffffff' }}
                            icon={<FontAwesomeIcon icon={faGraduationCap} size="lg" pull="left" />}
                        >

                            <h3 className="vertical-timeline-element-title">Bethany High School</h3>
                            <p className="info">X ICSE<span>•</span>92.17%</p>
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
                            <img src="images/resume/hpe.png" alt="Aditi Bhat HPE logo"></img>
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
                            
                            <img src="images/resume/hpe.png" alt="Aditi Bhat HPE Logo"></img>
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
                            
                            <img src="images/resume/toshiba.jpg" alt="Aditi Bhat Toshiba Logo"></img>
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
                            
                            <img src="images/resume/tessolve.jpg" alt="Aditi Bhat Tessolve Logo"></img>
                            <h3 className="vertical-timeline-element-title">Tessolve Semiconductors India Pvt. Ltd.</h3>
                            <p className="info">Technical Intern </p>
                            <p className="info-1">Optimization of Technology Migration Scripts written in Perl and Python.</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(FF, FF, FF)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #F06000' }}
                            date="Aug 2016-2018"
                            iconStyle={{ background: '#11ABB0', color: '#ffffff' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} size="lg" pull="left" />}
                        >
                            <img src="images/portfolio/psychology.png" alt="Aditi Bhat The Psych Club Manipal Logo"></img>
                            <h3 className="vertical-timeline-element-title">The Psych Club Manipal</h3>
                            <p className="info">President</p>
                            
                            <p className="info-1">• Started an event known as "Blindfolded Conversations", which aims to enable people to interact without the fear of judgment based on physical attributes.</p>
                            <p className="info-1">• Conducted Mental Health Awareness workshops along with clinical psychologists.</p>
                            <p className="info-1">• Led workshops on Emotional Intelligence, Body Language, The Psychology of Music, The Psychology of Colour, etc.</p>
                        </VerticalTimelineElement>
                        
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(FF, FF, FF)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #F06000' }}
                            date="Aug 2016-2018"
                            iconStyle={{ background: '#11ABB0', color: '#ffffff' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} size="lg" pull="left" />}
                        >
                            <img src="images/resume/iecse.jpg"></img>
                            <h3 className="vertical-timeline-element-title" alt="Aditi Bhat IECSE Manipal Logo">IECSE Manipal</h3>
                            <p className="info">Executive Board Member</p>
                            
                            <p className="info-1">• Editor in Chief of Hashtag- IECSE's Technical Blog</p>
                            <p className="info-1">• IECSE is the Official Computer Science Club of Manipal whose vision is to uplift the CS Culture in Manipal through workshops, events and competitions</p>
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
                            <img src="images/resume/GiftAMem.jpg" alt="Aditi Bhat U&I Image"></img>
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
                            <img src="images/resume/HPE_SI.jpg" alt="Aditi Bhat HPE Social Impact Image"></img>
                            <h3 className="vertical-timeline-element-title">HPE Social Impact Volunteer</h3>
                            {/* <p className="info">HPE Social Impact Volunteer</p> */}
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
                            <img src="images/resume/Samarthanam.jpg" alt="Aditi Bhat Samarthanam Image"></img>
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
                            <img src="images/resume/YDP.jpg" alt="Aditi Bhat Youth Development Program Image"></img>
                            <h3 className="vertical-timeline-element-title">Youth Development Program, Bangalore</h3>
                            <p className="info-1">Engaged with Young students in Government schools and Orphanages, to help them develop their skills. I also conducted two Hula Hoop Workshops whose proceeds went to schools and orphanages.</p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                    <div>
                        <h1><span>Research</span></h1>
                    </div>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(FF, FF, FF)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #F06000' }}
                            date="Nov 2019"
                            iconStyle={{ background: '#000000', color: '#ffffff' }}
                            icon={<FontAwesomeIcon icon={faBook} size="lg" pull="left" />}
                        >
                            <h3 className="vertical-timeline-element-title">Mobile Phone Usability and its Influence on Brand Loyalty and Re-Purchase Intention: An Empirical Study</h3>
                            <a href={Pdf} target="_blank">View Camera Ready Submission</a>
                            <p className="info">2019 5th IEEE International WIE Conference on Electrical and Computer Engineering (WIECON-ECE)</p>
                            <p className="info-1">The paper is currently undergoing the process of publication, it will be up on IEEE Xplore soon. Please view the Camera Ready Submission in the meantime.</p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                    <div>
                        <h1><span>Courses</span></h1>
                    </div>

                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(FF, FF, FF)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #F06000' }}
                            date=""
                            iconStyle={{ background: '#11ABB0', color: '#ffffff' }}
                            icon={<FontAwesomeIcon icon={faMedal} size="lg" pull="left" />}
                        >
                            <h3 className="vertical-timeline-element-title">I have completed a total of</h3>
                            <h1 className="vertical-timeline-element-title">
                                <CountUp end={88} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </h1>
                            <br />
                            <h3> courses</h3>
                            <p className="info-1">I have completed 88 courses on Coursera in the fields of User Experience Research and Design, Deep Learning, Web Design and Development, Python Programming, Blockchain, Psychology, Business Analysis, Data Science, Search Engine Optimisation and Business Management.</p>
                            <a href={Courses} target="_blank">View a list of all courses here</a>
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
                    {/* <div>
                        <h3>Download my resume here</h3>
                    </div> */}
                    <hr />
                </section>
            </React.Fragment>
        );
    }
}
export default Resume;