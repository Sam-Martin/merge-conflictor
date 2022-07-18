import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Goodbye from "./pages/Goodbye";
import Home from "./pages/Home";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/goodbye" element={<Goodbye />} />
	</Routes>
);

export default App;
