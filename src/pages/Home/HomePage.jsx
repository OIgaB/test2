import { Grid } from 'components/Grid/Grid';
import { Cell } from 'components/Grid/Grid.styled';
import { FeedbackCarousel } from '../../components/FeedbackCarousel/FeedbackCarousel';
import { FilesUpload } from '../../components/FilesUpload/FilesUpload';
import { Map1 } from '../../components/Map/Map1';
import { Map2 } from '../../components/Map/Map2';
import { Map3 } from '../../components/Map/Map3';

const HomePage = () => {
  const data = [
    { title: 'test1' }, // 0
    { title: 'test2' }, // 1
    { title: 'test3' }, // 2
    { title: 'test4' }, // 3
    { title: 'test5' }, // 4
  ];
  const ItemComponent = (props) => <Cell><p>{props.title}</p></Cell>;
  return (
    <>
      <div>
        <Map1 /> {/* Базова карта (Leaflet) з точковими координатами центрів необхідних країн (х, y) (ресурс restcountries API) для маркерів */}
        <Map2 /> {/* + поверх шар (стилізується) GeoJSON з завантаженим даними json - координатами полігонів усіх країн світу (без маркерів)*/}
        <Map3 /> {/* + поверх шар (стилізується) GeoJSON з завантаженим даними json (ресурс Natural Earth) - координатами полігонів материків (без кордонів) */}
      </div>
      <FeedbackCarousel />
      <FilesUpload />
      <Grid
        ItemComponent={ItemComponent}
        column={2}
        data={data}
        row={3}
        $gap={20}
      />
    </>
  );
};

export default HomePage;
