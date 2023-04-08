import React from 'react';
import ModalGlobal from '../../components/ModalGlobal';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {formatMoney} from '../../utils';
import useFavorite from '../../hooks/useFavorite';

const ModalProduct: React.FC<Modal.ModalProduct> = props => {
  const {selectProduct} = props;
  const {checkIsOnFavorite} = useFavorite();
  const onSave = () => {
    if (props.onSaveFavoriteHandle && selectProduct) {
      props.onSaveFavoriteHandle(selectProduct);
    }
  };

  return (
    <ModalGlobal {...props}>
      <View style={styles.containerModal}>
        <Image
          style={{height: 400}}
          source={{uri: selectProduct?.product.defaultImageURL}}
        />
        <View style={styles.mainContainer}>
          <Text style={styles.productNameText}>
            {selectProduct?.product.name}
          </Text>
          <Text style={styles.descriptionText}>
            {selectProduct?.product.description}
          </Text>
          <Text style={styles.priceText}>
            $ {formatMoney(String(selectProduct?.product.retailPrice))}{' '}
          </Text>
        </View>

        <View>
          {checkIsOnFavorite(selectProduct?.id) ? null : (
            <TouchableOpacity onPress={onSave} style={styles.favoriteButton}>
              <Text style={{color: 'white'}}>Add to favorite</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ModalGlobal>
  );
};

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {
    paddingHorizontal: 10,
  },
  productNameText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    marginBottom: 10,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  favoriteButton: {
    backgroundColor: '#06c',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default ModalProduct;
