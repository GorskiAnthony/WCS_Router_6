import { Link, Outlet } from "react-router-dom";
import Layout from "./Layout";

const Contact = () => {
	return (
		<Layout>
			Je suis la page Contact
			<div>
				{/* <Link to="developeur">Dev</Link>
				<Link to="markting">Marketing</Link> */}
				<Link to="developeur">Dev</Link>
				<Link to="markting">Marketing</Link>
			</div>
			<Outlet />
			{/**
			 * /contact/developeur
			 *
			 * <Outlet /> => <DevTeam />
			 *
			 * /contact/markting
			 *
			 * <Outlet /> => <MarkTeam />
			 */}
		</Layout>
	);
};

export default Contact;
