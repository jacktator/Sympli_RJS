import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Person} from "../../utils/types";
import {PersonCardWrapper} from "./index.style";
import {Link} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export interface PersonCardProps {
  person: Person;
}

export const PersonCard = ({person}: PersonCardProps) => {
  return (
    <PersonCardWrapper variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          {person.name}
        </Typography>
        <Typography color="textSecondary">
          {person.gender} -
        </Typography>
        <Typography variant="body2" component="p">
          {person.birth_year}
        </Typography>
      </CardContent>
      <CardActions>
        {
          person.films.map((link, i) => {
            return (
              <Link href={link} target={"_blank"}>
                <Button variant="contained" color={i === 0 ? "primary" : "secondary"} size="small">
                {link}
                </Button>
              </Link>
            )
          })
        }
      </CardActions>
    </PersonCardWrapper>
  );
}