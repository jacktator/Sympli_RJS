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
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Height</TableCell>
            <TableCell align="right">Gender&nbsp;(g)</TableCell>
            <TableCell align="right">Birth Year&nbsp;(g)</TableCell>
            {/*<TableCell align="right">Films&nbsp;(g)</TableCell>*/}
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map((person) => (
            <TableRow key={person.name}>
              <TableCell component="th" scope="row">
                {person.name}
              </TableCell>
              <TableCell align="right">{person.height}</TableCell>
              <TableCell align="right">{person.gender}</TableCell>
              <TableCell align="right">{person.birth_year}</TableCell>
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