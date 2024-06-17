import React from "react";

export default function Breads() {
    return (
        <>
            <div class="album py-5 bg-body-tertiary">
                <h1 style={{ color: '#c79f70', textAlign: 'center', fontSize: '3.5rem', marginBottom: '20px' }}>
                    Bread
                </h1>
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div class="col">
                            <div class="card shadow-sm">
                                <img alt="" src="https://d2da74qf06z5b6.cloudfront.net/2021/11/Sandwich-Bread.jpg" class="bd-placeholder-img card-img-top" width="100%" height="239.81" />
                                <div class="card-body">
                                    <h3 class="card-text">Brown Bread</h3>
                                    <p>R10.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="https://www.goldmedalbakery.com/content/uploads/2019/12/Sandwich-White.jpg" className="bd-placeholder-img card-img-top" width="100%" height="239.81" alt="Placeholder: Thumbnail" />
                                <div class="card-body">
                                    <h3 class="card-text">White Bread</h3>
                                    <p>R15.00</p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="https://www.recipetineats.com/wp-content/uploads/2023/06/Cheese-bread-main-photos_7a.jpg" className="bd-placeholder-img card-img-top" width="100%" height="239.81" alt="Placeholder: Thumbnail" />
                                <div class="card-body">
                                    <h3 class="card-text">Cheese Bread</h3>
                                    <p>R45.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="https://static01.nyt.com/images/2018/12/11/dining/as-garlic-bread/as-garlic-bread-master768.jpg?width=1280&quality=75&auto=webp" className="bd-placeholder-img card-img-top" width="100%" height="239.81" alt="Placeholder: Thumbnail" />
                                <div class="card-body">
                                    <h3 class="card-text">Garlic Bread</h3>
                                    <p>R35.00</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>


    )
}