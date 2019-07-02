import { createMuiTheme } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';

export default createMuiTheme({
  palette: {
    primary: grey,
    secondary: red // Indigo is probably a good match with pink
  }
});
