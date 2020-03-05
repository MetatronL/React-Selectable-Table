/* eslint-disable no-param-reassign */
import React, { useState, useEffect, useCallback } from "react";
import SelectableTableHeader from "./SelectableTableHeader";
import SelectableTableBody from "./SelectableTableBody";
import defaultStyle from "./defaultStyle";

export default function SelectableTable({
	arrData,
	setData,
	arrColumnNames,
	cells,
	customCSS,
})
{
	/*
	TODO: Learn this component to use an index sub property [optional]
	*/
	const [selectedAll, setSelectedAll] = useState(null);

	const checkDataIntegrity = () => {
		/**
		* The arrData should have a variable 'tableRowSelected' per entry
		*/

		arrData.forEach((row) => {
			if (typeof row.tableRowSelected === "undefined")
			{
				throw new Error("Please add the tableRowSelected property for every entry in the row list.");
			}
		});
	};

	const fnSelectAll = (bChecked) => {
		checkDataIntegrity();
		setSelectedAll(bChecked);
	};

	const setAll = () => {
		if (selectedAll !== null)
		{
			arrData.forEach((row) => {
				row.tableRowSelected = !!selectedAll;
			});

			setData([...arrData]);
		}
	};

	useEffect(() => setAll(), [selectedAll]);

	const fnSelect = (key, bChecked) => {
		arrData[key].tableRowSelected = !!bChecked;

		if (arrData.every((row) => !!row.tableRowSelected))
		{
			setSelectedAll(true);
		}
		else
		{
			setSelectedAll(null);
		}

		setData([...arrData]);
	};

	return (
		<table
			css={{
				...defaultStyle.table,
				...customCSS,
			}}
		>
			<SelectableTableHeader
				arrColumnNames = {arrColumnNames}
				checked = {!!selectedAll}
				onChange = {fnSelectAll}
			/>
			<SelectableTableBody
				arrData = {arrData}
				onChange = {fnSelect}
				cells = {cells}
			/>
		</table>
	);
}
