import Layout from "../Layout";
import style from "./main.module.css";

const Main = () => {
	return (
		<Layout>
			<h1 className={style.title}>Main</h1>
			<div>Je suis le main</div>
		</Layout>
	);
};

export default Main;
