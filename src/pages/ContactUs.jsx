import React from 'react';
import '../assets/css/contactus.css';

function ContactUs() {
    return (
        <div className='section-contact-us'>
            <div className='container'>
                <div className='map'>
                    <iframe style={{ width: '100%', height: '530px' }}
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                        id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Ho%C3%A0ng%20Gia%20Thai%20Nguyen+(Ng%C3%A3%20ba%20%C4%91i%E1%BB%83m%20h%E1%BA%B9n)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

                </div>
                <div className='content-contact-us'>
                    <div className='row'>
                        <div id='left-colum' className='col-xs-12 col-sm-4 col-md-3'>
                            <div className="contact-rich">
                                <h4>Store information</h4>
                                <div className="block">
                                    <div className="icon"><i className="fa-regular fa-map"></i></div>
                                    <div className="data">Mixy Responsive Prestashop Theme<br />United States</div>
                                </div>
                                <div className="block">
                                    <div className="icon"><i className="fa-solid fa-phone"></i></div>
                                    <div className="data">
                                        Call us:
                                        <a href="tel:+888554168">+888554168</a>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="icon"><i className="fa-regular fa-envelope"></i></div>
                                    <div className="data email">
                                        Email us:
                                        <a href="mailto:demo@posthemes.com">demo@posthemes.com</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div id='content-wrapper' className='col-xs-12 col-sm-8 col-md-9'>
                            <div className='form-fields'>
                                <div className='form-group row'>
                                    <div className='col-md-9 col-md-offset-3'>
                                        <h3>Contact us</h3>
                                    </div>
                                </div>

                                <div className='form-group row'>
                                    <label className='col-md-3 form-control-label'>Subject</label>
                                    <div className='col-md-6'>
                                        <select className='form-control form-control-select'>
                                            <option value='2'>Customer service</option>
                                            <option value='1'>Webmaster</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='form-group row'>
                                    <label className='col-md-3 form-control-label'>Email address</label>
                                    <div className='col-md-6'>
                                        <input className='form-control' type='email' placeholder='your@email.com'></input>
                                    </div>
                                </div>

                                <div className='form-group row'>
                                    <label className='col-md-3 form-control-label'>Attachment</label>
                                    <div class="col-md-6">
                                        <input type="file" name="fileUpload" class="filestyle" data-buttontext="Choose file" id="filestyle-0" tabindex="-1" />
                                        <div class="bootstrap-filestyle input-group">
                                            <input type="text" class="form-control " placeholder disabled />
                                            <span class="group-span-filestyle input-group-btn" tabindex="0">
                                                <label for="filestyle-0" class="btn btn-default ">
                                                    <span class="icon-span-filestyle glyphicon glyphicon-folder-open"></span>
                                                    <span class="buttonText">Choose file</span></label></span></div>
                                    </div>
                                </div>

                                <div className='form-group row'>
                                    <label class="col-md-3 form-control-label">Message</label>
                                    <div class="col-md-9">
                                        <textarea class="form-control" name="message" placeholder="How can we help?" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                            <button className='btn-send'>Send</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ContactUs;