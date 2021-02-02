import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Person} from "../../utils/types";
import {PersonCardWrapper} from "./index.style";
import {Link} from "@material-ui/core";

export interface PersonCardProps {
  person: Person;
}

export const PersonCard = ({person}: PersonCardProps) => {
  return (
    <PersonCardWrapper variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Star Wars
        </Typography>
        <Typography variant="h5" component="h2">
          {person.name}
        </Typography>
        <Typography color="textSecondary">
          {person.birth_year}
        </Typography>
        <Typography variant="body2" component="p">
          {person.gender}
        </Typography>
      </CardContent>
      {
        person.films.length > 0 &&
        <CardActions>
          {
            person.films.slice(0, 3).map((film, i) => {
              return (
                <Link key={film.title} href={film.link} target={"_blank"}>
                  <Button variant="contained" color={i === 0 ? "primary" : "secondary"} size="small">
                    {film.title}
                  </Button>
                </Link>
              )
            })
          }
        </CardActions>
      }
    </PersonCardWrapper>
  );
}