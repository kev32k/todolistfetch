import React from "react";
import PropTypes from "prop-types";

export function Footer({ list }) {
	return (
		<div className="text-break text-info">
			{list.length !== 0
				? `${list.length} Tarea por realizar`
				: "No hay tareas por hacer"}
		</div>
	);
}

Footer.propTypes = {
	list: PropTypes.array,
	deleteTask: PropTypes.func
};
