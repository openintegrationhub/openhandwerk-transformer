const jsonata = require('jsonata');

module.exports.getExpression = msg => {
  if (Object.keys(msg.body).length === 0 && msg.body.constructor === Object) {
    return msg.body;
  }

  const expression = {
    oihUid: '',
    oihCreated: '',
    oihLastModified: '',
    oihApplicationRecords: [{
      applicationUid: '',
      recordUid: msg.body.id
    }],
    salutation: msg.body.salutation,
    firstName: msg.body.firstname,
    lastName: msg.body.lastName,
    company: msg.body.company,
    mobil_phone: msg.body.mobile_phone,
    phone: msg.body.phone,
    fax: msg.body.fax,
    email: msg.body.email,
    website: msg.body.website,
    address: [{
      street: msg.body.street
      street_nr: msg.body.street_nr,
      zip: msg.body.zip,
      city: msg.body.city,
      country: msg.body.country
    }],
  };

  return expression;
};