export type ENVs = 'local' | 'dev' | 'prd';

interface PublicEnvironments {
  SERVER_ENV: ENVs;
  URL_API_COIN: string;
}

export const publicEnv: PublicEnvironments = {
  SERVER_ENV: process.env.NEXT_PUBLIC_SERVER_ENV as ENVs,
  URL_API_COIN: process.env.NEXT_PUBLIC_URL_API_COIN as string,
};
