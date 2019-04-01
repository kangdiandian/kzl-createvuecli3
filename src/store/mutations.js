import * as Types from './types';
import { copy } from '../utils/stringUtils';

export default {
  [Types.SET_PAGE_TITLE](state, payload = '') {
    console.log(state);
    const { route = {} } = copy(state);
    const { title = '' } = payload;
    if (title) {
      if (route.meta) {
        route.meta.title = title;
      }
      state.route = route;
    }
  },
};
