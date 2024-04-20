import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function Searchbar() {
	return (
		<Stack spacing={2} sx={{ width: 300 }}>
			<Autocomplete
				id="free-solo-demo"
				freeSolo
				options=""
				renderInput={(params) => (
					<TextField
						{...params}
						label="Search for a project..."
					/>
				)}
			/>
		</Stack>
	);
}
