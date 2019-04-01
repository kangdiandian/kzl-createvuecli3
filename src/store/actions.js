import * as Types from './types';

export default {
  setPageTitle({ commit, state }, payload = '') {
    commit({
      type: Types.SET_PAGE_TITLE,
      title: payload,
    });
  },
};
