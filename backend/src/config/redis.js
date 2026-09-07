const { createClient } = require('redis');

const redisClient = createClient({
   
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'ultrapure-ultrasleek-turbogentle-65749.db.redis.io',
        port: 16827
    }
});

module.exports = redisClient;