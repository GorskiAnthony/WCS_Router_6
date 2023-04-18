import { Link } from "react-router-dom";

const DevTeam = () => {
	const team = ["Julien", "Benoît", "Jean-François", "Anthony"];

	return (
		<div>
			<div>Voilà la team dev</div>
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

export default DevTeam;
