import React from 'react';
import { Map1 } from "../../components/Map/Map1";
import { Map2 } from "../../components/Map/Map2";
import { Map3 } from "../../components/Map/Map3";
import { FeedbackCarousel } from "../../components/FeedbackCarousel/FeedbackCarousel";
import { FilesUpload } from "../../components/FilesUpload/FilesUpload";

const HomePage = () => {
  return (
  <>
    <div>
      <Map1 /> {/* Базова карта (Leaflet) з точковими координатами центрів необхідних країн (х, y) (ресурс restcountries API) для маркерів */}
      <Map2 /> {/* + поверх шар (стилізується) GeoJSON з завантаженим даними json - координатами полігонів усіх країн світу (без маркерів)*/}
      <Map3 /> {/* + поверх шар (стилізується) GeoJSON з завантаженим даними json (ресурс Natural Earth) - координатами полігонів материків (без кордонів) */}      
    </div>
    <FeedbackCarousel />
    <FilesUpload />
  </>
  );
};

export default HomePage;