import React from "react";
// import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div class="container">
            <h1 style={{ color: '#c79f70', textAlign: 'center', fontSize: '3.5rem', marginBottom: '20px' }}>
                Our Delicious Bakery Menu
            </h1>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col">
                    <div class="card shadow-sm">
                        <img alt="" src="https://images.pexels.com/photos/10202985/pexels-photo-10202985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="bd-placeholder-img card-img-top" width="100%" height="239.81" />
                        <div class="card-body">
                            <h3 class="card-text">BREAD</h3>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="/breads" class="btn btn-secondary " role="button" >View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                        <img alt="" src="https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="bd-placeholder-img card-img-top" width="100%" height="239.81" />
                        <div class="card-body">
                            <h3 class="card-text">PIZZA</h3>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="/pizza" class="btn btn-secondary " role="button" >View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                        <img src="https://images.pexels.com/photos/7474617/pexels-photo-7474617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="bd-placeholder-img card-img-top" width="100%" height="239.81" alt="Placeholder: Thumbnail" />
                        <div class="card-body">
                            <h3 class="card-text">WAFFLES AND PANCAKES</h3>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="/waffle" class="btn btn-secondary " role="button" >View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card shadow-sm">
                        <img src="https://as1.ftcdn.net/v2/jpg/04/51/00/44/1000_F_451004451_o5HogNoJ6SjzOOHFncJRXFrwJDhu7DBd.jpg" className="bd-placeholder-img card-img-top" width="100%" height="239.81" alt="Placeholder: Thumbnail" />
                        <div class="card-body">
                            <h3 class="card-text">DOUGHNUTS</h3>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="/doughnuts" class="btn btn-secondary " role="button" >View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                        <img src="https://images.pexels.com/photos/10718224/pexels-photo-10718224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="bd-placeholder-img card-img-top" width="100%" height="239.81" alt="Placeholder: Thumbnail" />
                        <div class="card-body">
                            <h3 class="card-text">MUFFINS AND CUPCAKES</h3>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="/cupcake" class="btn btn-secondary " role="button" >View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                        <img src="https://as2.ftcdn.net/v2/jpg/07/21/30/49/1000_F_721304983_Yu4aMov7LiPzVwlowWhyzlERniDcPRyn.jpg" className="bd-placeholder-img card-img-top" width="100%" height="239.81" alt="Placeholder: Thumbnail" />
                        <div class="card-body">
                            <h3 class="card-text">CAKES</h3>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="/cake" class="btn btn-secondary " role="button" >View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Menu;