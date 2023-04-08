import {ADD_TO_FAVORITE} from '../../types';

export const saveToFavorite = (payload: Home.ResponseSubMenu) => ({
  type: ADD_TO_FAVORITE,
  payload,
});
