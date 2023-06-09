import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<nav className="nav">
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/contact">Contact</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
