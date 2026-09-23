const STORAGE_KEY = "workouts";

function getWorkouts() {
	const data = localStorage.getItem(STORAGE_KEY);
	return data ? JSON.parse(data) : [];
}

function saveWorkouts(workouts) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(workouts));
}

function getWorkoutById(id) {
	const workouts = getWorkouts();
	return workouts.find((workout) => workout.id === id);
}

function createWorkout({ title, date, notes }) {
	const workouts = getWorkouts();
	const newWorkout = {
		id: crypto.randomUUID(),
		title,
		date,
		notes: notes || "",
		exercises: [],
	};
	saveWorkouts([...workouts, newWorkout]);
	return newWorkout;
}

function updateWorkout(id, updates) {
	const workouts = getWorkouts();
	const updatedWorkouts = workouts.map((workout) =>
		workout.id === id ? { ...workout, ...updates } : workout,
	);
	saveWorkouts(updatedWorkouts);
}

function deleteWorkout(id) {
	const workouts = getWorkouts();
	const filteredWorkouts = workouts.filter((workout) => workout.id !== id);
	saveWorkouts(filteredWorkouts);
}

export {
	getWorkouts,
	getWorkoutById,
	createWorkout,
	updateWorkout,
	deleteWorkout,
};
