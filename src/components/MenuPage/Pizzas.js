import React from "react";

export default function Pizza() {
    return (
        <>
            <div class="album py-5 bg-body-tertiary">
                <h1 style={{ color: '#c79f70', textAlign: 'center', fontSize: '3.5rem', marginBottom: '20px' }}>
                    Pizzas
                </h1>
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div class="col">
                            <div class="card shadow-sm">
                                <img alt="" src="https://as2.ftcdn.net/v2/jpg/08/01/23/77/1000_F_801237736_x4VCdmsThXf8jBsNj8IGCZ4FHrefloX7.jpg" className="bd-placeholder-img card-img-top" width="100%" height="239.81" />
                                <div class="card-body">
                                    <h3 class="card-text">Mix & Match</h3>
                                    <p>R125.00</p>
                                </div>
                            </div>
                        </div><div class="col">
                            <div class="card shadow-sm">
                                <img alt="" src="https://as2.ftcdn.net/v2/jpg/07/12/06/09/1000_F_712060996_bd3d7ANGdflVPRRkgQ1fmps9nABzVmIT.webp" className="bd-placeholder-img card-img-top" width="100%" height="239.81" />
                                <div class="card-body">
                                    <h3 class="card-text">Pepperoni</h3>
                                    <p>R105.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img alt="" src="https://www.allrecipes.com/thmb/ee0daLeNNIUcrKbm5nxwFXheMDM=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d.jpg" class="bd-placeholder-img card-img-top" width="100%" height="239.81" />
                                <div class="card-body">
                                    <h3 class="card-text">BBQ Chicken</h3>
                                    <p>R95.00</p>
                                </div>
                            </div>
                        </div><div class="col">
                            <div class="card shadow-sm">
                                <img alt="" src="https://as1.ftcdn.net/v2/jpg/05/03/95/62/1000_F_503956224_QQ6NN70oEKOtuq3NEslblVgODA7JPioa.jpg" class="bd-placeholder-img card-img-top" width="100%" height="239.81" />
                                <div class="card-body">
                                    <h3 class="card-text">Chicken and Mayo</h3>
                                    <p>R95.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="https://as1.ftcdn.net/v2/jpg/01/93/43/36/1000_F_193433617_kEA8EF0nraxaN12I8UbAZ0tR6Cz7lRYL.jpg" className="bd-placeholder-img card-img-top" width="100%" height="239.81" alt="Placeholder: Thumbnail" />
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