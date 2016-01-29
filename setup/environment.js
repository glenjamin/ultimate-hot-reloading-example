export const port = process.env.PORT || 3000;

export const env = process.env.NODE_ENV || 'development';

export const googleAnalyticsId = (env === 'development' ? 'xx-xxxxxxxx-x' : 'xx-xxxxxxxx-x');
