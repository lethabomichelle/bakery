import React from "react";
import Form from 'react-bootstrap/Form';

function ContactUs() {
    return (
        <div className="container">
            <div class="container px-4 py-5" id="featured-3">
                <h2 class="pb-2 border-bottom">CONTACT BRAIDWINNER BAKERY</h2>
                <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div class="feature col">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                            <img class="bi" width="225em" height="225em" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkx8oJ8gMN2u9s9wDpHAVB-BGV6uDvwITfA&s" />
                        </div>
                        <h3 class="fs-2 text-body-emphasis">ADDRESS</h3>
                        <p>10207 - 63 Avenue,Emalahleni , 1025</p>
                        <a href="#" class="icon-link"></a>
                    </div>
                    <div class="feature col">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                            <img class="bi" width="225em" height="225em" src="https://previews.123rf.com/images/niroworld/niroworld1403/niroworld140300048/27071506-web-and-internet-contact-us-concept-with-email-at-and-telephone-icons-and-symbol-on-three-red-round.jpg" />
                        </div>
                        <h3 class="fs-2 text-body-emphasis">PHONE & EMAIL</h3>
                        <p> 079-876-4321</p>
                        <p> <a href="./contactus">contact@breadwinner.com</a></p>
                    </div>
                    <div class="feature col">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                            <img class="bi" width="225em" height="225em" src="https://static.vecteezy.com/system/resources/previews/018/965/485/original/eps10-red-passage-of-time-abstract-icon-or-logo-isolated-on-white-background-watch-or-clock-outline-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-and-mobile-app-vector.jpg" />
                        </div>
                        <h3 class="fs-2 text-body-emphasis">BUSINESS HOURS</h3>
                        <h6 style={{ textAlign: 'center' }}>Mon To Fri: 7 AM to 5 PM | Sat & <br /> Sun 7 AM to 4 PM| Holidays : 8 AM to 2 PM</h6>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactUs;