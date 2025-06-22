import './index.css'

import Navbar from '../../subComponents/Navbar'
import Footer from '../../subComponents/Footer'
import img1 from '../../assets/UI design.jpg'
import img2 from '../../assets/web development.jpg'
import img3 from '../../assets/App development.jpg'
import img4 from '../../assets/Digital Marketing.jpg'
import bg1 from '../../assets/servicesbg1.jpg'
import bg2 from '../../assets/servicesbg2.jpg'
import bg3 from '../../assets/servicesbg3.jpg'

function Services() {
    return (
        <div className="services-container">
            <Navbar />
            <h1>Our Services</h1>
            <div
                className="service-background"
                style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div>
                    <img src = {img1} alt ="" />
                    <h1>UI/UX Design</h1>
                    <p>We design clean, intuitive, and engaging user interfaces that enhance the overall user experience. From wireframes to final designs, our focus is on usability, consistency, and creating visually appealing digital products that users love.</p>
                    <button>Know More</button>
                </div>
                <div>
                    <img src = {img2} alt ="" />
                    <h1>Web Development</h1>
                    <p>Planned and executed a digital marketing strategy including SEO, social media marketing, and content creation. Improved website traffic and engagement through targeted campaigns and regular performance tracking.</p>
                    <button>Know More</button>
                </div>
            </div>
            <div className="service-background"
                style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>>
                <img src = {img3} alt ="" />
                <h1>App Development</h1>
                <p>Developed a cross-platform mobile app using Flutter for Android and iOS. The app allows users to browse services, make bookings, and receive real-time updates. Designed with a clean UI and smooth navigation to ensure a seamless user experience.</p>
                <button>Know More</button>
            </div>
            <div className="service-background"
                style={{ backgroundImage: `url(${bg3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>>
                <img src = {img4} alt ="" />
                <h1>Digital MArketing</h1>
                <p>Designed and developed a responsive, SEO-optimized website using React. The site includes a modern UI, fast loading speed, and full mobile compatibility. Key features include service pages, contact form, and an easy-to-manage content structure to support client updates and user engagement.</p>
                <button>Know More</button>
            </div>
            
            <Footer />
        </div>
    )
}

export default Services;