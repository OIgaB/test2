import GeneralStyles from '../styles/generalStyles';
import Theme from '../theme/Theme';
import { Map1 } from "./Map/Map1";
import { Map2 } from "./Map/Map2";
import { Map3 } from "./Map/Map3";
import { FeedbackCarousel } from './FeedbackCarousel/FeedbackCarousel';
import { FilesUpload } from "./FilesUpload/FilesUpload";


export const App = () => {

  return (
    <>
      <GeneralStyles />
      <Theme>
        <div>
          <div>
            <Map1 /> {/* Базова карта (Leaflet) з точковими координатами центрів необхідних країн (х, y) (ресурс restcountries API) для маркерів */}
            <Map2 /> {/* + поверх шар (стилізується) GeoJSON з завантаженим даними json - координатами полігонів усіх країн світу (без маркерів)*/}
            <Map3 /> {/* + поверх шар (стилізується) GeoJSON з завантаженим даними json (ресурс Natural Earth) - координатами полігонів материків (без кордонів) */}      
          </div>
          <FeedbackCarousel />
          <FilesUpload />
        </div>
      </Theme>
    </>
  );
};
