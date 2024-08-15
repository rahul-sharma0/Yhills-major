import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
        {/* <footer classname="py-3 my-4">
    <ul classname="nav justify-content-center border-bottom pb-3 mb-3">
      <li classname="nav-item"><Link to="#" classname="nav-link px-2 text-body-secondary">Home</Link></li>
      <li classname="nav-item"><Link to="#" classname="nav-link px-2 text-body-secondary">Features</Link></li>
      <li classname="nav-item"><Link to="#" classname="nav-link px-2 text-body-secondary">Pricing</Link></li>
      <li classname="nav-item"><Link to="#" classname="nav-link px-2 text-body-secondary">FAQs</Link></li>
      <li classname="nav-item"><Link to="#" classname="nav-link px-2 text-body-secondary">About</Link></li>
    </ul>
    <p classname="text-center text-body-secondary">© 2024 Company, Inc</p>
    
  </footer> */}
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
      <li className="nav-item"><Link to="/menu" className="nav-link px-2 text-body-secondary">Menu</Link></li>
      <li className="nav-item"><Link to="/faq" className="nav-link px-2 text-body-secondary">FAQs</Link></li>
      <li className="nav-item"><Link to="/contact-us" className="nav-link px-2 text-body-secondary">Contact Us</Link></li>
      <li className="nav-item"><Link to="/about-us" className="nav-link px-2 text-body-secondary">About Us</Link></li>
    </ul>
    <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
  </footer>
        </>
    )
}
export default Footer;