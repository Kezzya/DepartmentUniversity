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
  nameOfBachelor: string,
  nameOfEngineer: string,
  nameOfMagistracy: string,
  year: number
) {
  return { nameOfBachelor, nameOfEngineer, nameOfMagistracy, year };
}

const rows = [
  createData(
    `1. Болдырева Евгения Олеговна`,
    "-",
    "1. Анненков Дмитрий Альбертович",
    2020
  ),
  createData(
    `2. Блох Денис Евгеньевич`,
    " ",
    "2. Асеев Дмитрий Альбертович",
    2020
  ),
  createData(
    `3. Грибов Евгений Алексеевич`,
    "",
    "3. Бочаров Александр Алексеевич",
    2020
  ),
  createData(
    `4. Ковалев Евгений Михайлович`,
    " ",
    "4. Бурцев Олег Александрович",
    2020
  ),
  createData(
    `5. Ламонов Максим Александрович`,
    " ",
    "5. Быканов Никита Геннадьевич",
    2020
  ),
  createData(
    `6. Храпова Наталия Игоревна`,
    " ",
    "6. Кравцов Евгений Анатольевич",
    2020
  ),
  createData(` `, " ", "7. Кузьмина Дарья Сергеевна", 2020),
  createData(` `, " ", "8. Москалевич Максим Юрьевич", 2020),
  createData(` `, " ", "9. Несмачная Людмила Владимировна", 2020),
  createData(` `, " ", "10. Максимова Юлия Олеговна", 2020),
  createData(` `, " ", "11. Подхалдина Анастасия Игоревна", 2020),
  createData(` `, " ", "12. Поляков Сергей Андреевич", 2020),
  createData(` `, " ", "13. Селина Елена Андреевна", 2020),
  createData(` `, " ", "14. Селин Владислав Игоревич", 2020),
  createData(` `, " ", "15. Чаплыгин Виктор Викторович", 2020),
  createData(` `, " ", "16. Чернышев Андрей Александрович", 2020),
];

export default function ExcellentStudentsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Бакалавры</StyledTableCell>
            <StyledTableCell>Инженеры</StyledTableCell>
            <StyledTableCell align="right">Магистры</StyledTableCell>
            <StyledTableCell align="right">Год</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.nameOfBachelor}>
              <StyledTableCell align="right">
                {row.nameOfBachelor}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.nameOfEngineer}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.nameOfMagistracy}
              </StyledTableCell>
              <StyledTableCell align="right">{row.year}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
