import './index.css'

import Navbar from '../../subComponents/Navbar'
import Footer from '../../subComponents/Footer'

function Services() {
    return (
        <div className="services-container">
            <Navbar />
            <h1>Our Services</h1>
            <div>
                <img src = "" alt ="" />
                <h1>UI/UX Design</h1>
                <p>We design clean, intuitive, and engaging user interfaces that enhance the overall user experience. From wireframes to final designs, our focus is on usability, consistency, and creating visually appealing digital products that users love.</p>
                <button>Know More</button>
            </div>
            <div>
                <img src = "" alt ="" />
                <h1>Web Development</h1>
                <p>Planned and executed a digital marketing strategy including SEO, social media marketing, and content creation. Improved website traffic and engagement through targeted campaigns and regular performance tracking.</p>
                <button>Know More</button>
            </div>
            <div>
                <img src = "" alt ="" />
                <h1>App Development</h1>
                <p>Developed a cross-platform mobile app using Flutter for Android and iOS. The app allows users to browse services, make bookings, and receive real-time updates. Designed with a clean UI and smooth navigation to ensure a seamless user experience.</p>
                <button>Know More</button>
            </div>
            <div>
                <img src = "" alt ="" />
                <h1>Digital MArketing</h1>
                <p>Designed and developed a responsive, SEO-optimized website using React. The site includes a modern UI, fast loading speed, and full mobile compatibility. Key features include service pages, contact form, and an easy-to-manage content structure to support client updates and user engagement.</p>
                <button>Know More</button>
            </div>
            
            <Footer />
        </div>
    )
}

export default Services;