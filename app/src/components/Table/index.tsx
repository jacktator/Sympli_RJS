import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {Person} from "../../utils/types";

export interface PeopleTableProps {
  people: Person[];
}

export const PeopleTable = ({people}: PeopleTableProps) => {
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
      </Table>
    </TableContainer>
  )
}