import { Box, Typography, Avatar, makeStyles } from '@material-ui/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
// relative time pega o horario do comoutador
dayjs.extend(relativeTime);

const useStyles = makeStyles(() => ({
  box: {
    width: 300,
    margin: 0,
    padding: 0,
  },
  img: {
    width: 300,
  },
  // caption: {
  //   fontWeight: 500,
  //   display: '-webkit-box',
  //   '-webkit-line-clamp': 2,
  //   'webkit-box-orient': 'vertical',
  //   overflow: 'hidden',
  // },
}));
export default function VideoCard({ item }) {
  const classes = useStyles();
  return (
    <Link href={`/Video${item.id}`}>
      <Box className={classes.box}>
        <img alt={item.authorName} src={item.thumb} className={classes.img} />
        <Box display="flex" mt="1">
          <Box>
            <Avatar alt={item.authorName} src={item.authorAvatar} />
          </Box>
          <Box>
            {/* Titulo do video */}
            <Typography
              className
              // ={classes.caption}
              gutterBottom
              variant="body1"
              color="textPrimary"
            >
              {item.title}
            </Typography>
            {/* auto, nome do canal */}
            <Typography display="block" variant="body2" color="textSecondary">
              {item.authorName}
            </Typography>
            <Typography
              display="block"
              variant="body2"
              color="textSecondary"
            >{`${item.views} visualizações • ${dayjs(
              item.updatedAt,
            ).fromNow()}`}</Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
