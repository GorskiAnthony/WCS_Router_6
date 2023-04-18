import Main from "./pages/Main/Main";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import ContactUser from "./pages/ContactUser";
import DevTeam from "./pages/DevTeam";
import MarkTeam from "./pages/MarkTeam";

function App() {
	return (
		<div className="container">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />}>
					<Route path="developeur" element={<DevTeam />} />
					<Route path="markting" element={<MarkTeam />} />
				</Route>
				<Route path="/contact/:team_user" element={<ContactUser />} />
				<Route
					path="/admin"
					element={<div>Je suis l'admin, page interdite</div>}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
