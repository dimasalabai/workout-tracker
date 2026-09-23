import { Link } from "react-router-dom";

function WorkoutListPage() {
	return (
		<>
			<p> Список тренувань(заглушка)</p>
			<Link to="/workouts/1">Перейти до деталей тренування 1</Link>
		</>
	);
}

export default WorkoutListPage;
