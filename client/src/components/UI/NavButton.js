function NavButton(props) {
    return (
        <li className="nav-item py-2">
            <span className={`nav-link text-dark ${props.activeSection ? 'active' : ''} `} onClick={props.onClick}>{props.title}</span>
        </li>
    )
}
export default NavButton