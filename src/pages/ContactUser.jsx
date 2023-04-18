import { useParams } from "react-router-dom";
import Layout from "./Layout";

const ContactUser = () => {
	const { team_user } = useParams();

	return (
		<Layout>
			Tu souhaites parler à <b>{team_user}</b>
		</Layout>
	);
};

export default ContactUser;
