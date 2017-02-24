
const path = require('path');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";
const CACHE_PATH = path.join(__dirname, './public/cache');

module.exports = {
	HOST: HOST,
	PORT: PORT,
	CACHE_PATH: CACHE_PATH
};