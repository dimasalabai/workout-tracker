function Layout({ children }) {
	return (
		<div>
			<h1>Workout Tracker</h1>

			<main>{children}</main>
		</div>
	);
}

export default Layout;
