import {
  makeStyles,
  Hidden,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Avatar,
  Divider,
  Typography,
  Button,
} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 240,
  },
  desktopDrawer: {
    width: 240,
    top: 56,
    height: 'calc(100% - 64px)',
    borderRight: 'none',
  },
  avatar: {
    cursor: 'pointer',
    width: 24,
    height: 24,
  },
  listItem: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: theme.spacing(3),
  },
  listItemText: {
    fontSize: 14,
  },
}));

const primaryMenu = [
  { id: 1, label: 'Início', path: '/', icon: HomeIcon },
  { id: 2, label: 'Em alta', path: '/trendding', icon: WhatshotIcon },
  {
    id: 3,
    label: 'Inscrições',
    path: '/subscriptions',
    icon: SubscriptionsIcon,
  },
];

const secondaryMenu = [
  { id: 1, label: 'Biblioteca', icon: VideoLibraryIcon },
  { id: 2, label: 'Histórico', icon: HistoryIcon },
];
const terciaryMenu = [
  { id: 1, label: 'Inscrições', icon: YouTubeIcon },
  { id: 2, label: 'Live Server ', icon: LiveTvIcon },
];

function NavBar() {
  const classes = useStyles();

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <List>
        {primaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem key={item.id} button classes={{ root: classes.ListItem }}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {secondaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem key={item.id} button classes={{ root: classes.ListItem }}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      {/* Terceira Parte */}
      <Box mx={4} my={2}>
        <Typography variant="body2">
          Faça login para curtir videos, comentar e se inscrever.
        </Typography>
        <Box mt={2}>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AccountCircleIcon />}
          >
            Fazer Login
          </Button>
        </Box>
      </Box>
      <Divider />
      <List>
        <Box mx={2} my={2}>
          <Typography variant="subtitle1">MAIS VÍDEOS NO YOUTUBE</Typography>
        </Box>

        {terciaryMenu.map((item) => {
          const Icon = item.icon;

          return (
            <ListItem key={item.id} button classes={{ root: classes.ListItem }}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Hidden mdDown>
      <Drawer
        anchor="left"
        classes={{ paper: classes.desktopDrawer }}
        open
        variant="persistent"
      >
        {content}
      </Drawer>
    </Hidden>
  );
}

export default NavBar;
