import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {formatMoney} from '../../utils';

export type PropsDataModifier = {
  item: Home.ResponseSubMenu;
  numColumn: number;
  onPress: (item: Home.ResponseSubMenu) => void;
};

const Product: React.FC<PropsDataModifier> = props => {
  const {item, numColumn} = props;
  const widthProduct = Dimensions.get('window').width / (numColumn || 3) - 10;
  return (
    <TouchableOpacity
      onPress={() => props.onPress(item)}
      style={styles.containerButton}>
      <View style={{width: widthProduct}}>
        <Image
          style={{
            height: widthProduct,
            width: widthProduct,
            borderRadius: widthProduct / 2,
          }}
          source={{uri: item.product.defaultImageURL}}
          resizeMode="cover"
        />
        <Text style={styles.titleText}>{item.product.name}</Text>
        <Text style={styles.priceText}>
          $ {formatMoney(String(item.product.retailPrice))}{' '}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    marginHorizontal: 5,
    marginBottom: 15,
  },
  titleText: {
    marginTop: 5,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default React.memo(Product);
