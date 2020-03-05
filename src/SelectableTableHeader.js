import React, { useRef, useState, useEffect, useCallback } from "react";

export default function SelectableTableHeader({
	arrColumnNames,
	checked = false,
	onChange,
})
{
	const makeHeaderField = (objColumn, index) => (
		<th
			key={index}
			css={{
				minWidth: objColumn.minWidth || undefined,
			}}
		>
			<span>{objColumn.label}</span>
		</th>
	);

	const globalToggleReference = useRef(null);

	const handleChange = (/* event */) => {
		onChange(globalToggleReference.current.checked);
	};

	return (
		<thead>
			<tr>
				<th>
					<input
						type = "checkbox"
						aria-label = "toggle all rows selected"
						checked = {checked}
						onChange = {handleChange}
						ref={globalToggleReference}
					/>
				</th>
				{arrColumnNames.map(makeHeaderField)}
			</tr>
		</thead>
	);
}
