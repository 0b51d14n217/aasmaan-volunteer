export default function Home(){
    return(<>
        <nav>
    <div className="aasmaancontainer">
        <img src="./aasmaan.svg"></img>
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
        <img className="blob" src="./blob.svg"></img>
    </div>
    <button className="volunteer">Volunteer Today</button>
    <div className="four">
        <img className="img1" src="./aasmaanuncle1.png"></img>
        <p className="text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p className="text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <img className="img2" src="./aasmaanuncle2.png"></img>
    </div>
    <footer>
        <div>
            <img classNameName="logo" src="./logo.png"></img>
            <p style="font-family: 'Raleway',sans-serif; font-size: 1rem; color: white;">
                ©️ Copyright 2022 - <br />
                Chicanery @ HackOverflow<br />
                All Rights Reserved.
            </p>
        </div>
        <img src="./footer1.jpg" alt="footer1"></img>
        <img src="./footer2.jpg" alt="footer2"></img>
        <img src="./footer3.jpg" alt="footer3"></img>
    </footer>
    </>);
}