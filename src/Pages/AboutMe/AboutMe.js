import React from 'react';
import me from '../../images/khaled.png'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className="container pt-4">
            <div className="row">
                <div className="col-sm-12">
                    <div className="box-shadow-full">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-sm-6 col-md-5">
                                        <div>
                                            <img className='img-fluid rounded' src={me} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-7">
                                        <div>
                                            <p><span className="about-info">Name: </span> <span>Khaled Bin Setab</span></p>
                                            <p><span className="about-info">Profile: </span> <span>Junior! Web Developer</span></p>
                                            <p><span className="about-info">Email: </span> <span>khaled39ab@gmail.com</span></p>
                                            <p><span className="about-info">Phone: </span> <span>(+88) 01758 033448</span></p>
                                            <p><span className="about-info">Github: </span> <span>github.com/khaled39ab</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="skill">
                                    <p class="skill-info">Skill</p>
                                    <span>HTML</span> <span class="pull-right">95%</span>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <span>CSS3</span> <span class="pull-right">75%</span>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <span>JAVASCRIPT</span> <span class="pull-right">90%</span>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-me-sec pt-4 pt-md-0">
                                    <div className="about-me">
                                        <h5 className="title-about-me">
                                            About me
                                        </h5>
                                    </div>
                                    <p className="lead">
                                        Hi, <br />
                                        I'm Khaled Bin Setab. I lives in Chapai Nawabgonj district of Bangladesh. I'm on going graduate on CIS subject from Daffodil International University. I've completed! Web development course with Jhankar Mahmub in https://www.programming-hero.com/.
                                    </p>
                                    <h5 className="title-about-me">
                                        Goals
                                    </h5>
                                    <p className="lead">
                                        A major motivation for a web developer is self-expression in being able to design and develop a website and make sure users of the website have a good experience. Finally, a web designer hopes for career rewards, such as good pay and advancement. So as a developer I'll also responsible for different aspects of a site's creation.
                                    </p>
                                    <p className="lead">
                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className='text-success'>Achieve goals:</span> Failure and doubt are abandoned. I'm determined, motivated and driven to really be successful at web development. <br />
                                        First learn how to code, debug, and optimize. Then want skilled myself. Practice is the best friend of skill. There are no alternative of practice. So let's practice practice and practice...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;