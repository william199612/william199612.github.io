import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {
	tableCellClasses,
} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

const headCells = [
	{
		id: "name",
		label: "Project Name",
	},
	{
		id: "description",
		label: "Description",
	},
	{
		id: "size",
		label: "Size",
	},
	{
		id: "language",
		label: "Programming Language",
	},
];

export default function AllRepoList({ repoData }) {
	return (
		<div className="all-repo">
			{/* <div className="left-section"></div>
			<div className="right-section"> */}
			<TableContainer component={Paper}>
				<Table
					sx={{ minWidth: 700 }}
					aria-label="customized table"
				>
					<TableHead>
						<TableRow>
							{headCells.map((cell) => {
								return (
									<StyledTableCell key={cell.id}>
										{cell.label}
									</StyledTableCell>
								);
							})}
						</TableRow>
					</TableHead>
					<TableBody>
						{repoData.map((data) => (
							<StyledTableRow key={data.name}>
								<StyledTableCell component="th" scope="row">
									<Link to={data.html_url}>
										{data.name}
									</Link>
								</StyledTableCell>
								<StyledTableCell align="left">
									{data.description}
								</StyledTableCell>
								<StyledTableCell align="right">
									{data.size}
								</StyledTableCell>
								<StyledTableCell align="right">
									{data.language}
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
