import {ADD_TO_FAVORITE} from '../../types';
import {PayloadAction} from '@reduxjs/toolkit';

interface AddressEditReducerProps {
  data: Home.ResponseSubMenu[];
}

const initialState: AddressEditReducerProps = {
  data: [],
};

const FavoriteReducer = (state = initialState, action: PayloadAction<any>) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      let dataResponse = state.data;
      const findIndex = state.data.findIndex(
        data => data.product.id === action.payload.product.id,
      );
      if (findIndex < 0) {
        dataResponse = [...dataResponse, action.payload];
      }
      state = {
        ...state,
        data: dataResponse,
      };
      break;
    default:
      state;
      break;
  }
  return state;
};

export default FavoriteReducer;
