import { Box, Grid } from '@material-ui/core';
import Layout from '../components/Layout/index';
import VideoCard from '../components/VideoCard';

function Home({ data }) {
  return (
    <Layout title="YouTube">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item.id} item xl={4} lg={4} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}
export async function getStaticProps() {
  const data = [
    {
      id: 1,
      title: 'Expressões  regulares em Java Script',
      authorId: 1,
      authorName: 'Otavio Miranda',
      authorAvatar:
        'https://yt3.ggpht.com/ytc/AKedOLQroUHj2LHtm4ffqcaFUn_ye0GeBAwjSSx-9wG9HA=s68-c-k-c0x00ffffff-no-rj',
      views: 100000000,
      thumb:
        'https://i.ytimg.com/vi/f6uxgExpXkg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBKPtUVnd9yplOJKCpVMbIAJdSGA',
      videoUrl: 'https://www.youtube.com/watch?v=yudX5OuTxPg',
      updateAt: new Date(),
    },
    {
      id: 2,
      title: 'GOD OF WAR RAGNAROK: 5 CURIOSIDADES Sobre o Game',
      authorId: 2,
      authorName: 'Meu Canal de Games',
      authorAvatar:
        'https://yt3.ggpht.com/ytc/AKedOLRrXx2vy8uviZyvjXMzR22OEHENh-eKetJbHCg64w=s68-c-k-c0x00ffffff-no-rj',
      views: 3000,
      thumb:
        'https://i.ytimg.com/vi/jI9LGuKlDQ0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB30gNOsKxDBw26340ewYKF7uKrsQ',
      videoUrl: 'https://www.youtube.com/watch?v=jI9LGuKlDQ0',
      updateAt: new Date(),
    },
    {
      id: 3,
      title: 'Chibi Titans 2 - The Wumbling | Attack On Titan Animation',
      authorId: 3,
      authorName: 'Poogusubi',
      authorAvatar:
        'https://i.ytimg.com/vi/iRCwQI2tgMI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-rLMg8qa4oZV9fFbdHeU2lpUvVg',
      views: 222.811,
      thumb:
        'https://i.ytimg.com/vi/iRCwQI2tgMI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-rLMg8qa4oZV9fFbdHeU2lpUvVg',
      videoUrl: 'https://www.youtube.com/watch?v=-SD9bvM0KcA',
      updateAt: new Date(),
    },
    {
      id: 4,
      title:
        'ISSHIKI INVADE KONOHA! O SEGUNDO ROUND COMEÇA - ANÁLISE BORUTO EP. 215 de Ei Nerd há 3 horas 8 minutos e 4 segundos 54 178 visualizações',
      authorId: 4,
      authorName: 'Ei Nerd',
      authorAvatar:
        'https://yt3.ggpht.com/ytc/AKedOLSQjvFCzhSxTGCRq-PSgfi7qco5iafKNs6IHp_NUA=s68-c-k-c0x00ffffff-no-rj',
      views: 54.811,
      thumb:
        'https://i.ytimg.com/vi/MMS0KqxFfxQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDY3oDXV4Wbd83FwM44i5yuv__qWA',
      videoUrl: 'https://www.youtube.com/watch?v=-SD9bvM0KcA',
      updateAt: new Date(),
    },
    {
      id: 5,
      title: 'Bully Maguire destroys Dominic Toretto',
      authorId: 5,
      authorName: 'TOBEY VERSE',
      authorAvatar:
        'https://yt3.ggpht.com/ytc/AKedOLS8OzYetqtxxOTHuZY7T0-8QSxwoD9O4zduG-k7=s68-c-k-c0x00ffffff-no-rj',
      views: 222.811,
      thumb:
        'https://i.ytimg.com/vi/4XLlS_RLqXk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2xkl25myjGJZtTATDRgMQ55iiw',
      videoUrl: 'https://www.youtube.com/watch?v=-SD9bvM0KcA',
      updateAt: new Date(),
    },
    {
      id: 6,
      title: 'Mortal Kombat Legends - Battle of the Realms - Trailer Dublado',
      authorId: 6,
      authorName: 'Warner Play',
      authorAvatar:
        'https://yt3.ggpht.com/ytc/AKedOLTgaJcLo7qLL5MHWG_u_Kyu30ZvD59ohnDCPe8QwA=s48-c-k-c0x00ffffff-no-rj',
      views: 61.811,
      thumb:
        'https://i.ytimg.com/vi/-H7BtGuxEKE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArb8w8bwB00v7k6USRtnAnU6fJDg',
      videoUrl: 'https://www.youtube.com/watch?v=-SD9bvM0KcA',
      updateAt: new Date(),
    },
  ];

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}
// fazer descerialização, converter

export default Home;
