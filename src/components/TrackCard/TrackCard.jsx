import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './trackCard.scss';

// material ui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Icon } from '@mui/material';

function TrackCard({
  className,
  id,
  name,
  difficulty,
  mountain,
  overall_length,
  positive_elevation,
  img_card,
  liftOff,
}) {
  return (
    <Link
      to={`/track/${id}`}

    >
      <Card className={`trackCard ${className}`} sx={{ display: 'flex', my: 1 }}>
        <CardMedia
          component="img"
          sx={{ width: '40%' }}
          image={img_card}
          alt={name}
        />
        <Box sx={{
          display: 'flex', flexDirection: 'column', width: '100%', p: 1,
        }}
        >

          <Box sx={{
            display: 'flex', justifyContent: 'space-between',
          }}
          >
            <Typography component="h2" variant="body1" fontWeight="bold" textAlign="left">
              {name}
            </Typography>
            <Icon className="fa-solid fa-flag" sx={{ width: 24, height: 24, textAlign: 'left' }} />
          </Box>
          <CardContent
            className="trackCard-content"
            sx={{
              textAlign: 'left',
              p: 0,
              pb: 0,
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Typography className="trackCard-content__detail">
              Massif: {mountain}
            </Typography>
            <Typography className="trackCard-content__detail">
              Difficulté: {difficulty}
            </Typography>
            <Typography className="trackCard-content__detail">
              Orientation décollage: {` ${liftOff.favorableWind}`}
            </Typography>
            <Typography className="trackCard-content__detail">
              Dénivelé positif: {positive_elevation}m
            </Typography>
            <Typography className="trackCard-content__detail">
              Longueur totale : {overall_length}km
            </Typography>
          </CardContent>
        </Box>
      </Card>

    </Link>
  );
}

TrackCard.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  mountain: PropTypes.string.isRequired,
  positive_elevation: PropTypes.number.isRequired,
  overall_length: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  img_card: PropTypes.string.isRequired,
  liftOff: PropTypes.string.isRequired,

};
TrackCard.defaultProps = {
  className: '',

};
export default React.memo(TrackCard);
