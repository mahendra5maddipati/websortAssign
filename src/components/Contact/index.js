import './index.css'
import Footer from '../../subComponents/Footer'
import Navbar from '../../subComponents/Navbar'
import bg1 from '../../assets/contactbg1.png';
import bg2 from '../../assets/contactbg2.png';
import img1 from '../../assets/contactimg1.png'

function Contact() {
    return (
        <div>
            <Navbar />
            <div
                className="contact-background1"
                style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h1>Contact Us</h1>
                <p>Have a question, idea, or project in mind? We're here to help — get in touch with us today.</p>
            </div>
            <div
                className="contact-background1"
                style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>>
                <h2>Need support or want to collaborate? </h2>
                <p>Fill out the form and our team will get back to you shortly</p>
                <form>
                    <label htmlFor="fName">First Name</label>
                    <input type="text" id="fName" name="fName" className = "form-field" required />
                    <label htmlFor="lName">Second Name</label>
                    <input type="text" id="lName" name="lName" className = "form-field" required />
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" className = "form-field" required />
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" className = "form-field" required />
                    <label htmlFor="Company">Company</label>
                    <input type="text" id="Company" name="Company" className = "form-field" required />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" className = "form-field" required></textarea>
                    <button type="submit" className="submit-field">Submit</button>
                </form>
            </div>
            <div >
                <h1>Address</h1>
                <img src={img1} alt="" />
                <p>Based in Bangalore |  contact@websort.com 
+91-XXXXXXXXXX</p>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;