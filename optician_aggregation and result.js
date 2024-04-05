db.models.aggregate([
  { "$lookup": {
    "from":"providers",
    localField: "provider_id",
    foreignField: "id",
    as: "provider"
  }},
  { "$lookup": {
    "from": "customers",
    "let": { "customer": "bought_by.customer"},
    "pipeline": [
      { "$match": {"$expr":{"$in":  ["$_id", "$$customer"]}}}
    ], "as": "customers"
  }}
])

//Aggregation result.

{
  _id: ObjectId('660e5183a57d795a188d24eb'),
  model_name: 'Aviator total black',
  brand_name: 'Ray-Ban',
  frame: 'Metallic',
  provider_name: 'Ray-ban España',
  provider_id: ObjectId('660e4836b09e0aac5441520b'),
  price: 205,
  bought_by: [
    {
      customer: ObjectId('660e480fb09e0aac54415204')
    },
    {
      customer: ObjectId('660e480fb09e0aac54415205')
    }
  ],
  provider: [
    {
      _id: ObjectId('660e4836b09e0aac5441520b'),
      name: 'Ray-Ban España',
      address: {
        name: 'Paseo de la Castellana',
        number: 20,
        floor: 1,
        door: '',
        postcode: 28010,
        city: 'Madrid',
        country: 'Spain'
      },
      telephone: 912804352,
      fax: 91280520,
      documentId: 'D8665726'
    }
  ],
  customers: [
    {
      _id: ObjectId('660e480fb09e0aac54415204'),
      name: 'Laura',
      lastname: 'Puig',
      address: {
        name: 'Carrer Valencia',
        number: 346,
        floor: 3,
        door: 'A',
        postcode: '08012',
        city: 'Barcelona',
        country: 'Spain'
      },
      telephone: 645392618,
      email: 'puig.laura@gmail.com',
      referred_by: '',
      attended_by: 'Oriol Rosell',
      purchase_date: '2023-04-21 17:30:00'
    },
    {
      _id: ObjectId('660e480fb09e0aac54415205'),
      name: 'Ignasi',
      lastname: 'Carbonero',
      address: {
        name: 'Carrer Mallorca',
        number: 472,
        floor: 2,
        door: '3B',
        postcode: '08012',
        city: 'Barcelona',
        country: 'Barcelona'
      },
      telephone: 695637281,
      email: 'ignasicarbonero70@hotmail.com',
      referred_by: '',
      attended_by: 'Oriol Rosell',
      purchase_date: '2023-05-03 18:15:00'
    }
  ]
}