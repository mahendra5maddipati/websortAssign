import './index.css'
import Footer from '../../subComponents/Footer'
import Navbar from '../../subComponents/NAvbar'

function Contact() {
    return (
        <div>
            <Navbar />
            <div>
                <h1>Contact Us</h1>
                <p>Have a question, idea, or project in mind? We're here to help — get in touch with us today.</p>
            </div>
            <div>
                <h2>Need support or want to collaborate? </h2>
                <p>Fill out the form and our team will get back to you shortly</p>
                <form>
                    <label htmlFor="fName">First Name</label>
                    <input type="text" id="fName" name="fName" placeholder="First Name" required />
                    <label htmlFor="lName">Second Name</label>
                    <input type="text" id="lName" name="lName" placeholder="Second Name" required />
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Email Address" required />
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />
                    <label htmlFor="Company">Company</label>
                    <input type="text" id="Company" name="Company" placeholder="Company Name" required />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Your message here..." required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                <h1>Address</h1>
                <img src="" alt="" />
            </div>
            <Footer />
        </div>
    )
}

export default Contact;