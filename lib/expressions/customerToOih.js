
const jsonata = require('jsonata');

module.exports.getExpression = msg => {
  if (Object.keys(msg.body).length === 0 && msg.body.constructor === Object) {
    return msg.body;
  }

  const expression = {
    meta: {
      recordUid: msg.body.meta.recordUid,
      applicationUid: (msg.body.meta.applicationUid!=undefined && msg.body.meta.applicationUid!=null) ? msg.body.meta.applicationUid : 'appUid not set yet',
      iamToken: (msg.body.meta.iamToken!=undefined && msg.body.meta.iamToken!=null) ? msg.body.meta.iamToken : 'iamToken not set yet',
      domainId: 'TO BE ADDED',
      schemaURI: 'TO BE ADDED'
    },

    data: {
      salutation: msg.body.data.salutation,
      firstName: msg.body.data.firstname,
      lastName: msg.body.data.lastname,
      // company: msg.body.data.company,
      website: msg.body.data.website,
      addresses: [{
        street: msg.body.data.street,
        streeNumber: msg.body.data.street_nr,
        zipCode: msg.body.data.zip,
        city: msg.body.data.city,
        country: msg.body.data.country
      }],
      contactData: [
        {
          value: msg.body.data.mobile_phone,
          type: 'phone',
          description: 'mobile phone number'
        },
        {
          value: msg.body.data.phone,
          type: 'phone',
          description: 'phone number'
        },
        {
          value: msg.body.data.fax,
          type: 'fax',
          description: 'fax number'
        },
        {
          value: msg.body.data.email,
          type: 'email',
          description: 'email'
        }
      ]
    }
  };

  return expression;
};
