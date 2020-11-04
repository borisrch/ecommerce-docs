import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Box,
  TextField,
  Chip,
  Grid,
  Paper,
} from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2.5em",
    fontWeight: "700",
  },
  textfield: {},
  test: {
    border: "1px solid red",
    padding: "90px",
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb="3rem"
        >
          <Typography variant="h1" className={classes.title}>
            How can we help?
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <TextField
            id="outlined-basic"
            label="Search"
            placeholder="Start typing your question..."
            variant="outlined"
            fullWidth
          />
        </Box>
        <Container maxWidth="md">
          <Box
            display="inline-flex"
            justifyContent="center"
            alignItems="center"
            my="1rem"
          >
            <Box mr="1rem">
              <Typography variant="body2">Suggestions:</Typography>
            </Box>
            <Box mr="1rem">
              <Chip
                label="Clickable Link"
                component="a"
                href="#chip"
                clickable
              />
            </Box>
            <Box mr="1rem">
              <Chip
                label="Clickable Link"
                component="a"
                href="#chip"
                clickable
              />
            </Box>
          </Box>
        </Container>
      </Container>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={6} align="center">
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Home;
