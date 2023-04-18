import Layout from "./Layout";

// const Home = () => {
// 	return (
// 		<div>
// 			<Header />
// 			Je suis la page Home
// 			<Footer />
// 		</div>
// 	);
// };
const Home = () => {
	return <Layout>Je suis la page Home, coucou {team_user}</Layout>;
};

export default Home;
