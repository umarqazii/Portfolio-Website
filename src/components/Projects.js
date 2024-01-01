import React from "react";
import Navbar from "./Navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cardimg from '../Transport.png';
import lincenseimg from '../License.png';
import portfolioimg from '../Portfolio.png';
import cryptoimg from '../crypto.png';
import '../App.css';

function Projects() {
    return (
        <div className="App" >
            <Navbar />
            <h1 style={{ fontFamily: 'Audiowide, sans-serif', color: 'white', marginTop: '50px' }}>Projects</h1>

            <div className="CardsContainer">

                <Card className="Card" style={{ width: '18rem', background: 'grey', padding: '8px' }}>
                    <Card.Img variant="top" src={cardimg} style={{ borderRadius: '5px' }} />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                        <Card.Title>Transport Booking App</Card.Title>
                        <Card.Text style={{ fontSize: '13px', flex: '1 0 auto' }}>
                            A dynamic MERN (MongoDB, Express.js, React, Node.js) application, streamlining the
                            online booking process for customers.
                        </Card.Text>
                        <div style={{ marginTop: 'auto', marginBottom: '5px' }}>
                            <Button variant="primary" href="https://github.com/umarqazii/Transport-Booking-App">Check it Out</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="Card" style={{ width: '18rem', background: 'grey', padding: '8px' }}>
                    <Card.Img variant="top" src={lincenseimg} style={{ borderRadius: '5px' }} />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                        <Card.Title>License Registration App</Card.Title>
                        <Card.Text style={{ fontSize: '13px', flex: '1 0 auto' }}>
                            A comprehensive MERN (MongoDB, Express.js, React, Node.js) application featuring. distinct dashboards for regular users and an admin,
                            who can manage product registrations, generate license keys, and oversee all user requests and
                            registered products.
                        </Card.Text>
                        <div style={{ marginTop: 'auto', marginBottom: '5px' }}>
                        <Button variant="primary" href="https://github.com/umarqazii/MERN-Product-Registration-App">Check it Out</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="Card" style={{ width: '18rem', background: 'grey', padding: '8px' }}>
                    <Card.Img variant="top" src={portfolioimg} style={{ borderRadius: '5px' }} />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                        <Card.Title>Portfolio Website</Card.Title>
                        <Card.Text style={{ fontSize: '13px', flex: '1 0 auto'  }}>
                            A portfolio website using simple HTML, CSS, and JavaScript. Contains a single page with navigation through
                            scrolling.
                        </Card.Text>
                        <div style={{ marginTop: 'auto', marginBottom: '5px' }}>
                        <Button variant="primary" href="https://www.umarqazi.me">Check it Out</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="Card" style={{ width: '18rem', background: 'grey', padding: '8px' }}>
                    <Card.Img variant="top" src={cryptoimg} style={{ borderRadius: '5px' }} />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                        <Card.Title>Crypto Portfolio Tracking App</Card.Title>
                        <Card.Text style={{ fontSize: '13px', flex: '1 0 auto'  }}>
                            App designed made using Java/JavaFX to learn about cryptocurrencies and providing the necessary tools
                            to help you in your trading journey
                        </Card.Text>
                        <div style={{ marginTop: 'auto', marginBottom: '5px' }}>
                        <Button variant="primary" href="https://github.com/umarqazii/CryptoApp">Check it Out</Button>
                        </div>
                    </Card.Body>
                </Card>

            </div>
        </div>
    );
}

export default Projects;