#### Slide

```jsx
import { Card, CardHeader, CardContent, IconButton, Typography, Slide, FormControlLabel, Switch } from "@material-ui/core";
import CloseIcon from "mdi-material-ui/Close";
import Button from "../../../package/src/components/Button";

function SlideCard() {
  const [checked, setChecked] = React.useState(false);

  function handleChange() {
    setChecked((prev) => !prev);
  }

  return (
    <div>
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
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
    </div>
  )
}

<SlideCard />
```

#### Fade

```jsx
import { Card, CardHeader, CardContent, IconButton, Typography, Fade, FormControlLabel, Switch } from "@material-ui/core";
import CloseIcon from "mdi-material-ui/Close";
import Button from "../../../package/src/components/Button";

function FadeCard() {
  const [checked, setChecked] = React.useState(false);

  function handleChange() {
    setChecked((prev) => !prev);
  }

  return (
    <div>
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
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
    </div>
  )
}

<FadeCard />
```