import { apiCoin, AxiosHttpClient } from '../api';

export const useAPICoin = () => {
  const BFFClient = AxiosHttpClient(apiCoin);

  const getCoinsByPage = async ({
    itemsByPage,
    pageIndex,
  }: {
    itemsByPage: number;
    pageIndex: number;
  }) => {
    const res = await BFFClient.request({
      method: 'get',
      url: `?per_page=${itemsByPage}&page=${pageIndex}`,
    });

    return res.body;
  };

  return { getCoinsByPage };
};
