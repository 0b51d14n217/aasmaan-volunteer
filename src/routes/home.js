import "./home.css"
import aasmaan from "./imgs/aasmaan.svg"
import blob from "./imgs/blob.svg"
import aasmaanuncle1 from "./imgs/aasmaanuncle1.png"
import aasmaanuncle2 from "./imgs/aasmaanuncle2.png"
import footer1 from "./imgs/footer1.jpg"
import footer2 from "./imgs/footer2.jpg"
import footer3 from "./imgs/footer3.jpg"
import logo from "./imgs/logo.png"

export default function Home(){
    return(<>
        <nav>
    <div className="aasmaancontainer">
        <img src={aasmaan}></img>
    </div>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#joinus">Join Us</a></li>
            <li><a href="#login">Login/Sign Up</a></li>
        </ul>
    </nav>
    <div className="mid">
        <div className="edutext">Education is not received, it is achieved.</div>
        <img className="blob" src={blob}></img>
    </div>
    <button className="volunteer">Volunteer Today</button>
    <div className="four">
        <img className="img1" src={aasmaanuncle1}></img>
        <p className="text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p className="text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <img className="img2" src={aasmaanuncle2}></img>
    </div>
    <footer>
        <div>
            <img className="logo" src={logo}></img>
            <p>
                ©️ Copyright 2022 - <br />
                Chicanery @ HackOverflow<br />
                All Rights Reserved.
            </p>
        </div>
        <img src={footer1} alt="footer1"></img>
        <img src={footer2} alt="footer2"></img>
        <img src={footer3} alt="footer3"></img>
    </footer>
    </>);
}