import logo from '../images/globe.png';

function Header() {
    return (
        <div className="nav">
            <img src={logo} alt="Globe Logo" />
            <h1>My Travel Journal</h1>
        </div>
    );
}

export default Header;
