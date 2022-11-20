module.exports = {
    apps: [
        {
            name: 'water-park-api-dev',
            script: './dist/index.js',
            env: {
                NODE_ENV: 'development',
            },
            env_development: {
                NODE_ENV: 'development',
                PORT: 4001,
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
