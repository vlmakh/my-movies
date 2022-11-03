// import PropTypes from 'prop-types';
// import css from './MovieItem.module.css';
import { Box } from 'components/Box/Box';
// import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from 'services/api';

export const Cast = () => {
  const params = useParams();
  console.log(params);

  fetchCastById(params.movieId).then(data => {
    console.log(data);
  });

  return <></>;
};
