/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-no-useless-fragment */

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function AdminCreate() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>

        <TextField
          id="outlined-textarea"
          label="Infos"
          placeholder="Vos infos"
          value={value}
          onChange={handleChange}
          multiline
        />

      </div>

    </Box>
  );
}
export default React.memo(AdminCreate);

// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import './adminCreate.scss';
// import {
//   Link, useNavigate, useParams,
// } from 'react-router-dom';
// import {
//   CardMedia, Container, Icon, Box, Button,
// } from '@mui/material';
// import DOMPurify from 'dompurify';
// import { ThemeProvider } from '@emotion/react';
// import customTheme from '../../themes/customTheme';
// import { requestHiking } from '../../requests/hiking';
// import CarouselPhotos from '../CarouselPhotos/CarouselPhotos';
// import Loading from '../Loading/Loading';

// function AdminCreate({ className, ...rest }) {
//   const [hiking, setHiking] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [steps, setSteps] = useState([]);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(async () => {
//     console.log('useEffect');

//     setLoading(true);
//     if (Object.keys(hiking).length === 0) {
//       const response = await requestHiking(id);
//       console.log(response);
//       if (response.status === 200) {
//         setHiking(response.data[0]);
//       }
//       else {
//         console.log(response);
//         navigate('/error');
//       }
//     }
//     if (Object.keys(hiking).length > 0) {
//       if (hiking.key_stage !== null) {
//         setSteps(hiking.key_stage.split('\n'));
//       }
//       setLoading(false);
//     }
//   }, [hiking]);

//   console.log('hiking:', hiking);

//   console.log('render');

//   return (
//     <>
//       <h1>hello</h1>
//       {!loading ? (
//         <div
//           className={`track ${className}`}
//           {...rest}
//         >

//           <Container className="track-container" sx={{ my: 1 }}>
//             <CardMedia
//               className="track-img"
//               component="img"
//               height="140"
//               image={`${hiking.img_card}`}
//               alt="hiking image"
//               title={hiking.name}
//             />
//             <h1 className="track-title"> {hiking.name}</h1>
//             <Box sx={{ display: 'flex', textAlign: 'left', my: 1 }}>
//               <Box sx={{ pr: 2, width: '50%' }}>
//                 <p className="track-info">
//                   Infos techniques:
//                 </p>
//                 <p className="track-info__key">Dénivelé positif:
//                   <span className="track-info__value"> {hiking.positive_elevation}m</span>
//                 </p>
//                 <p className="track-info__key">Dénivelé négatif:
//                   <span className="track-info__value"> {hiking.negative_elevation}m</span>
//                 </p>
//                 <p className="track-info__key">Point haut:
//                   <span className="track-info__value"> {hiking.hight_point}m</span>
//                 </p>
//                 <p className="track-info__key">Point bas:
//                   <span className="track-info__value"> {hiking.low_point}m</span>
//                 </p>
//                 <p className="track-info__key">Carte IGN:
//                   <span className="track-info__value"> {hiking.ign_card_reference}</span>
//                 </p>
//                 <p className="track-info__key">Terrain:
//                   <span className="track-info__value"> {hiking.land_type}</span>
//                 </p>

//               </Box>
//               <Box sx={{ width: '50%', mb: 2 }}>
//                 <Box sx={{
//                   display: 'flex', justifyContent: 'flex-end', alignItems: 'baseline', mb: 2,
//                 }}
//                 >
//                   <Icon className="fa-solid fa-flag" sx={{ width: 24, height: 24, mx: 1 }} />
//                   <Icon className="fa-solid fa-map-location-dot" sx={{ width: 24, height: 24, mx: 1 }} />
//                 </Box>
//                 <p className="track-info__key">Massif:
//                   <span className="track-info__value"> {hiking.mountain}</span>
//                 </p>
//                 <p className="track-info__key">Distance:
//                   <span className="track-info__value"> {hiking.overall_length}km</span>
//                 </p>
//                 <p className="track-info__key">Difficulté:
//                   <span className="track-info__value"> {hiking.difficulty}</span>
//                 </p>
//                 <p className="track-info__key">Point de départ:
//                   <span className="track-info__value">
//                     <a href={hiking.starting_point} alt={hiking.name} target="_blank" rel="noreferrer">
//                       <Icon class="fa-solid fa-flag-checkered" sx={{ width: 24, height: 24, mx: 1 }} />
//                     </a>
//                   </span>
//                 </p>
//               </Box>
//             </Box>
//             <p className="track-resume">Résumé</p>
//             <p className="track-resume__content"> {hiking.resume} </p>

//             <p className="track-steps">Etapes de la randonnée</p>
//             {steps.map((step, index) => <p className="track-steps__content" key={step + index}>{step}</p>)}

//             <p className="track-photos">Photos </p>
//             <CarouselPhotos photos={hiking.photo_hiking} />

//             <div className="track-hiking-map" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(hiking.hiking_plan, { ALLOWED_TAGS: ['iframe'] }) }} />

//             <Box sx={{ display: 'flex', mt: 2, justifyContent: 'space-around' }}>
//               <ThemeProvider theme={customTheme}>
//                 <Link className="track-link" to={`/liftoff/${hiking.liftOff_id}`}>
//                   <Button className="track-button" variant="contained">Décollage</Button>
//                 </Link>
//                 <Link className="track-link" to={`/landing/${hiking.idLandings}`}>
//                   <Button className="track-button" variant="contained">Attérissage</Button>
//                 </Link>
//               </ThemeProvider>
//             </Box>
//           </Container>
//         </div>
//       )
//         : <Loading />}
//     </>
//   );
// }
// AdminCreate.propTypes = {
//   className: PropTypes.string,
// };
// AdminCreate.defaultProps = {
//   className: '',
// };

// export default React.memo(AdminCreate);
