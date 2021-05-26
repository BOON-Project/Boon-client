import useStyles from "./styles";
import { TextField, Box, Typography, Grid } from "@material-ui/core";

export default function Test() {
  const classes = useStyles();

  return (
    <body>
      <main className={classes.scroll}>
        <section className={classes.section}>
          <TextField>hello</TextField>
        </section>
        <section className={classes.section}>
          <h2>Section 2</h2>
        </section>
        <section className={classes.section}>
          <h2>Section 3</h2>
        </section>
        <section className={classes.section}>
          <h2>Section 4</h2>
        </section>
      </main>
    </body>
  );
}
