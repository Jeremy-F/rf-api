'use strict';

module.exports = function(Result) {
  Result.test = (callback) => {
    Result.dataSource.connector.
      query('SELECT MIN(absolutepower) FROM Results', null
        , (errors, res) => {
          callback(null, res);
        }
      );
  };
  Result.remoteMethod('test',
    {
      http: {
        path: '/test',
        verb: 'get',
      },
      returns: {
        arg: 'result',
        type: 'object',
      },
    }
  );
};
