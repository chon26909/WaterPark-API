module.exports = {
    apps: [
        {
            name: 'waterpark-api-dev',
            script: './dist/index.js',
            log_date_format: 'YYYY-MM-DD HH:mm Z',
            env_development: {
                NODE_ENV: 'development',
                PORT: 4002,
                MONGO_URI:
                    'mongodb+srv://water:1234@cluster0.aa3kc.mongodb.net/DEV?retryWrites=true&w=majority',
                JWT_SECRET: 'waterpark',
            },
        },
    ],
};
