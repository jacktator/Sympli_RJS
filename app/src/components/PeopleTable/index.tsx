import * as React from 'react';
import {
  Button,
  Hidden,
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
import {PATH_PEOPLE} from "../../utils/constants";
import {Link} from "react-router-dom";

export interface PeopleTableProps {
  people: Person[];
  count: number;
  page: number;
  handleChangePage: (newPage: number) => void;
}

export const PeopleTable = ({people, page, count, handleChangePage}: PeopleTableProps) => {

  const offset = (page - 1) * people.length;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell size={"small"}>Character</TableCell>
            <TableCell size={"small"} align="right">Height</TableCell>
            <Hidden mdDown>
              <TableCell size={"small"} align="right">Mass</TableCell>
            </Hidden>
            <TableCell size={"small"} align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map((person, i) => {
            const index = offset + (i + 1);
            return (
              <TableRow key={person.name}>
                <TableCell component="th" scope="row" size={"small"}>
                  {person.name}
                </TableCell>
                <TableCell align="right" size={"small"}>{person.height}</TableCell>
                <Hidden mdDown>
                  <TableCell align="right" size={"small"}>{person.mass}</TableCell>
                </Hidden>
                <TableCell align="right" size={"small"}>
                  <Button color="primary" component={Link}
                          to={`${PATH_PEOPLE}/${index}`}>
                    View
                  </Button>
                </TableCell>
              </TableRow>
            )
          })}
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
                inputProps: {'aria-label': 'rows per page'},
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