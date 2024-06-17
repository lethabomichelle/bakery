import React from "react";

export default function Pizza() {
    return (
        <>
            <div class="py-5 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">BREADS</h1>
                        <p class="lead text-body-secondary">breads ,,.fgh</p>
                        <p>
                            <a href="#" class="btn btn-primary my-2"></a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="album py-5 bg-body-tertiary">
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&w=600" className="bd-placeholder-img card-img-top" width="100%" height="239.81" />
                                <div class="card-body">
                                    <h3 class="card-text">4in1 Pizza</h3>
                                    <p>R125.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="https://www.allrecipes.com/thmb/ee0daLeNNIUcrKbm5nxwFXheMDM=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d.jpg" class="bd-placeholder-img card-img-top" width="100%" height="239.81" />
                                <div class="card-body">
                                    <h3 class="card-text">BBQ Chicken</h3>
                                    <p>R95.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="https://cdn.loveandlemons.com/wp-content/uploads/2018/09/vegan-pizza-719x1024.jpg" className="bd-placeholder-img card-img-top" width="100%" height="239.81" alt="Placeholder: Thumbnail" />
                                <div class="card-body">
                                    <h3 class="card-text">Vegan Pizza</h3>
                                    <p>R95.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}