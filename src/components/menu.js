import React from "react";
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div class="container">

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col">
                    <div class="card shadow-sm">
                        <img src="https://images.pexels.com/photos/10202985/pexels-photo-10202985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="bd-placeholder-img card-img-top" width="100%" height="239.81" />
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
                        <img src="https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="bd-placeholder-img card-img-top" width="100%" height="239.81" />
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
                        <img src="https://images.pexels.com/photos/2372532/pexels-photo-2372532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="bd-placeholder-img card-img-top" width="100%" height="239.81" alt="Placeholder: Thumbnail" />
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
                        <img src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="bd-placeholder-img card-img-top" width="100%" height="239.81" alt="Placeholder: Thumbnail" />
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