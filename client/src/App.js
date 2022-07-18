import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Goodbye from "./pages/Goodbye";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/goodbye" element={<Goodbye />} />
	</Routes>
);

export default App;
