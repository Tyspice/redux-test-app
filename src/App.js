import "./App.css";
import InputComponent from "./components/InputComponent";
import MyPostComponent from "./components/MyPostComponent";

const App = () => {

	return (
		<div className="container">
			<div className="row mt-3 mb-5">
				<div className="col-md d-flex justify-content-center">
					<h1>Redux Test App</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-md d-flex justify-content-center">
					<InputComponent />
				</div>
			</div>
			<div className="row mt-5">
				<div className="col-md d-flex flex-wrap justify-content-around">
					<MyPostComponent />
				</div>
			</div>
		</div>
	);
};

export default App;
