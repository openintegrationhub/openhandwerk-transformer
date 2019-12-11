'use strict';
const jsonata = require('jsonata');

module.exports.getExpression = msg => {
    if (Object.keys(msg.body).length === 0 && msg.body.constructor === Object) {
        return msg.body;
    }

    const rowids = (jsonata(`$filter(${JSON.stringify(msg.body.oihApplicationRecords)}, function($v, $i, $a) { ($v.recordUid != '') })`).evaluate());
    const lastModifications = (jsonata(`$filter(${JSON.stringify(msg.body.oihApplicationRecords)}, function($v, $i, $a) { ($v.lastModified.timestamp != '') })`).evaluate());

    const expression = {
        meta: {
      		oihUid: msg.body.meta.oihUid,
      		applicationUid: msg.body.meta.applicationUid,
          iamToken: msg.body.meta.iamToken ? msg.body.meta.iamToken : ''
      	},
        data: {
          rowid: rowids ? rowids.recordUid : '',
          salutation: msg.body.data.salutation,
          firstname: msg.body.data.firstname,
          lastname: msg.body.data.lastname,
          // company: msg.body.data.company,
          mobil_phone: msg.body.data.mobile_phone,
          phone: msg.body.data.phone,
          fax: msg.body.data.fax,
          email: msg.body.data.email,
          website: msg.body.data.website,
          street: msg.body.data.street,
          street_nr: msg.body.data.street_nr,
          zip: msg.body.data.zip,
          city: msg.body.data.city,
          country: msg.body.data.country
        }
    };

    return expression;
};
