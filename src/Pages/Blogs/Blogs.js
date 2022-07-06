import React from 'react';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faDatabase, faCloudArrowDown, faCloudArrowUp, faLink, faLaptopCode } from '@fortawesome/free-solid-svg-icons'


const Blogs = () => {
    return (
        <div className='container mt-4'>
            <div className='my-5 pb-3'>
                <h2> <span className='text-warning'>QUESTION:</span>  Difference between authentication and authorization?</h2>
                <h4 className='text-info'>Authentication vs. Authorization</h4>

                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Authentication</th>
                            <th>Authorization</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Authentication is the process of identifying someone's identity by assuring that the person is the same as what he is claiming for.</td>
                            <td>Authorization is the process of granting someone to do something. It means it a way to check if the user has permission to use a resource or not.</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>It is the process of validating user credentials to gain user access.</td>
                            <td>It is the process of verifying whether access is allowed or not.</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Authentication is the first step of a good identity and access management process.</td>
                            <td>Authorization always takes place after authentication.</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>It is visible to user.</td>
                            <td>It isn't visible to user.</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Data/Information moves through ID tokens.</td>
                            <td>Data/Information moves through access tokens.</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <div className='my-5 py-5'>
                <h2> <span className='text-warning'>QUESTION:</span> Why are you using firebase? What other options do you have to implement authentication?</h2>
                <h4 className='text-info mt-4 mb-3'>Benefit of Firebase</h4>
                <ListGroup>
                    <ListGroup.Item variant="primary" className='d-flex'>
                        <div className='me-3' style={{ fontSize: '2rem' }}>
                            <FontAwesomeIcon icon={faDatabase} />
                        </div>
                        <div>
                            <p>Firebase Authentication gives back-end development services, simple-to-use SDKs, and instant UI libraries to confirm clients over application. Firebase takes care of the secure logins. It keeps a track and identifies the user who logged in and who logged out from the app/web. Without Firebase, it would have been difficult to implement the process securely and seamlessly.</p>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item variant="secondary" className='d-flex'>
                        <div className='me-3' style={{ fontSize: '2rem' }}>
                            <FontAwesomeIcon icon={faCloudArrowDown} />
                        </div>
                        <div>
                            <p> A real-time Database is a cloud-hosted database. Firebase Realtime database allows applications to approach cross-platform data within realtime after joining NoSQL cloud-storage. Firebase was originally developed to be a realtime database, and today that is still one of its key features.</p>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success" className='d-flex'>
                        <div className='me-3' style={{ fontSize: '2rem' }}>
                            <FontAwesomeIcon icon={faCloudArrowUp} />
                        </div>
                        <div>
                            <p>Clouds storage is built for application developers who need to store and serve user-generated content, for example, photos or videos. This cloud database is also known for its Realtime updates, flexible data models, offline support, and quick data inquiries.</p>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item variant="danger" className='d-flex'>
                        <div className='me-3' style={{ fontSize: '2rem' }}>
                            <FontAwesomeIcon icon={faLink} />
                        </div>
                        <div>
                            <p>Firebase Dynamic Links are smart URLs that enable marketers to promote the app across various external channels. This feature launches a dynamic link of your app for customized user experience.</p>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item variant="warning" className='d-flex'>
                        <div className='me-3' style={{ fontSize: '2rem' }}>
                            <FontAwesomeIcon icon={faLaptopCode} />
                        </div>
                        <div>
                            <p>Provides A Free Start to Newbies a newbie programmer and willing to know the core advantage of Firebase, then you consider its 'free start' feature.</p>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </div>

            <div className='my-5 pt-5'>
                <h2> <span className='text-warning'>QUESTION:</span> What other services does firebase provide other than authentication?</h2>
            </div>
        </div>
    );
};

export default Blogs;