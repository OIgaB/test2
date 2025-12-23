import {
  CampaignPerformanceChart,
  CompletedViewsByDeviceChart,
  DevicePerformanceChart,
  ImpressionsByDayChart,
  TopContentChart,
} from 'components/Charts';
import { Grid } from 'components/Grid/Grid';
import * as S from 'components/Grid/Grid.styled';
import { Map1, Map2, Map3 } from 'components/Map';
import { FeedbackCarousel } from '../../components/FeedbackCarousel/FeedbackCarousel';
import { FilesUpload } from '../../components/FilesUpload/FilesUpload';

const HomePage = () => {
  const data = [
    { Component: CompletedViewsByDeviceChart },
    { Component: TopContentChart },
    { Component: CampaignPerformanceChart },
    { Component: DevicePerformanceChart },
    { Component: ImpressionsByDayChart },
  ];

  const data2 = [
    { title: 'test1' }, // 0
    { title: 'test2' }, // 1
    { title: 'test3' }, // 2
    { title: 'test4' }, // 3
    { title: 'test5' }, // 4
  ];

  const ItemComponent = ({ Component }) => (
    <S.Cell>
      <Component />
    </S.Cell>
  );

  const ItemComponent2 = props => (
    <S.CellColored>
      <p>{props.title}</p>
    </S.CellColored>
  );

  return (
    <>
      <div>
        <Map1 />
        {/* Базова карта (Leaflet) з точковими координатами центрів необхідних країн (х, y) (ресурс restcountries API) для маркерів */}
        <Map2 />
        {/* + поверх шар (стилізується) GeoJSON з завантаженими даними json - координатами полігонів усіх країн світу (без маркерів)*/}
        <Map3 />
        {/* + поверх шар (стилізується) GeoJSON з завантаженими даними json (ресурс Natural Earth) - координатами полігонів материків (без кордонів) */}
      </div>
      <Grid
        ItemComponent={ItemComponent}
        data={data}
        row={3}
        column={2}
        $gap={100}
        $fullWidth
      />
      <FeedbackCarousel />
      <FilesUpload />
      <Grid
        ItemComponent={ItemComponent2}
        data={data2}
        row={3}
        column={2}
        $gap={20}
      />
    </>
  );
};

export default HomePage;
