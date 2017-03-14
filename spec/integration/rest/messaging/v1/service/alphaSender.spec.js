'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../holodeck');
var Request = require('../../../../../../lib/http/request');
var Response = require('../../../../../../lib/http/response');
var RestException = require('../../../../../../lib/base/RestException');
var Twilio = require('../../../../../../lib');


var client;
var holodeck;

describe('AlphaSender', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var opts = {
        alphaSender: 'alphaSender'
      };
      var promise = client.messaging.v1.services('MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                       .alphaSenders.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://messaging.twilio.com/v1/Services/<%= serviceSid %>/AlphaSenders')(solution);

      var values = {
        AlphaSender: 'alphaSender',
      };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'sid': 'AIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:12:31Z',
          'date_updated': '2015-07-30T20:12:33Z',
          'alpha_sender': 'Twilio',
          'capabilities': [],
          'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AlphaSenders/AIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var opts = {
        alphaSender: 'alphaSender'
      };
      var promise = client.messaging.v1.services('MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                       .alphaSenders.create(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.messaging.v1.services('MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                       .alphaSenders.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://messaging.twilio.com/v1/Services/<%= serviceSid %>/AlphaSenders')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AlphaSenders?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'alpha_senders',
              'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AlphaSenders?PageSize=50&Page=0'
          },
          'alpha_senders': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'AIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:12:31Z',
                  'date_updated': '2015-07-30T20:12:33Z',
                  'alpha_sender': 'Twilio',
                  'capabilities': [],
                  'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AlphaSenders/AIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.messaging.v1.services('MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                       .alphaSenders.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.messaging.v1.services('MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                       .alphaSenders('AIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'AIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://messaging.twilio.com/v1/Services/<%= serviceSid %>/AlphaSenders/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'sid': 'AIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:12:31Z',
          'date_updated': '2015-07-30T20:12:33Z',
          'alpha_sender': 'Twilio',
          'capabilities': [],
          'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AlphaSenders/AIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.messaging.v1.services('MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                       .alphaSenders('AIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid remove request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.messaging.v1.services('MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                       .alphaSenders('AIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'AIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://messaging.twilio.com/v1/Services/<%= serviceSid %>/AlphaSenders/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function() {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.messaging.v1.services('MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                       .alphaSenders('AIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});
