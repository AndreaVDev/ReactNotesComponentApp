import TodoContainer from "./components/TodoContainer";
import React from "react"
import ReactDOM from "react-dom"
// stylesheet
import "./App.css"
ReactDOM.render(
	<React.StrictMode>
		<TodoContainer />
	</React.StrictMode>,
    document.getElementById("root")
)
