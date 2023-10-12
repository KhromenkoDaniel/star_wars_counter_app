import React, {useEffect, useState} from 'react';
import {Card, Paragraph, Title} from 'react-native-paper';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import Heart from '../../../assets/icons/heart.svg';
import HeartFilled from '../../../assets/icons/heartOutline.svg';

import {useDispatch, useSelector} from 'react-redux';
import {
  addFavoriteByGender,
  removeFavoriteByGender,
} from '../../store/slices/charactersSlice';
import {RootState} from '../../store/root-reducer';
import {AppDispatch} from '../../store/store';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {TCharacterCard} from '../../types';

function CharacterCard({character}: TCharacterCard): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const maleFavorites = useSelector(
    (state: RootState) => state.characters.maleFavorites,
  );
  const femaleFavorites = useSelector(
    (state: RootState) => state.characters.femaleFavorites,
  );
  const otherFavorites = useSelector(
    (state: RootState) => state.characters.otherFavorites,
  );

  useEffect(() => {
    if (
      maleFavorites.some(favCharacter => favCharacter.url === character.url) ||
      femaleFavorites.some(
        favCharacter => favCharacter.url === character.url,
      ) ||
      otherFavorites.some(favCharacter => favCharacter.url === character.url)
    ) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [character.url, maleFavorites, femaleFavorites, otherFavorites]);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      setIsFavorite(false);
      dispatch(removeFavoriteByGender(character));
    } else {
      setIsFavorite(true);
      dispatch(addFavoriteByGender(character));
    }
  };

  const handleCharacterSelect = () => {
    navigation.navigate('CharacterDetails', {
      character,
    });
  };

  return (
    <Card style={styles.cardWrapper}>
      <TouchableOpacity onPress={handleCharacterSelect}>
        <View style={styles.cardContainer}>
          <Card.Content style={styles.cardContent}>
            <Title style={styles.cardText}>{character.name}</Title>
            <Paragraph style={styles.cardText}>
              Gender: {character.gender}
            </Paragraph>
          </Card.Content>
          <Card.Actions style={styles.cardActions}>
            <TouchableOpacity onPress={handleToggleFavorite}>
              {isFavorite ? <Heart /> : <HeartFilled />}
            </TouchableOpacity>
          </Card.Actions>
        </View>
      </TouchableOpacity>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    marginBottom: 10,
    marginHorizontal: 12,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  cardContent: {
    flex: 2,
  },
  cardActions: {
    flex: 1,
  },
  cardText: {
    color: '#6750A4',
  },
});

export default CharacterCard;
