var Proto = require('uberproto');
var _ = require('lodash');

var services = {
  memory: require('./memory'),
  mongodb: require('./mongodb')
};

exports = module.exports = {};
_.each(services, function(Service, name) {
	exports[name] = function(options, extend) {
        if ( typeof extend === 'object' ){
            return Proto.create.call(Service.extend(extend), options);
        }
        else{
            return Proto.create.call(Service, options);
        }
	};

	exports[name].Service = Service;
});
