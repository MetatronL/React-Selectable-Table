import React from "react";
import SelectableTableRow from "./SelectableTableRow";

export default function SelectableTableBody({
	arrData,
	cells,
	onChange,
})
{
	return (
		<tbody>
			{arrData.map((data, index) => (
				<SelectableTableRow
					key = {index}
					rowKey = {index}

					checked = {!!arrData[index].tableRowSelected}
					data = {data}
					cells = {cells}
					onChange = {onChange}
				/>
			))}
		</tbody>
	);
}
