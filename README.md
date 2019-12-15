# openhandwerk-transformer

# openHandwerk-jsonata-transform-component
> Dedicated [openHandwerk](https://openhandwerk.de) data transformation component for elastic.io platform based on JSONata

## Authentication

This component requires no authentication.

## How it works

The component supports two actions - **Transform to OIH** and **Transform from OIH**. This means that the component takes the incoming message body from the previous step and creates a new expression in a ``JSON`` format. The new generated ``JSON`` object has specific properties which represent the input/output for the next/previous component in the flow.
It uses a fact that JSONata expression is a superset of JSON document so that by default any valid JSON document is a valid JSONata expression.

Let's see how the action **Transform from OIH** works. For example let's take this sample incoming message body and transform it to a valid [openHandwerk](https://openhandwerk.de) object:

```js
{
    firstName: msg.body.data.firstName,
    lastName: msg.body.data.lastName,
    email: msg.body.data.email
}
```

The result of that transformation will be the following JSON document:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "email@me.com"
}
```

The action **Transform to OIH** works the same way. Let's take this incoming message body from [openHandwerk](https://openhandwerk.de) component:

```js
{
    firstName: msg.body.data.firstName,
    lastName: msg.body.data.lastName,
    email: msg.body.data.email
}
```

The result of that transofrmation will be the following JSON document:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "email"
}
```
