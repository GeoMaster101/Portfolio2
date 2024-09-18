function Header() {

    function isSelected(page) {
        if(page == window.location.href.split("/").pop()) {
            return "selected"
        } else {
            return ""
        }
    }

    return (
        <header>
            <h1 className = "my-name" >Giovanni Cagliari</h1>
            <ul id="header-links-container">
            <li><a className={isSelected("")} href='/'>About</a></li>
            <li><a className={isSelected("portfolio")} href='/portfolio'>Portfolio</a></li>
            <li><a className={isSelected("Contact")} href='/Contact'>Contact</a></li>
            <li><a className={isSelected("Resume")} href='/Resume'>Resume</a></li>
            </ul>
        </header>
    )
}

export default Header;