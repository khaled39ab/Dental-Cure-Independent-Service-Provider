import React from 'react';
import Table from 'react-bootstrap/Table';

const Blogs = () => {
    return (
        <div className='container mt-4'>
            <div className='my-5'>
                <h2> <span className='text-warning'>QUESTION:</span>  Difference between authorization and authentication?</h2>
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

            <div className='my-5 pt-5'>
                <h2> <span className='text-warning'>QUESTION:</span> Why are you using firebase? What other options do you have to implement authentication?</h2>
            </div>

            <div className='my-5 pt-5'>
                <h2> <span className='text-warning'>QUESTION:</span> What other services does firebase provide other than authentication</h2>
            </div>
        </div>
    );
};

export default Blogs;