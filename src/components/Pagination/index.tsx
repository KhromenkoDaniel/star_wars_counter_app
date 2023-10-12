import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {TPagination} from '../../types';

const Pagination: React.FC<TPagination> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}) => {
  const minNumberOfItems = (currentPage - 1) * itemsPerPage + 1;
  const maxNumberOfItems = Math.min(currentPage * itemsPerPage, totalItems);
  const isNextButtonDisabled = currentPage === totalPages;

  const [isChangingPage, setIsChangingPage] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isChangingPage) {
      timeoutId = setTimeout(() => {
        setIsChangingPage(false);
      }, 500);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isChangingPage]);

  const handlePageChange = (newPage: number) => {
    if (!isChangingPage) {
      setIsChangingPage(true);
      onPageChange(newPage);
    }
  };

  return (
    <View
      style={[
        styles.paginationContainer,
        Platform.OS === 'android' && styles.paginationContainerAndroid,
      ]}>
      <TouchableOpacity
        onPress={() => handlePageChange(currentPage - 1)}
        style={styles.paginationButton}
        disabled={currentPage === 1}>
        <Text style={styles.paginationText}>&lt;</Text>
      </TouchableOpacity>
      <Text style={styles.paginationText}>
        {minNumberOfItems}-{maxNumberOfItems} of {totalItems}
      </Text>
      <TouchableOpacity
        onPress={() => handlePageChange(currentPage + 1)}
        style={styles.paginationButton}
        disabled={isNextButtonDisabled}>
        <Text style={styles.paginationText}>&gt;</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationContainerAndroid: {
    marginBottom: 16,
  },
  paginationButton: {
    marginHorizontal: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#6750A4FF',
    borderRadius: 5,
  },
  paginationText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Pagination;
