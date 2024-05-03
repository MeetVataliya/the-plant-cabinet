import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faWhatsapp, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer style={{
      width: '100%',
      height: '400px',
      marginTop: '20px',
      backgroundColor: 'rgba(20, 147, 20, 0.79)',
      color: 'white',
      padding: '20px',
    }}>
      <style>{`
        .foot1 {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-start;
          margin-top:0;
        }
        .part {
          width: 200px;
        }
        .liname {
          font-weight: bold;
          font-size: 18px;
        }
        ul {
          padding-left: 0;
        }
        li {
          margin-bottom: 5px;
        }
        li a {
          font-size: 15px;
          color: white;
          text-decoration: none;
        }
        li a:hover {
          border-bottom: .2rem solid white;
        }
        .p {
          display: flex;
          align-items: center;
          margin-left: 1px;
        }
        .fa-icon {
          width: 20px;
          height: 20px;
          margin-right: 5px;
          color: white;
        }
      `}</style>
      <Container  style={{ paddingBottom: '0.1rem'}}>
        <Row>
          <Col className='text-center py-1'>
            <p style={{ textTransform: 'capitalize' }}> &copy; The Plant Cabinet</p>
          </Col>
        </Row>
      </Container>
      <div className="foot1" id="Footer">
        <div className="part">
          <h5 className="liname">ABOUT US</h5>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Locate Store</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>
        <div className="part">
          <h5 className="liname">CUSTOMER CARE</h5>
          <ul>
            <li><a href="#">Take The Plant Quiz</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>
        <div className="part">
          <h5 className="liname">OFFERS & REWARDS</h5>
          <ul>
            <li><a href="#">Plant Parent Rewards Club</a></li>
            <li><a href="#">Coupons</a></li>
          </ul>
        </div>
        <div className="part">
          <h5 className="liname">GET IN TOUCH</h5>
          <ul>
            <li><a href="#">Call : +91-91299 12991</a></li>
            <li><a href="#">Email : <span>theplantcabinet0@gmail.com</span></a></li>
          </ul>
        </div>
        <div className="part">
          <h5 className="liname follow">FOLLOW US</h5>
          <ul className="p">
            <li><a href="https://www.instagram.com/theplantcabinet0?igshid=MXFwZ3k1emZ6MjZxYQ=="><FontAwesomeIcon icon={faInstagram} className="fa-icon" /></a></li>
            <li><a href="https://www.youtube.com/@Theplantcabinet"><FontAwesomeIcon icon={faYoutube} className="fa-icon" /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faWhatsapp} className="fa-icon" /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faFacebook} className="fa-icon" /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faLinkedin} className="fa-icon" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
