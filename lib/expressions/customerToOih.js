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
      mobil_phone: msg.body.mobile_phone,
      phone: msg.body.phone,
      fax: msg.body.fax,
      email: msg.body.email,
      website: msg.body.website,
      address: {
        street: msg.body.street,
        street_nr: msg.body.street_nr,
        zip: msg.body.zip,
        city: msg.body.city,
        country: msg.body.country
      },
    }
  };

  return expression;
};
