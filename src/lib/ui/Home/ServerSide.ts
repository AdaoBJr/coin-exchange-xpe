import { GetServerSideProps } from 'next';
import { useAPICoin } from 'services/infra';

export const getServerSideProps: GetServerSideProps = async () => {
  const { getCoinsByPage } = useAPICoin();
  const data = await getCoinsByPage({ itemsByPage: 5, pageIndex: 1 });

  return {
    props: { data },
  };
};
