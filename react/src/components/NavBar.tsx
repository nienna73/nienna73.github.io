import "./NavBar.css";

export function NavBar() {
    return <nav className='navBar'>
        <img src="/profile-japan.jpg" className='profileImage' height="150px" />
        <a href="#portfolio">About</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#publications">Publications</a>
    </nav>
}