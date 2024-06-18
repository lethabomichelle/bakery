import React from "react"
import './slider.css';

export default function Hero() {
    return (
        <div class="container " style={{ color: "black", backgroundColor: "beige" }}>
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img src="https://as1.ftcdn.net/v2/jpg/07/91/04/92/1000_F_791049275_nRnEHTFGpY5rarlUNN0e96hFNTZUKbv3.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div class="col-lg-6" style={{ paddingright: '5px' }}>
                    <h1 style={{ color: '#c79f70' }} class="display-5 fw-bold  lh-1 mb-3">Breadwinner:<div className="text-body-emphasis"> The taste of victory, one bite at a time.</div>
                    </h1>
                    <p class="lead">Life is too short for ordinary bread. Discover Breadwinner's delicious creations.Breadwinner Bakery isn't just about delicious food; it's about creating memories and fostering connections. Let Breadwinner be your haven for happiness, one delicious bite at a time.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        {/* <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button> */}
                        <a href="/menu" type="button" class="btn btn-outline-secondary btn-lg px-4">Menu</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

