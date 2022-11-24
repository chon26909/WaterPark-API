module.exports = {
    apps: [
        {
            name: 'waterpark-api-uat',
            script: './dist/index.js',
            env_uat: {
                NODE_ENV: 'uat',
                PORT: 4003,
                MONGO_URI:
                    'mongodb+srv://water:1234@cluster0.aa3kc.mongodb.net/UAT?retryWrites=true&w=majority',
                JWT_SECRET: 'waterpark',
            },
        },
    ],
};
