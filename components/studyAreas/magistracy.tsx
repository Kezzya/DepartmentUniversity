import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StringMap } from "react-admin";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: `center`,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: `center`,
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

function createData(
  number: number,
  code: string,
  name: string,
  qualification: string,
  studyForm: string
) {
  return { number, code, name, qualification, studyForm };
}

const rows = [
  createData(
    1,
    "09.04.01",
    `Информатика и вычислительная техника. Направленность "Элементы и устройства вычислительной техники и информационных систем"`,
    "магистратура",
    "очная"
  ),
  createData(
    2,
    "09.04.01",
    ` Информатика и вычислительная техника, программа "Киберфизические системы и искусственный интеллект", направленность (профиль) "Облачная и сетевая инфраструктура систем искусственного интеллекта"	`,
    "магистратура",
    "очная с 2022 года"
  ),
  createData(
    3,
    "09.04.02",
    `Информационные системы и технологии, направленность (профиль) "Информационные технологии в науке и производстве"`,
    "магистратура",
    "очная"
  ),
];

export default function MagistracyTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">№</StyledTableCell>
            <StyledTableCell>Шифр специальности</StyledTableCell>
            <StyledTableCell align="right">Наименование</StyledTableCell>
            <StyledTableCell align="right">
              Квалификация (степень) выпускника
            </StyledTableCell>
            <StyledTableCell align="right">Форма обучения</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.code}>
              <StyledTableCell align="right">{row.number}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.code}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">
                {row.qualification}
              </StyledTableCell>
              <StyledTableCell align="right">{row.studyForm}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
