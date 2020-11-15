import React from 'react';
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <section>
                <div className="Container NM">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <span className="rt">POULAR CATOGRIES </span>
                            <br />
                            <br />
                            <a href="#" className="ng">Cars</a>
                            <br />

                            <a href="#" className="ng">Flats for rent</a>
                            <br />
                            <a href="#" className="ng"> Jobs</a>
                            <br />
                            <a href="#" className="ng">Mobile phones</a>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <span className="rt">TRENDING SEARCHES </span>
                            <br />
                            <br />
                            < a href="#" className="ng">Bikes</a>
                            <br />

                            < a href="#" className="ng"> Watches</a>
                            <br />
                            < a href="#" className="ng"> Books</a>
                            <br />
                            < a href="#" className="ng">Dogs</a>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <span className="rt">ABOUT US</span>
                            <br />
                            <br />
                            <a href="#" className="ng">About Olx Group</a>
                            <br />
                            <a href="#" className="ng">Olx Bolgs</a>
                            <br />
                            <a href="#" className="ng">Contact Us</a>
                            <br />
                            <a href="#" className="ng"> Olx for Business</a>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <span className="rt">OLX </span>
                            <br />
                            <br />
                            <Link to="/help" className="ng">Help</Link>
                            <br />
                            <Link to="/sitemap" className="ng">Site Map</Link>
                            <br />
                            <a href="#" className="ng  fas   fa ueser  "> Legal & Privacuy information</a>
                        </div>
                    </div>
                </div>
                </section>
                <section className="lastfo">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <b>Other countries</b>
                                <Link to="#" className="fo">india</Link>
                                <a href="#" className="fo">-South Afric</a>
                                <a href="#" className="fo">-Indonasia</a>
                            </div>
                            <div className="col-md-4">
                                <b>Free Classifieds in Pakistan </b> © 2006-2020 OLX
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}







export default Footer
