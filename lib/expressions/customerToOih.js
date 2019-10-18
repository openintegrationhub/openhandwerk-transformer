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
      salutation: msg.body.salutation,
      firstname: msg.body.firstname,
      lastname: msg.body.lastname,
      company: msg.body.company,
      website: msg.body.website,
      addresses: {
        street: msg.body.street,
        street_nr: msg.body.street_nr,
        zip: msg.body.zip,
        city: msg.body.city,
        country: msg.body.country
      },
      contactData: [
        {
          value: msg.body.mobile_phone,
          type: 'phone',
          description: 'mobile phone number'
        },
        {
          value: msg.body.phone,
          type: 'phone',
          description: 'phone number'
        },
        {
          value: msg.body.fax,
          type: 'fax',
          description: 'fax number'
        },
        {
          value: msg.body.email,
          type: 'email',
          description: 'email'
        }
      ]
    }
  };

  return expression;
};
