import router from '@/router';

const mini = {
  forward(url, query = {}) {
    router.push({
      path: url,
      params: query,
    });
  },
};

export default mini;
