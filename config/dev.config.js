module.exports = {
    apps: [
        {
            name: 'waterpark-api-dev',
            script: './dist/index.js',
            env_development: {
                PORT: 4002,
                MONGO_URI:
                    'mongodb+srv://water:1234@cluster0.aa3kc.mongodb.net/DEV?retryWrites=true&w=majority',
                JWT_SECRET: 'waterpark',
            },
        },
    ],
};
