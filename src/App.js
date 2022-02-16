import "./App.css";
import HeroSection from "./components/HeroSection";

function App() {
	return (
		<>
			<HeroSection/>
			<section className="" id="profile">
				<h1 className="text-2xl text-center font-bold mt-28">
					Profile
				</h1>
				<p className="text-lg text-gray-600 font-semibold text-center">
					Mengenal saya secara singkat 
				</p>

			</section>
		</>
	);
}

export default App;
