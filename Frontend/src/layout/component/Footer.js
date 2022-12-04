/* eslint-disable jsx-a11y/alt-text */
function Footer(){
    const footerStyle1 = { 
        position: 'sticky',
        background: "linear-gradient(to bottom left, rgba(240,248,255,1) 10%, rgba(180,200,255,1) 100%)"
    }
    const iconStyle1 = {
        fontSize: "26px"
    }
    const iconStyle ={
        color: 'black'
    };
    const footStyle = {
        fontFamily: 'Didot, serif',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
    const footerStyle = {
        fontFamily: 'Didot, serif',
        background: "linear-gradient(15deg, rgba(240,248,255,1) 10%, #9999ee 100%)",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
    return(
        <div>
            <div>
                <footer className="page-footer font-small unique-color-dark mt-0 pt-0">
                    <div style={footStyle} className='bg-dark'>
                        <div className="card-deck py-4 mx-4 px-2 ">
                            <div className="card">
                                <img className="card-img"
                                src='https://r3w5i9w3.rocketcdn.me/wp-content/uploads/2021/02/goa-1024x683.jpg' height='150px'
                                />
                                <div className="card-body">
                                    <div className="card-text">Combat the monotony of life at the beautiful beaches of Goa.</div>
                                </div>
                            </div>

                            <div className="card">
                                <img className="card-img"
                                src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/SnowfallManali0310.jpg" height='150px'
                                />
                                <div className="card-body">
                                    <div className="card-text">Stay in an igloo and enjoy the breathtaking views of Manali.</div>
                                </div>
                            </div>

                            <div className="card">
                                <img className="card-img"
                                src="https://img.traveltriangle.com/blog/wp-content/uploads/2017/06/Cover9.jpg" height='150px'
                                />
                                <div className="card-body">
                                    <div className="card-text">Feel the call of mountains in the valleys of North-East.</div>
                                </div>
                            </div>

                            <div className="card">
                                <img className="card-img"
                                src="https://www.tajhotels.com/content/dam/luxury/rambagh-palace/3x2/67917782-H1-TRPJ_Suvarna_Mahal_Indian_Fine_Dining_5539-3x2.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" height='150px'
                                />
                                <div className="card-body">
                                    <div className="card-text">Enjoy a luxurious stay in the opulent royal palaces of Rajasthan.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={footerStyle}>        

                        <div className="row py-3 d-flex align-items-center">
                            <h5  className="col-lg-11 ml-0 mx-5 text-7x text-dark text-md-center">Payment &amp; Security</h5>
                        </div>

                        <div className="col-12 align-items-center text-md-center ">
                            <ul>
                                <li style={iconStyle} className="list-inline-item">
                                    <i className="fab fa-cc-discover mx-1 fa-2x"></i>
                                    <i className="fab fa-cc-paypal mx-1 fa-2x"></i>
                                    <i className="fab fa-cc-visa mx-1 fa-2x"></i>
                                    <i className="fa fa-credit-card mx-1 fa-2x"></i>
                                    <i className="fab fa-cc-mastercard mx-1 fa-2x"></i>
                                </li>
                            </ul>
                        </div>

                        <div className="form-inline footer-copyright" style={footerStyle1}>
                            <h6 className="mx-4 my-0 pt-2 pb-0 px-3">© Copyright 2022 <i class="fas fa-paper-plane mr-1"></i>BookMyTrip</h6>
                            <ul className="my-0 mx-4 pt-2 pb-0 col-md-6 col-lg-7 list-unstyled list-inline text-center text-md-right" style={iconStyle1}>
                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>

                </footer>
             </div>   
        </div>
    );
}

export default Footer;