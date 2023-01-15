import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import logo from '../assets/logo.svg'
import '../styling/footer.css'


function Footer(){
    return (
        <div className='footer'>
            <div className="container">
                <div className="d-flex justify-content-around my-5 flex-wrap">
                    <div className='d-flex justify-content-around align-items-center brandLogo flex-wrap'>
                        <img src={logo} className="img-fluid mx-3 " />
                        <p className='text-center  h3 footerLogo'>Fin-Plan</p>
                        <p className='text-wrap footertext mx-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>

                    <div>
                        <p className='footerLogo'>Services</p>
                        <p>Email Marketing</p>
                        <p>Campagains</p>

                    </div>
                    <div>
                        <p className='footerLogo'>About</p>
                        <p>Our Story</p>
                        <p>Benefits</p>

                    </div>
                    <div className='d-flex justify-content-center'>
                        <ul className='socials'>
                            <li>
                                <FontAwesomeIcon icon={faFacebook} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faTwitter} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faInstagram} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center my-3'>
                <p className='text-muted'>Copyright © 2023. Fin-Plan. All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer;