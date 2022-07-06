import React from 'react';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCloudArrowDown, faCloudArrowUp, faLink, faLaptopCode, faCircleCheck } from '@fortawesome/free-solid-svg-icons'


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
                <h3 className='text-info mt-5 mb-3'>Other options to implement authentication</h3>
                <ul style={{ listStyleType: 'square' }}>
                    <li className='bg-success p-1'>
                        <p className='text-white'><span className='fs-5 text-decoration-underline'>Back4App:-</span> Back4app is an open-source, relational, low-code backend platform.</p>
                    </li>
                    <li className='bg-warning p-1'>
                        <p><span className='fs-5 text-decoration-underline'>Backendless:-</span> Backendless is highly scalable mobile backend-as-a-service platform.</p>
                    </li>
                    <li className='bg-primary p-1'>
                        <p className='text-white'><span className='fs-5 text-decoration-underline'>Kuzzle:-</span> Kuzzle is a ready-to-use, on-premises backend platform.</p>
                    </li>
                    <li className='bg-secondary p-1'>
                        <p className='text-white'><span className='fs-5 text-decoration-underline'>PubNub:-</span> PubNub is a realtime communication platform.</p>
                    </li>
                    <li className='bg-dark p-1'>
                        <p className='text-white'><span className='fs-5 text-decoration-underline'>Kumulos:-</span> Kumulos is a secure, easy-to-use, robust platform.</p>
                    </li>
                </ul>
            </div>

            <div className='my-5 pt-5'>
                <h2> <span className='text-warning'>QUESTION:</span> What other services does firebase provide other than authentication?</h2>

                <h4 className='text-info mt-5 mb-3'>There are many services which Firebase provides, Most useful of them are:</h4>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Cloud Firestore.</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Cloud Functions.</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Authentication.</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Hosting.</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Cloud Storage.</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Google Analytics.</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Predictions.</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Cloud Messaging.</p>
            </div>
        </div>
    );
};

export default Blogs;