```jsx
import { Card, CardHeader, CardContent, Grid, IconButton, Typography, Grow, FormControlLabel, Switch } from "@material-ui/core";
import CloseIcon from "mdi-material-ui/Close";
import Button from "../../../package/src/components/Button";

function GrowCard() {
  const [checked, setChecked] = React.useState(false);

  function handleChange() {
    setChecked((prev) => !prev);
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Grow timeout={180} in={checked} mountOnEnter unmountOnExit style={{ transformOrigin: "center top" }}>
          <Card>
            <CardHeader
              title="Add/remove tags"
              subheader="1022 selected"
              action={
                <IconButton aria-label="close" onClick={() => handleChange()}>
                  <CloseIcon/>
                </IconButton>
              }
            />
            <CardContent>
              <Typography variant="body2">Help text goes here</Typography>
            </CardContent>
          </Card>
        </Grow>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title="All products"
            subheader="1239 products"
          />
          <CardContent>
            <FormControlLabel
              control={<Switch checked={checked} onChange={handleChange} />}
              label="Show Quick Edit card"
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

<GrowCard />
```