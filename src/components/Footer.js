import '../styles/SameLineDivs.css'
import '../styles/Footer.css'

// look up how to make a sticky footer 
const Footer = () => {
    return (
        <div id="parent" className="footer">
            <div className="child"> Company Name Here </div>
            <div className="child"> Copyright Year Here </div>
        </div>
    );
}

export default Footer;