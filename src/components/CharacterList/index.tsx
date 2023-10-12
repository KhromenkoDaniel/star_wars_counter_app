import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import CharacterCard from '../CharacterCard';

import {TCharacter, TCharacterList} from '../../types';
import {Card, Title} from 'react-native-paper';
import RedLightSaber from '../../../assets/icons/redLightSaber.svg';
import BlueLightSaber from '../../../assets/icons/blueLightSaber.svg';

const CharacterList: React.FC<TCharacterList> = ({characters}) => {
  const renderItem = ({item}: {item: TCharacter}) => (
    <CharacterCard key={item.url} character={item} />
  );

  return (
    <View style={styles.characterList}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContainer}>
          <RedLightSaber />
          <Title style={styles.cardTitle}>Character List</Title>
          <BlueLightSaber />
        </Card.Content>
      </Card>
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={item => item.url}
        ListEmptyComponent={<Text>No matching characters found.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  characterList: {
    flex: 1,
    borderRadius: 10,
  },
  card: {
    backgroundColor: 'rgb(103,80, 164)',
    margin: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cardTitle: {
    textAlign: 'center',
    color: 'white',
  },
});

export default CharacterList;
