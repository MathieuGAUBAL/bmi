import React, { useEffect, useState } from 'react';
import './App.css';
import Input from './components/Input';
import InputUserText from './components/InputUserText';
import MainPanel from './components/panels/MainPanel';
import MainSelectionsLinks from './components/reunionsLinks/MainSelectionsLinks';
import LoadingPage from './components/_shared/LoadingPage';

function App() {
  const [datasReunion, setDataReunion] = useState([])
  const [datasCourse, setDataCourse] = useState([])
  const [isLoading, setIsloading] = useState(false)
  const [input, setInput] = useState("")
  const [addHorseName, setAddHorseName] = useState(false)
  const [addDriverName, setAddDriverName] = useState(false)

  useEffect(() => {
    const datas = [
      {
        "date": "2021-11-08",
        "ref": "R6",
        "name": "SANTIAGO ",
        "urls": [
          "https://www.zeturf.fr/fr/course/2021-11-08/R6C5-santiago-prix-polo-opuesto/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R6C6-santiago-prix-princess-valentina/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R6C7-santiago-prix-puerto-romeral/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R6C1-santiago-prix-palino/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R6C2-santiago-prix-predator/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R6C3-santiago-prix-peblito/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R6C4-santiago-prix-playa-virtuosa/turf"
        ]
      },
      {
        "date": "2021-11-08",
        "ref": "R9",
        "name": "DAYTON RACEWAY ",
        "urls": [
          "https://www.zeturf.fr/fr/course/2021-11-08/R9C8-dayton-raceway-race-8/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R9C9-dayton-raceway-race-9/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R9C10-dayton-raceway-race-10/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R9C11-dayton-raceway-race-11/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R9C12-dayton-raceway-race-12/turf"
        ]
      },
      {
        "date": "2021-11-08",
        "ref": "R1",
        "name": "VINCENNES ",
        "urls": [
          "https://www.zeturf.fr/fr/course/2021-11-08/R1C1-vincennes-prix-d-arcachon/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R1C2-vincennes-prix-de-morlaix/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R1C3-vincennes-prix-d-angers/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R1C4-vincennes-prix-de-castelsarrasin/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R1C5-vincennes-prix-de-bacqueville/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R1C6-vincennes-prix-d-amiens/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R1C7-vincennes-prix-reynolds/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R1C8-vincennes-prix-de-merignac/turf"
        ]
      },
      {
        "date": "2021-11-08",
        "ref": "R2",
        "name": "MUNICH-DAGLFING ",
        "urls": [
          "https://www.zeturf.fr/fr/course/2021-11-08/R2C1-munich-daglfing-trotto-de-auftaktrennen/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R2C2-munich-daglfing-preis-des-breeders-crown-siegers-days-of-thunder/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R2C3-munich-daglfing-preis-von-wettstar-de/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R2C4-munich-daglfing-preis-der-breeders-crown-siegerin-mylie-scott/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R2C5-munich-daglfing-auf-wiedersehen-am-29-11-2021-rennen/turf"
        ]
      },
      {
        "date": "2021-11-08",
        "ref": "R3",
        "name": "LYON PARILLY ",
        "urls": [
          "https://www.zeturf.fr/fr/course/2021-11-08/R3C1-lyon-parilly-prix-des-chrysanthemes/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R3C2-lyon-parilly-prix-vintech/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R3C3-lyon-parilly-prix-baguenault-de-puchesse/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R3C4-lyon-parilly-prix-calderon/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R3C5-lyon-parilly-prix-du-grand-camp-atlantic/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R3C6-lyon-parilly-prix-de-bellecour/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R3C7-lyon-parilly-prix-de-province/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R3C8-lyon-parilly-handicap-de-lyon/turf"
        ]
      },
      {
        "date": "2021-11-08",
        "ref": "R4",
        "name": "MARSEILLE VIVAUX ",
        "urls": [
          "https://www.zeturf.fr/fr/course/2021-11-08/R4C1-marseille-vivaux-prix-de-redon/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R4C2-marseille-vivaux-prix-des-saintes-maries/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R4C3-marseille-vivaux-prix-de-la-provence/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R4C4-marseille-vivaux-prix-du-comite-regional-du-trot/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R4C5-marseille-vivaux-prix-koenigsberg/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R4C6-marseille-vivaux-prix-de-la-camargue/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R4C7-marseille-vivaux-prix-des-gardians/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R4C8-marseille-vivaux-prix-de-montolivet/turf"
        ]
      },
      {
        "date": "2021-11-08",
        "ref": "R5",
        "name": "SON PARDO ",
        "urls": [
          "https://www.zeturf.fr/fr/course/2021-11-08/R5C1-son-pardo-premi-guiem-coll/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R5C2-son-pardo-memorial-bartolome-estelrich/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R5C3-son-pardo-premi-ben-hur/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R5C4-son-pardo-premi-campio-de-campions/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R5C5-son-pardo-premi-juliano-de-font/turf"
        ]
      },
      {
        "date": "2021-11-08",
        "ref": "R7",
        "name": "GREYVILLE ",
        "urls": [
          "https://www.zeturf.fr/fr/course/2021-11-08/R7C1-greyville-prix-download-the-race-card-online-www-goldcircle-co-za-maiden-plate/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R7C2-greyville-prix-mobile-betting-visit-www-trackandball-co-za-conditional-novice/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R7C3-greyville-prix-all-to-come-maiden-plate/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R7C4-greyville-prix-off-the-rails-mr-66-handicap/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R7C5-greyville-prix-gold-circle-racing-youtube-channel-fm-79-handicap/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R7C6-greyville-prix-soccer-any15-mr-74-divided-handicap/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R7C7-greyville-prix-online-form-guide-www-gallop-co-za-mr-86-divided-handicap/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R7C8-greyville-prix-hollywoodbets-bright-future-mr-75-divided-handicap/turf"
        ]
      },
      {
        "date": "2021-11-08",
        "ref": "R8",
        "name": "FARJESTAD ",
        "urls": [
          "https://www.zeturf.fr/fr/course/2021-11-08/R8C4-farjestad-lopp-4/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R8C5-farjestad-prix-montelopp/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R8C6-farjestad-prix-kmab-s-stoserie-omgang-12/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R8C7-farjestad-prix-b-tranarlopp-k150-spartrappa/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R8C8-farjestad-prix-course-8/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R8C9-farjestad-prix-svenskt-travsports-unghastserie-fyraaringslopp-ston/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R8C10-farjestad-lopp-10/turf",
          "https://www.zeturf.fr/fr/course/2021-11-08/R8C11-farjestad-lopp-11/turf"
        ]
      }
    ]

    setDataReunion(datas);
  }, [datasCourse])

  useEffect(() => {
    if (isLoading) {
      setDataCourse([])
      setInput("")
      setAddHorseName(false)
      setAddDriverName(false)
    }
  }, [isLoading])


  const getDatasReunions = (datas) => {
    //setDataReunion(datas);
  }

  const getDatascourse = (datas) => {
    setDataCourse([datas]);
  }

  const isLoadingData = (bool) => {
    setIsloading(bool);
  }

  console.log('coucou');
  return (
    <div className="App">
      {isLoading && <LoadingPage />}
      <Input getDatasReunions={getDatasReunions} isLoadingData={isLoadingData} />
      {!isLoading && <MainSelectionsLinks datasReunion={datasReunion} isLoadingData={isLoadingData} getDatascourse={getDatascourse} />}
      <button type='button' onClick={() => setAddHorseName(!addHorseName)}>cheval</button>
      <button type='button' onClick={() => setAddDriverName(!addDriverName)}>jockey</button>
      {datasCourse.length !== 0 && <InputUserText setInput={setInput} />}
      {datasCourse.length !== 0 && <MainPanel datasCourse={datasCourse} addHorseName={addHorseName} addDriverName={addDriverName} input={input} />}
    </div>
  );
}

export default App;
