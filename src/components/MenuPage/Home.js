import React from "react";


function Homepage() {
    return (
        <>
            <div className="container p-4 p-md-5 mb-4 rounded text-body-emphasis ">
                <div className="row">
                    <div className="col-lg-4">
                        <img src="https://images.pexels.com/photos/8633662/pexels-photo-8633662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="bd-placeholder-img rounded-circle" width="260" height="260" alt="Placeholder" style={{ marginBottom: '30px' }} />
                        <h2 className="fw-normal">BREAD</h2>
                        <p><a className="btn btn-danger" href="/Breads">View Products &raquo;</a></p>
                    </div>
                    <div className="col-lg-4">
                        <img src="https://images.pexels.com/photos/1395323/pexels-photo-1395323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="bd-placeholder-img rounded-circle" width="260" height="260" alt="Placeholder" style={{ marginBottom: '30px' }} />
                        <h2 className="fw-normal">DOUGHNUTS</h2>
                        <p><a className="btn btn-danger" href="#">View details &raquo;</a></p>
                    </div>
                    <div className="col-lg-4">
                        <img src="https://images.pexels.com/photos/17661103/pexels-photo-17661103/free-photo-of-chocolate-cake-with-orange-slices.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="bd-placeholder-img rounded-circle" width="260" height="260" alt="Placeholder" style={{ marginBottom: '30px' }} />
                        <h2 className="fw-normal">CAKES</h2>
                        <p><a className="btn btn-danger" href="#">View details &raquo;</a></p>
                    </div>
                    <div class="d-grid gap-2 col-3 mx-auto" style={{ marginTop: 35 }}>
                        <a href="./menu" class="btn btn-danger btn-lg" type="button"> View Menu &raquo;</a>
                    </div>
                </div>

                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-thumbnail" alt="..."></img>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">About Breadwinner Bakery</h1>
                            <p className="lead">Breadwinner Bakery began its journey in 2023, right here in the heart of Emalahleni, Mpumalanga. We weren't just born out of a love for baking, but a passion for creating breads, waffles, cakes, and more that fuel our community and win over taste buds.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <p className="lead mb-0"><a href="/aboutus" class="text-body-emphasis fw-bold">Continue reading...</a></p>
                            </div>
                        </div>
                    </div>
                </div>




            </div >
        </>
    )
}

export default Homepage;