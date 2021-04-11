import React, { useState, useEffect } from "react";
import { Header } from "./component/header";
import { TodoList } from "./component/todo-list";

//create your first component
export function App() {
	return (
		<div className="container">
			<Header />
			<TodoList />
		</div>
	);
}
