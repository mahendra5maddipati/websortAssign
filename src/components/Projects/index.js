import './index.css';

import Footer from '../../subComponents/Footer';
import Navbar from '../../subComponents/Navbar';
import Carousel from '../../subComponents/Carousel';

function Projects() {
    return (
        <div>
            <Navbar />
            <div>
                <h1>Digitizing Ideas with Clean Code & Modern Design</h1>
                <p>At Websort, we turn digital visions into reality with expert web and app development, UI/UX design, and digital marketing. Based in Bangalore, we craft responsive websites, innovative mobile apps, and drive results through SEO, PPC, and social media strategies.</p>
                <div>
                    <button>Contact Us</button>
                    <button>Know Modern</button>
                </div>
            </div>
            <div>
                <h1>About Us</h1>
                <h5>Where Innovation Meets Execution</h5>
                <p>Websort builds websites, apps, and digital marketing solutions to help you grow online. Based in Bangalore, we focus on smart design, strong tech, and real results.We specialize in web development, mobile app development, UI/UX design, and digital marketing—delivering responsive websites, high-performance Android/iOS apps, and visually engaging interfaces. Our digital marketing expertise spans SEO, PPC, social media marketing, and content creation, helping businesses grow and connect with their ideal audience.</p>
                <button>Know More</button>
            </div>
            <div>
                <h1>Projects</h1>
                <Carousel />
            </div>
            <div>

            </div>
            <div>
                <h1>See Our Work in Web Design & Development</h1>
                <img src="" alt = "" />
                <p>We specialize in building responsive, user-friendly websites tailored to client needs. Take a look at our recent projects to see how design and functionality come together.</p>
                <button>Know More</button>
            </div>
            <div>
                <h1>Why We Stand Out</h1>
                <img src="" alt = "" />
                <p>At Websort, we don’t just build digital products — we build careers. By joining our team, you become part of a creative and collaborative environment that values innovation, continuous learning, and personal growth.</p>
                <button>Know More</button>
            </div>
            <div>
                <h1>One of our proudest achievements.</h1>
                <p>A standout from our portfolio, this project exemplifies the quality, creativity, and performance we bring to every solution. It's a true reflection of our commitment to excellence.</p>
                <div>

                </div>
            </div>
            <div>
                <h1>Questions? We're here to answer them!</h1>
                <form>
                    <label htmlFor="Name">Name</label>
                    <input type="text" id="Name" name="Name" placeholder="Name" required />
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Email Address" required />
                    <label htmlFor="number">Number</label>
                    <input type="tel" id="number" name="number" placeholder="Number" required />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Your message here..." required></textarea>
                    <button type="submit">Submit</button>
                </form>
                <h3>See what opportunities await you</h3>
                <button>Explore More</button>
            </div>
            
            <Footer />
        </div>
    )
}

export default Projects;