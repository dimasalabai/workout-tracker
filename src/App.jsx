import Layout from "./shared/components/Layout/Layout.jsx";
import { Routes, Route } from "react-router-dom";
import WorkoutListPage from "./features/workouts/pages/WorkoutListPage.jsx";
import WorkoutDetailsPage from "./features/workouts/pages/WorkoutDetailsPage.jsx";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<WorkoutListPage />} />
				<Route path="/workouts/:id" element={<WorkoutDetailsPage />} />
			</Routes>
		</Layout>
	);
}

export default App;
