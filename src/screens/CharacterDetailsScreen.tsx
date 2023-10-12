import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Card} from 'react-native-paper';

import {useNavigation, useRoute} from '@react-navigation/native';

import TextInfo from '../components/TextInfo';

import {TCharacter, TCharacterDetailsRouteProp} from '../types';

function CharacterDetailsScreen(): JSX.Element {
  const route = useRoute<TCharacterDetailsRouteProp>();
  const navigation = useNavigation();

  const character: TCharacter = route.params.character;

  useEffect(() => {
    const title = character.name || 'Character Details';
    navigation.setOptions({
      title,
      headerStyle: {
        backgroundColor: '#6750A4FF',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontFamily: 'StarJediRounded',
      },
      headerTitleAlign: 'center',
    });
  }, [character, navigation]);

  const genderImage =
    character.gender === 'male'
      ? require('../../assets/icons/maleGender.png')
      : character.gender === 'female'
      ? require('../../assets/icons/femaleGender.png')
      : require('../../assets/icons/otherGender.png');

  return (
    <View>
      <Card style={styles.container}>
        <Card.Content>
          <View style={styles.imageContainer}>
            <Image source={genderImage} style={styles.image} />
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.column}>
              <TextInfo label="Sex" data={character.gender} />
              <TextInfo label="Height" data={character.height} />
              <TextInfo label="Hair Color" data={character.hair_color} />
            </View>
            <View style={styles.column}>
              <TextInfo label="Birth Year" data={character.birth_year} />
              <TextInfo label="Eye Color" data={character.eye_color} />
              <TextInfo label="Mass" data={character.mass} />
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#6750A4FF',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    margin: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    padding: 10,
  },
});

export default CharacterDetailsScreen;
