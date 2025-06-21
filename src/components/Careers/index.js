import './index.css'
import Footer from '../../subComponents/Footer'

function Careers() {
    return (
        <div>
            <navbar />
            <div>
                <h1>Talent wins games, but teamwork and intelligence win championships</h1>
                <img src="" alt = "careers-image" className="careers-image" />
                <p>At Websort, we bring digital ideas to life through expert web and app development, digital marketing, and UI/UX design. Based in Bangalore, we build responsive websites and mobile apps, enhance online visibility with SEO, PPC, and social media, and design user-friendly interfaces. Choose Websort for innovative, tailored digital solutions.</p>
                
            </div>
            <div>
                <h2>Internship Opportunities at Websort</h2>
                <h5>Internship Opportunities at Websort</h5>
                <div>
                    <img src="" alt=""/>
                    <p>App Developer</p>
                </div>
                <div>
                    <img src="" alt=""/>
                    <p>Web Developer</p>
                </div>
                <div>
                    <img src="" alt=""/>
                    <p>UI UX</p>
                </div>
                <div>
                    <img src="" alt=""/>
                    <p>Marketing</p>
                </div>
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
            <Footer />
        </div>
    )
}

export default Careers;