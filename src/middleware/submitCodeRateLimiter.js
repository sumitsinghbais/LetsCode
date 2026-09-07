const redisClient = require("../config/redis");

const submitCodeRateLimiter = async (req, res, next) => {
    try {
        // userMiddleware runs before this middleware,
        // so req.result contains the logged-in user.
        const userId = req.result._id;

        const redisKey = `submit_cooldown:${userId}`;

        /*
         * SET key value NX EX 10
         *
         * NX -> Set only if the key does NOT already exist
         * EX -> Expire the key after 10 seconds
         *
         * This operation is atomic.
         */
        const result = await redisClient.set(
            redisKey,
            "cooldown_active",
            {
                NX: true,
                EX: 10
            }
        );

        // If result is null, the key already exists.
        if (result === null) {
            return res.status(429).json({
                error: "Please wait 10 seconds before submitting again"
            });
        }

        // User is allowed to submit
        next();
    }
    catch (error) {
        console.error("Rate limiter error:", error);

        return res.status(500).json({
            error: "Internal server error"
        });
    }
};

module.exports = submitCodeRateLimiter;