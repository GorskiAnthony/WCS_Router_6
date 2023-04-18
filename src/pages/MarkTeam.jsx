import { Link } from "react-router-dom";

const MarkTeam = () => {
	const team = ["Chloé", "Oyhana", "Roxane", "Hafsa"];

	return (
		<div>
			<div>Voilà la team Marketing</div>
			<ul>
				{team.map((user, id) => (
					<li key={id}>
						<Link to={`/contact/${user}`}>{user}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MarkTeam;
