import React from "react";

export default function Waffle() {
    return (
        <>
            <div class="album py-5 bg-body-tertiary">
                <h1 style={{ color: '#c79f70', textAlign: 'center', fontSize: '3.5rem', marginBottom: '20px' }}>
                    Waffles and Pancakes
                </h1>
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div class="col">
                            <div class="card shadow-sm">
                                <img alt="" src="https://images.pexels.com/photos/789327/pexels-photo-789327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="bd-placeholder-img card-img-top" width="100%" height="239.81" />
                                <div class="card-body">
                                    <h3 class="card-text">Nutella Waffles</h3>
                                    <p>R25.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img alt="" src="https://as1.ftcdn.net/v2/jpg/00/94/34/52/1000_F_94345217_ygQcq9hUpubTLlJZJOJL2Whfx4lQ2SJq.jpg" class="bd-placeholder-img card-img-top" width="100%" height="239.81" />
                                <div class="card-body">
                                    <h3 class="card-text">Strawberry Waffles</h3>
                                    <p>R25.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="https://as1.ftcdn.net/v2/jpg/02/79/34/90/1000_F_279349038_e6jZ7wvytoWHyorp0ufMQqwniVaD7Cxc.jpg" className="bd-placeholder-img card-img-top" width="100%" height="239.81" alt="Placeholder: Thumbnail" />
                                <div class="card-body">
                                    <h3 class="card-text">Chocolate Waffles</h3>
                                    <p>R25.00</p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="https://as2.ftcdn.net/v2/jpg/06/78/50/03/1000_F_678500318_RxGI0AyytWMdtzt84YHxGRMltP1yL4iY.jpg" className="bd-placeholder-img card-img-top" width="100%" height="239.81" alt="Placeholder: Thumbnail" />
                                <div class="card-body">
                                    <h3 class="card-text">Vanilla Pancakes</h3>
                                    <p>R15.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="bd-placeholder-img card-img-top" width="100%" height="239.81" alt="Placeholder: Thumbnail" />
                                <div class="card-body">
                                    <h3 class="card-text">Banana Pancakes</h3>
                                    <p>R15.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}