import { useRef } from "react";
import "../Styles/main.css";

function Nav() {
    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(   
        
        <header>
            <h2>Thanuja & Niroshan</h2>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Events</a>
                <a href="/#">Accommodations</a>
                <a href="/#">Resources</a>
                <a href="/#">About</a>
                
                {/* USE FOR SMOLLER SCREEN CLOSE THE NAV */}
                <button className="nav-btn nav-close-btn" onClick={showNav}> 
                    <a>*</a>
                </button>
            </nav>

            {/* OPEN THE NAV IN SMOLLER SCREEN */}
            <button className="nav-btn" onClick={showNav}>
            <a>--</a>
                </button>
        </header>

        
    );
}

export default Nav;