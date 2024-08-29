import About from "../About";
import Appointment from "../Appointment";
import Feature from "../Feature";
import Header from "../Header";
import Service from "../Service";
import Testimonial from "../Testimonial";

export default function Home() {
    return (
        <div>
            <Header />
            <About />
            <Service />
            <Feature />
            <Appointment />
            <Testimonial />

        </div>
    )
}
