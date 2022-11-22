module.exports = {
    apps: [
        {
            name: 'waterpark-api-prod',
            script: './dist/index.js',
            env: {
                PORT: 4001,
                MONGO_URI:
                    'mongodb+srv://water:1234@cluster0.aa3kc.mongodb.net/PRODUCTION?retryWrites=true&w=majority',
                JWT_SECRET: 'waterpark',
            },
        },
    ],
};
