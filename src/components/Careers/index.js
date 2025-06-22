import './index.css'
import Footer from '../../subComponents/Footer'
import Navbar from '../../subComponents/Navbar'
import careersBg from '../../assets/Careersbackground1.png' 
import img1 from '../../assets/careerimage1.png'
import img2 from '../../assets/careerimage2.png'
import img3 from '../../assets/careerimage3.png'
import img4 from '../../assets/careerimage4.png'
import img5 from '../../assets/careerimage5.png'
import careersBg2 from '../../assets/careerbackground2.jpg'
import careersBg3 from '../../assets/careerbackground3.jpg'

function Careers() {
    return (
        <div>
            <Navbar />
            <div
                className="career-background1"
                style={{ backgroundImage: `url(${careersBg})` }} // Set background image inline
            >
                <h1>Talent wins games, but teamwork and intelligence win championships</h1>
                <img src= {img1} alt = "careers-image" className="careers-image" />
                <p>At Websort, we bring digital ideas to life through expert web and app development, digital marketing, and UI/UX design. Based in Bangalore, we build responsive websites and mobile apps, enhance online visibility with SEO, PPC, and social media, and design user-friendly interfaces. Choose Websort for innovative, tailored digital solutions.</p>
                
            </div>
            <div
                className="career-background1"
                style={{ backgroundImage: `url(${careersBg2})` }}>
                <h2>Internship Opportunities at Websort</h2>
                <h5>Internship Opportunities at Websort</h5>
                <div>
                    <img src={img2} alt=""/>
                    <p>App Developer</p>
                </div>
                <div>
                    <img src={img3} alt=""/>
                    <p>Web Developer</p>
                </div>
                <div>
                    <img src={img4} alt=""/>
                    <p>UI UX</p>
                </div>
                <div>
                    <img src={img5} alt=""/>
                    <p>Marketing</p>
                </div>
            </div>
            <div
                className="career-background1"
                style={{ backgroundImage: `url(${careersBg3})` }}>
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
            <Footer />
        </div>
    )
}

export default Careers;