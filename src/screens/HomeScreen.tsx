import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Button} from 'react-native-paper';

import Pagination from '../components/Pagination';
import CharacterList from '../components/CharacterList';
import Search from '../components/Search';
import FavoriteCounter from '../components/FavoriteCounter';

import {useSelector} from 'react-redux';
import {RootState} from '../store/root-reducer';
import {removeAllFavorite} from '../store/slices/charactersSlice';
import {setCurrentPage} from '../store/slices/paginationSlice';
import {useAppDispatch} from '../store/hooks';

import {fetchCharacters} from '../actions/characters';

import Logo from '../../assets/icons/logo.svg';

const HomeScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();
  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage,
  );
  const totalCountOfCharacters = useSelector(
    (state: RootState) => state.pagination.totalCount,
  );
  const characters = useSelector(
    (state: RootState) => state.characters.characters,
  );

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
    dispatch(fetchCharacters({page, searchTerm: ''}));
  };

  const handleSearch = (searchTerm: string) => {
    dispatch(setCurrentPage(1));
    dispatch(fetchCharacters({page: 1, searchTerm}));
  };

  const handleRemoveAllFavorites = () => {
    dispatch(removeAllFavorite());
  };

  useEffect(() => {
    dispatch(fetchCharacters({page: currentPage, searchTerm: ''})).then(() => {
      setLoading(false);
    });
  }, [dispatch, currentPage]);

  const imageBackground = {
    uri: 'https://i.pinimg.com/564x/a0/c2/d1/a0c2d1053035a5ca6cfa6c427e62c0f8.jpg',
  };

  return (
    <ImageBackground
      source={imageBackground}
      style={styles.backgroundImage}
      imageStyle={styles.backgroundImageStyle}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Star Wars Characters</Text>
        <View style={styles.favoriteWrapper}>
          <View style={styles.favoriteContainer}>
            <View style={styles.counters}>
              <FavoriteCounter gender={'Male'} />
              <FavoriteCounter gender={'Female'} />
              <FavoriteCounter gender={'Other'} />
            </View>
            <View style={styles.logoAndSearch}>
              <Logo />
              <Button
                mode="contained"
                onPress={handleRemoveAllFavorites}
                style={styles.clearFavoritesButton}
                labelStyle={styles.clearFavoritesButtonText}>
                Clear Favorites
              </Button>
            </View>
          </View>
          <Search onSearch={handleSearch} />
        </View>

        {loading ? (
          <ActivityIndicator
            size="large"
            color="#6750a4"
            style={styles.activityIndicator}
          />
        ) : (
          <CharacterList characters={characters} />
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={9}
          totalItems={totalCountOfCharacters}
          itemsPerPage={10}
          onPageChange={handlePageChange}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  backgroundImageStyle: {
    opacity: 0.9,
  },
  title: {
    textAlign: 'center',
    padding: 16,
    color: '#8125c5',
    fontFamily: 'StarJediRounded',
    fontSize: 24,
    textShadowColor: 'rgb(141,89,187)',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 20,
  },
  favoriteWrapper: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    gap: 10,
    marginHorizontal: 16,
  },
  favoriteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  counters: {
    flexDirection: 'column',
    gap: 10,
  },
  logoAndSearch: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearFavoritesButton: {
    marginTop: 10,
  },
  clearFavoritesButtonText: {
    color: 'white',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
