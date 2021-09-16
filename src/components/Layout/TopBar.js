import {
  AppBar,
  Toolbar,
  Paper,
  InputBase,
  IconButton,
  Hidden,
  Button,
  makeStyles,
  Box,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    cursor: 'pointer',
    height: 18,
    marginLeft: theme.spacing(3),
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: 35,
    width: 700,
  },
  input: {
    flex: 1,
  },
}));
function TopBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        {/* BOx 1, icone do menu e logo */}
        <Box display="flex" alignItems="center">
          <MenuIcon />
          <img
            src="/new-youtube-logo.svg"
            alt="YouTube"
            className={classes.logo}
          />
        </Box>
        {/* Box 2 , a div para a barra de busca */}
        <Hidden mdDown>
          <Box>
            <Paper component="form" className={classes.search}>
              <InputBase
                className={classes.input}
                placeholder="Pesquisar"
                inputProps={{ 'aria-label': 'search google map' }}
              />
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Hidden>
        {/* Box 3 icones e buttons */}
        <Box display="flex">
          <IconButton className={classes.icons}>
            <VideoCallIcon />
          </IconButton>
          <IconButton className={classes.icons}>
            <AppsIcon />
          </IconButton>
          <IconButton className={classes.icons}>
            <MoreVertIcon />
          </IconButton>
          <Button
            color="secondary"
            component="a"
            variant="outlined"
            startIcon={<AccountCircleIcon />}
          >
            Fazer Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
