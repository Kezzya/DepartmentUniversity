import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundImage: `url(/images/bgDefault.svg)`,
    border: `1px solid black`,
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
    "09.03.01",
    `Информатика и вычислительная техника, направленность (профиль) "Вычислительные машины, комплексы, системы и сети"`,
    "бакалавр",
    "очная"
  ),
  createData(
    2,
    "09.03.01",
    `Информатика и вычислительная техника, направленность (профиль) "Информационные системы в цифровой экономике"`,
    "бакалавр",
    "очная"
  ),
  createData(
    3,
    "09.03.02",
    `Информационные системы и технологии, направленность (профиль) "Информационные технологии в бизнесе"`,
    "бакалавр",
    "очная"
  ),
  createData(
    4,
    "09.03.01",
    `Информатика и вычислительная техника, направленность (профиль) "Вычислительные машины, комплексы, системы и сети"`,
    "бакалавр",
    "заочная"
  ),
];

export default function BachelorTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">№</StyledTableCell>
            <StyledTableCell>Шифр специальности</StyledTableCell>
            <StyledTableCell align="right">
              Наименование специальности
            </StyledTableCell>
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
