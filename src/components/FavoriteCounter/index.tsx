import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {useSelector} from 'react-redux';
import {RootState} from '../../store/root-reducer';

function FavoriteCounter({gender}: {gender: string}) {
  const favorites = useSelector((state: RootState) => {
    if (gender.toLowerCase() === 'male') {
      return state.characters.maleFavorites;
    } else if (gender.toLowerCase() === 'female') {
      return state.characters.femaleFavorites;
    } else {
      return state.characters.otherFavorites;
    }
  });

  return (
    <Text style={styles.favoriteCounter}>
      {gender} Favorites: {favorites ? favorites.length : 0}
    </Text>
  );
}

export default FavoriteCounter;

const styles = StyleSheet.create({
  favoriteCounter: {
    fontSize: 18,
    color: '#6750A4FF',
  },
});
