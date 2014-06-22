exports = module.exports = function (request, path) {
    return function (body, callback) {
        request
            .del(path + '/skip')
            .end(function (error, res) {
                if (error) return callback(error);
                if (res.status != 200) return callback('unexpected response code: ' + res.status);
                if (!res.body) return callback('no body');

                callback(null, res.body);
            });
    };
};
