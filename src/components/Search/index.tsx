import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';

import {TSearch} from '../../types';

const Search = ({onSearch}: TSearch) => {
  const [searchTerm, setSearchTerm] = useState('');
  let timerId: NodeJS.Timeout | null = null;

  const handleSearch = () => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      onSearch(searchTerm);
    }, 700);
  };

  return (
    <TextInput
      label="Search by name..."
      value={searchTerm}
      onChangeText={text => setSearchTerm(text)}
      right={
        <TextInput.Icon
          icon={require('../../../assets/icons/account-search-outline.png')}
          onPress={handleSearch}
        />
      }
    />
  );
};

export default Search;
