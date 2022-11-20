module.exports = {
    apps: [
        {
            name: 'water-park-api-dev',
            script: './dist/index.js',
            env_development: {
                NODE_ENV: 'development',
                PORT: 4001,
                MONGO_URI:
                    'mongodb+srv://water:1234@cluster0.aa3kc.mongodb.net/DEV?retryWrites=true&w=majority',
                JWT_SECRET: waterpark,
            },
            env_uat: {
                NODE_ENV: 'uat',
            },
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],
};
