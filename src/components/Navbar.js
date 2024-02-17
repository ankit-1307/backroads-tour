import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "./data";

const Navbar = () => {
    return (
        <div>
            {" "}
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={logo} className="nav-logo" alt="backroads" />
                        <button
                            type="button"
                            className="nav-toggle"
                            id="nav-toggle"
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    {/* <!-- left this comment on purpose --> */}
                    <ul className="nav-links" id="nav-links">
                        {pageLinks.map((link,index) => {
                            const {  href, text } = link;
                            return (
                                <li key={index+1}>
                                    <a href={href} className="nav-link">
                                        {text}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="nav-icons">
                        {socialLinks.map((socialLink) => {
                            const { id, href, icon } = socialLink;
                            return (
                                <li key={id}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="nav-icon"
                                    >
                                        <i className={icon}></i>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
