This is an Apollo Server.

You can start it by running yarn startMockedAPI

and running this query on it:

query line_items {
  line_items {
    id
    quantity
    sku
    location
  }
}

You can also check the packing mutation:

mutation pack_items($PackItemsInput: PackItemsInput!) {
  pack_items(data: $PackItemsInput) {
    packages {
      id
      line_items {
        id
        quantity
        sku
        location
      }
    }
  }
}
