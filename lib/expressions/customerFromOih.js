'use strict';
const jsonata = require('jsonata');

module.exports.getExpression = msg => {
    if (Object.keys(msg.body).length === 0 && msg.body.constructor === Object) {
        return msg.body;
    }

    const rowids = (jsonata(`$filter(${JSON.stringify(msg.body.oihApplicationRecords)}, function($v, $i, $a) { ($v.recordUid != '') })`).evaluate());
    const lastModifications = (jsonata(`$filter(${JSON.stringify(msg.body.oihApplicationRecords)}, function($v, $i, $a) { ($v.lastModified.timestamp != '') })`).evaluate());

    const expression = {
        rowid: rowids ? rowids.recordUid : '',
        salutation: msg.body.salutation,
        firstName: msg.body.firstname,
        lastName: msg.body.lastName,
        company: msg.body.company,
        mobil_phone: msg.body.mobile_phone,
        phone: msg.body.phone,
        fax: msg.body.fax,
        email: msg.body.email,
        website: msg.body.website,
        street: msg.body.address.street,
        street_nr: msg.body.address.street_nr,
        zip: msg.body.address.zip,
        city: msg.body.address.city,
        country: msg.body.address.country
    };

    return expression;
};