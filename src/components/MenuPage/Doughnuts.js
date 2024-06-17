import React from "react";

export default function Doughnuts() {
    return (
        <>
            <div class="album py-5 bg-body-tertiary">
                <h1 style={{ color: '#c79f70', textAlign: 'center', fontSize: '3.5rem', marginBottom: '20px' }}>
                    Doughnuts
                </h1>
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div class="col">
                            <div class="card shadow-sm">
                                <img alt="" src="https://as2.ftcdn.net/v2/jpg/03/54/47/69/1000_F_354476901_TEgfjnGu2o55UdNGzgkf01xJbwWcry9A.jpg" className="bd-placeholder-img card-img-top" width="100%" height="239.81" />
                                <div class="card-body">
                                    <h3 class="card-text">Plain Donut</h3>
                                    <p>R8.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img alt="" src="https://as2.ftcdn.net/v2/jpg/08/06/82/93/1000_F_806829332_jIHJAR47NCkpSBK1RzVIwjTsOPXefKqa.jpg" class="bd-placeholder-img card-img-top" width="100%" height="239.81" />
                                <div class="card-body">
                                    <h3 class="card-text">Death By Chocolate</h3>
                                    <p>R22.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="https://as1.ftcdn.net/v2/jpg/06/79/63/62/1000_F_679636246_bfDNipzdzhi47okKeUvKBjLjpPPpdJ4o.jpg" className="bd-placeholder-img card-img-top" width="100%" height="239.81" alt="Placeholder: Thumbnail" />
                                <div class="card-body">
                                    <h3 class="card-text">Strawberry</h3>
                                    <p>R25.00</p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="https://as2.ftcdn.net/v2/jpg/06/15/76/39/1000_F_615763994_gMNjodzPGKyldOKSndgu1HFPbh65Eki4.webp" className="bd-placeholder-img card-img-top" width="100%" height="239.81" alt="Placeholder: Thumbnail" />
                                <div class="card-body">
                                    <h3 class="card-text">Chocolate</h3>
                                    <p>R10.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="https://as1.ftcdn.net/v2/jpg/05/48/34/58/1000_F_548345884_eTaAyHqydQsmjjvGfRGMOyrPlV4zp9bZ.jpg" className="bd-placeholder-img card-img-top" width="100%" height="239.81" alt="Placeholder: Thumbnail" />
                                <div class="card-body">
                                    <h3 class="card-text">DIY Donut Box</h3>
                                    <p>R100.00</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>


    )
}