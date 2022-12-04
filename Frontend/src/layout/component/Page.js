import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Page() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block" src="https://media.cntraveler.com/photos/581250f2997d59497dccf8bc/16:9/w_2560%2Cc_limit/GettyImages-185298837.jpg" width="1300" height="650" alt="First slide" />
                                    <Link to={{ pathname: "/scheduleFlight/search" }}>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h3>Search and book best flights here</h3>
                                            <p>At BookMyTrip, we offer you the best tickets to not only fly on-time but to also enjoy hassle-free and courteous service on board and beyond.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block" src="https://www.aviationtoday.com/wp-content/uploads/2020/02/vistara.jpg" width="1140" height="650" alt="Second slide" />
                                    <Link to={{ pathname: "/login" }}>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h3>Avail premium services on domestic flights</h3>
                                            <p>Upgrade your flying experience with a host of convenient services and priority privileges.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block" src="https://media.wired.co.uk/photos/606d9daffd9831b13e4470a2/master/w_1600%2Cc_limit/gettyimages-1179701828.jpg" width="1140" height="650" alt="Third slide" />
                                    <div className="carousel-caption d-none d-md-block text-dark">
                                        <h3>Cheapest domestic and international tickets</h3>
                                        <p>BookMyTrip provides great offers, competitive airfares, and a seamless online booking experience to many of its customers.</p>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Page;