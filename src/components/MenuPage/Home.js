import React from "react";


function Homepage() {
    return (
        <>
            <div class="container text-center">
                <div class="row" style={{ marginTop: '25px' }}>
                    <div class="col" style={{ textAlign: 'right', marginRight: '35px' }}>
                        <h1 style={{ color: '#c79f70' }}>Breadwinner Bakery</h1>
                        WHOLESALE BAKERY IN EMALAHLENI, MP
                    </div>
                    <div class="col" style={{ textAlign: 'left' }}>
                        <h6>BREAD / CAKE SHOP IN EMALAHLENI, MP</h6>
                        Bread, Cakes, Pizza, Specialty Cakes, & more!
                        We have customers visiting our Bakery from across Edmonton, Sherwood Park, St. Albert, Leduc, Spruce Grove, and the surrounding areas.
                        <br />
                        <b style={{ color: '#c79f70' }}> VISIT BREADWINNER BAKERY </b>in Emalahleni, AB
                    </div>
                </div>
            </div>
            <div className="container p-4 p-md-5 mb-4 rounded text-body-emphasis " >
                <h1 style={{ textAlign: 'center', color: '#c79f70', marginBottom: '30px' }} ><em>Our Products</em></h1>
                <div className="row" style={{ textAlign: 'center' }}>
                    <div className="col-lg-4">
                        <img src="https://images.pexels.com/photos/8633662/pexels-photo-8633662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="bd-placeholder-img rounded-circle" width="260" height="260" alt="Placeholder" style={{ marginBottom: '30px' }} />
                        <h2 className="fw-normal">BREAD</h2>
                        <p><a className="btn btn-danger" href="/Breads">View Products &raquo;</a></p>
                    </div>
                    <div className="col-lg-4">
                        <img src="https://as1.ftcdn.net/v2/jpg/04/51/00/44/1000_F_451004451_o5HogNoJ6SjzOOHFncJRXFrwJDhu7DBd.jpg" class="bd-placeholder-img rounded-circle" width="260" height="260" alt="Placeholder" style={{ marginBottom: '30px' }} />
                        <h2 className="fw-normal">DOUGHNUTS</h2>
                        <p><a className="btn btn-danger" href="/doughnuts">View Products &raquo;</a></p>
                    </div>
                    <div className="col-lg-4">
                        <img src="https://as2.ftcdn.net/v2/jpg/02/96/61/69/1000_F_296616948_gOYXArMURaELOQu1KHDeiagq5Oq4LNRr.jpg" class="bd-placeholder-img rounded-circle" width="260" height="260" alt="Placeholder" style={{ marginBottom: '30px' }} />
                        <h2 className="fw-normal">CAKES</h2>
                        <p><a className="btn btn-danger" href="/cake">View Products &raquo;</a></p>
                    </div>
                    <div class="d-grid gap-2 col-3 mx-auto" style={{ marginTop: 35 }}>
                        <a href="./menu" class="btn btn-danger btn-lg" type="button"> View More &raquo;</a>
                    </div>
                </div>

                <div class="container my-5">

                    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">

                        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 class="display-4 fw-bold lh-1 text-body-emphasis">Love it your way? Customize your order!</h1>
                            <p class="lead">Here's how to customize your order:
                                <ol>
                                    <li>Browse our menu</li>
                                    <li>Get creative</li>
                                    <li>Let us know</li>
                                </ol>
                            </p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                <a className="btn btn-danger btn-lg px-4" href="/menu">Menu</a>
                                <a className="btn btn-outline-secondary btn-lg px-4" href="/contactus">Contact Us</a>
                            </div>
                        </div>
                        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                            <img class="rounded-lg-3" src="https://as1.ftcdn.net/v2/jpg/04/45/81/70/1000_F_445817089_rtbSaMTaH9BbKu3rRyDZMfYulMFmeUAb.jpg" alt="" width="550" height={500} />
                        </div>

                    </div>
                </div>

                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-thumbnail" alt="..."></img>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold  lh-1 mb-3" style={{ color: '#c79f70' }}>About Breadwinner Bakery</h1>
                            <p className="lead">Breadwinner Bakery began its journey in 2023, right here in the heart of Emalahleni, Mpumalanga. We weren't just born out of a love for baking, but a passion for creating breads, waffles, cakes, and more that fuel our community and win over taste buds.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <p className="lead mb-0" style={{ marginBottom: '30px' }}><a href="/aboutus" class="text-body-emphasis fw-bold" >Continue reading...</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
            <div
                style={{
                    backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/08/45/26/10/1000_F_845261096_ufz8qk7LwMjvgot3nSKd795xaiYVLSQD.jpg)`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: '4rem 5rem',
                    margin: '5rem 0',
                    textAlign: 'center',
                    color: 'black'
                }}
            >
                <h1 class="display-5 fw-bold body-emphasis">Contact Breadwinner Bakery</h1>
                <h6><b>Your Bread and Cake in Emalahleni, MP</b></h6>
                <a href="/contactus" class="btn btn-danger btn-lg px-4 gap-3">WHOLESALE PRICING AVAILABLE</a>
                <h3 class=" fw-bold body-emphasis">Business Hours:</h3>
                <h6 ><b>Mon To Fri: 7 AM to 5 PM | Sat &
                    Sun 7 AM to 4 PM|<br /> Holidays :  8 AM to 2 PM</b></h6>
                <a href="/contactus" class="btn btn-danger btn-lg px-4 gap-3">Get In Touch</a>
            </div>
        </>
    )
}

export default Homepage;