import React from "react";

function ContactUs() {
    return (
        <>
            <div className="container">
                <div class="container px-4 py-5" id="featured-3">
                    <h2 class="pb-2 border-bottom" style={{ color: '#c79f70' }}>CONTACT BRAIDWINNER BAKERY</h2>
                    <h6>"We'd love to hear from you! Get in touch with any questions or inquiries."</h6>
                    <p><b>WHOLESALE PRIICING AVAILABLE</b></p>
                    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3" style={{ textAlign: 'center' }}>
                        <div class="feature col">
                            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                                <img alt="" class="bi" width="225em" height="225em" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkx8oJ8gMN2u9s9wDpHAVB-BGV6uDvwITfA&s" />
                            </div>
                            <h3 class="fs-2 text-body-emphasis">ADDRESS</h3>
                            <p>10207 - 63 Avenue,Emalahleni , 1025</p>
                        </div>
                        <div class="feature col" style={{ textAlign: 'center' }}>
                            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                                <img alt="" class="bi" width="225em" height="225em" src="https://previews.123rf.com/images/niroworld/niroworld1403/niroworld140300048/27071506-web-and-internet-contact-us-concept-with-email-at-and-telephone-icons-and-symbol-on-three-red-round.jpg" />
                            </div>
                            <h3 class="fs-2 text-body-emphasis">PHONE & EMAIL</h3>
                            <p> 079-876-4321</p>
                            <p> <a href="./contactus">contact@breadwinner.com</a></p>
                        </div>
                        <div class="feature col" style={{ textAlign: 'center' }}>
                            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                                <img alt="" class="bi" width="225em" height="225em" src="https://static.vecteezy.com/system/resources/previews/018/965/485/original/eps10-red-passage-of-time-abstract-icon-or-logo-isolated-on-white-background-watch-or-clock-outline-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-and-mobile-app-vector.jpg" />
                            </div>
                            <h3 class="fs-2 text-body-emphasis">BUSINESS HOURS</h3>
                            <h6 style={{ textAlign: 'center' }}>Mon To Fri: 7 AM to 5 PM | Sat & <br /> Sun 7 AM to 4 PM| Holidays : 8 AM to 2 PM</h6>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card container" style={{ width: '50rem', textAlign: 'center', margin: '0 auto', backgroundColor: 'beige' }}>
                <form class="row g-3 ">
                    <div class="col-md-4">
                        <label for="validationServer01" class="form-label">First name</label>
                        <input type="text" class="form-control has-validation" id="validationServer01" required />
                    </div>
                    <div class="col-md-4">
                        <label for="validationServer02" class="form-label">Last name</label>
                        <input type="text" class="form-control has-validation" id="validationServer02" required />
                    </div>
                    <div class="col-md-4">
                        <label for="validationServerUsername" class="form-label">Email</label>
                        <div class="input-group has-validation">
                            <span class="input-group-text" id="inputGroupPrepend3">@</span>
                            <input type="text" class="form-control .has-validation" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div class="col-12">
                        <button class="btn btn-danger" type="submit" style={{ marginBottom: '30px' }}>Submit form</button>
                    </div>
                </form >
            </div>
        </>

    )
}

export default ContactUs;


