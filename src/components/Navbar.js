import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <div id="parent">
            <div class="child"> Purpose </div>
            <div class="child"> Sort </div>
            <div class="child"> Create a task </div>
            <a href="https://github.com/MidnightCoder06/Cross-Team-Collab-Tool"><div class="child"> Contribute </div></a>
            <div class="child"> File a bug </div>
        </div>
    );
}

export default Navbar;