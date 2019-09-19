#### Slide

```jsx
import { Card, CardHeader, CardContent, Grid, IconButton, Typography, Slide, FormControlLabel, Switch } from "@material-ui/core";
import CloseIcon from "mdi-material-ui/Close";
import Button from "../../../package/src/components/Button";

function SlideCard() {
  const [checked, setChecked] = React.useState(false);

  function handleChange() {
    setChecked((prev) => !prev);
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Slide direction="down" timeout={200} in={checked} mountOnEnter unmountOnExit>
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
        </Slide>
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

<SlideCard />
```

#### Fade

```jsx
import { Card, CardHeader, CardContent, Grid, IconButton, Typography, Fade, FormControlLabel, Switch } from "@material-ui/core";
import CloseIcon from "mdi-material-ui/Close";
import Button from "../../../package/src/components/Button";

function FadeCard() {
  const [checked, setChecked] = React.useState(false);

  function handleChange() {
    setChecked((prev) => !prev);
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Fade timeout={100} in={checked} mountOnEnter unmountOnExit>
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
        </Fade>
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

<FadeCard />
```