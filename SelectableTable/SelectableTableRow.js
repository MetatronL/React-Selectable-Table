import React, { useRef, useState, useEffect, useCallback } from "react";

export default function SelectableTableRow({
	rowKey,
	checked,
	data,
	cells,
	onChange,
})
{
	const inputReference = useRef(null);
	const handleChange = (/* event */) => {
		onChange(rowKey, inputReference.current.checked);
	};

	return (
		<tr
			css={(theme) => ({
				borderTop: `1pt solid ${theme.separatorColor}`,
				paddingBottom: "0.2rem",
				paddingTop: "1.3rem",
			})}
			key={rowKey}
		>
			<td
				css={{
					borderTop: "inherit",
					padding: "inherit",
				}}
			>
				<input
					type = "checkbox"
					aria-label = "toggle all rows selected"
					checked = {checked}
					onChange = {handleChange}
					ref={inputReference}
				/>
			</td>
			{cells.map((cell, index) => (
				<td
					key={index}
					css={{
						borderTop: "inherit",
						padding: "inherit",
					}}
				>
					{cell({ data })}
				</td>
			))}
		</tr>
	);
}
