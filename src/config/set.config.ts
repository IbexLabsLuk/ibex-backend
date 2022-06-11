export const setConfig = () => {
  const env = process.env.NODE_ENV;
  if (env === 'prod') {
    return '.env.prod';
  } else {
    return '.env.dev';
  }
};
