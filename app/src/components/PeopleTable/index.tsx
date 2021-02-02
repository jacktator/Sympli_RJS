import * as React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow
} from "@material-ui/core";
import {Person} from "../../utils/types";
import {PaginationActions} from "./PaginationActions";

export interface PeopleTableProps {
  people: Person[];
  count: number;
  page: number;
  handleChangePage: (newPage: number) => void;
}

export const PeopleTable = ({people, page, count, handleChangePage}: PeopleTableProps) => {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell size={"small"}>Character</TableCell>
            <TableCell size={"small"} align="right">Height</TableCell>
            <TableCell size={"small"} align="right">Mass</TableCell>
            {/*<TableCell align="right">Films&nbsp;(g)</TableCell>*/}
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map((person) => (
            <TableRow key={person.name}>
              <TableCell component="th" scope="row" size={"small"}>
                {person.name}
              </TableCell>
              <TableCell align="right" size={"small"}>{person.height}</TableCell>
              <TableCell align="right" size={"small"}>{person.mass}</TableCell>
              {/*<TableCell align="right">{row.films}</TableCell>*/}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              colSpan={3}
              count={count}
              rowsPerPage={people.length}
              rowsPerPageOptions={[people.length]}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={(_, newNumber) => handleChangePage(newNumber)}
              ActionsComponent={PaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}