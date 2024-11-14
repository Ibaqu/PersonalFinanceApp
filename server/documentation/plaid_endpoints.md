# Information On Plaid Endpoints

## `/accounts/get`
### Description
The `/accounts/get` endpoint can be used to retrieve a list of accounts associated with any linked Item. Plaid will only 
return active bank accounts — that is, accounts that are not closed and are capable of carrying a balance.

To return new accounts that were created after the user linked their Item, you can listen for the 
`NEW_ACCOUNTS_AVAILABLE` webhook and then use Link's update mode to request that the user share this new account with 
you.

/accounts/get is free to use and retrieves cached information, rather than extracting fresh information from the 
institution. The balance returned will reflect the balance at the time of the last successful Item update. 
If the Item is enabled for a regularly updating product, such as Transactions, Investments, or Liabilities, the balance 
will typically update about once a day, as long as the Item is healthy.

### Request

```shell
curl -X POST https://sandbox.plaid.com/accounts/get \
  -H 'Content-Type: application/json' \
  -d '{
    "client_id": "672ac951961f25001a35d70c",
    "secret": "edf6bac3e22d1b4472d8e5a79c58a0",
    "access_token": String
  }'
```
### Response
```json
{
  "accounts": [
    {
      "account_id": "blgvvBlXw3cq5GMPwqB6s6q4dLKB9WcVqGDGo",
      "balances": {
        "available": 100,
        "current": 110,
        "iso_currency_code": "USD",
        "limit": null,
        "unofficial_currency_code": null
      },
      "holder_category": "personal",
      "mask": "0000",
      "name": "Plaid Checking",
      "official_name": "Plaid Gold Standard 0% Interest Checking",
      "persistent_account_id": "8cfb8beb89b774ee43b090625f0d61d0814322b43bff984eaf60386e",
      "subtype": "checking",
      "type": "depository"
    },
    {
      "account_id": "6PdjjRP6LmugpBy5NgQvUqpRXMWxzktg3rwrk",
      "balances": {
        "available": null,
        "current": 23631.9805,
        "iso_currency_code": "USD",
        "limit": null,
        "unofficial_currency_code": null
      },
      "mask": "6666",
      "name": "Plaid 401k",
      "official_name": null,
      "subtype": "401k",
      "type": "investment"
    },
    {
      "account_id": "XMBvvyMGQ1UoLbKByoMqH3nXMj84ALSdE5B58",
      "balances": {
        "available": null,
        "current": 65262,
        "iso_currency_code": "USD",
        "limit": null,
        "unofficial_currency_code": null
      },
      "mask": "7777",
      "name": "Plaid Student Loan",
      "official_name": null,
      "subtype": "student",
      "type": "loan"
    }
  ],
  "item": {
    "available_products": [
      "balance",
      "identity",
      "payment_initiation",
      "transactions"
    ],
    "billed_products": [
      "assets",
      "auth"
    ],
    "consent_expiration_time": null,
    "error": null,
    "institution_id": "ins_117650",
    "item_id": "DWVAAPWq4RHGlEaNyGKRTAnPLaEmo8Cvq7na6",
    "update_type": "background",
    "webhook": "https://www.genericwebhookurl.com/webhook"
  },
  "request_id": "bkVE1BHWMAZ9Rnr"
}

```

## `/accounts/balance/get`
### Description
The `/accounts/balance/get` endpoint returns the real-time balance for each of an Item's accounts. While other endpoints, 
such as /accounts/get, return a balance object, only `/accounts/balance/get` forces the available and current balance 
fields to be refreshed rather than cached.

### Request

```shell
curl -X POST https://sandbox.plaid.com/accounts/balance/get \
-H 'Content-Type: application/json' \
-d '{
  "client_id": "672ac951961f25001a35d70c",
  "secret": "edf6bac3e22d1b4472d8e5a79c58a0",
  "access_token": String,
  "options": {
    "account_ids": [String]
  }
}'
```
### Response
```json
{
  "accounts": [
    {
      "account_id": "BxBXxLj1m4HMXBm9WZZmCWVbPjX16EHwv99vp",
      "balances": {
        "available": 100,
        "current": 110,
        "iso_currency_code": "USD",
        "limit": null,
        "unofficial_currency_code": null
      },
      "holder_category": "personal",
      "mask": "0000",
      "name": "Plaid Checking",
      "official_name": "Plaid Gold Standard 0% Interest Checking",
      "persistent_account_id": "8cfb8beb89b774ee43b090625f0d61d0814322b43bff984eaf60386e",
      "subtype": "checking",
      "type": "depository"
    },
    {
      "account_id": "dVzbVMLjrxTnLjX4G66XUp5GLklm4oiZy88yK",
      "balances": {
        "available": null,
        "current": 410,
        "iso_currency_code": "USD",
        "limit": 2000,
        "unofficial_currency_code": null
      },
      "mask": "3333",
      "name": "Plaid Credit Card",
      "official_name": "Plaid Diamond 12.5% APR Interest Credit Card",
      "subtype": "credit card",
      "type": "credit"
    },
    {
      "account_id": "Pp1Vpkl9w8sajvK6oEEKtr7vZxBnGpf7LxxLE",
      "balances": {
        "available": null,
        "current": 65262,
        "iso_currency_code": "USD",
        "limit": null,
        "unofficial_currency_code": null
      },
      "mask": "7777",
      "name": "Plaid Student Loan",
      "official_name": null,
      "subtype": "student",
      "type": "loan"
    }
  ],
  "item": {
    "available_products": [
      "balance",
      "identity",
      "investments"
    ],
    "billed_products": [
      "assets",
      "auth",
      "liabilities",
      "transactions"
    ],
    "consent_expiration_time": null,
    "error": null,
    "institution_id": "ins_3",
    "item_id": "eVBnVMp7zdTJLkRNr33Rs6zr7KNJqBFL9DrE6",
    "update_type": "background",
    "webhook": "https://www.genericwebhookurl.com/webhook"
  },
  "request_id": "qk5Bxes3gDfv4F2"
}
```

## `/transactions/sync`
### Description
The `/transactions/sync` endpoint allows developers to subscribe to all transactions associated with an Item and get 
updates synchronously in a stream-like manner, using a cursor to track which updates have already been seen.

In the first call to `/transactions/sync` for an Item, the endpoint will return all historical transactions data 
associated with that Item up until the time of the API call (as "adds"), which then generates a `next_cursor` for that 
Item. In subsequent calls, send the `next_cursor` to receive only the changes that have occurred since the previous 
call.

Call `/transactions/sync` with the new cursor, pulling all updates, until `has_more` is `false`.

### Request

```shell
curl -X POST https://sandbox.plaid.com/transactions/sync \
-H 'Content-Type: application/json' \
-d '{
  "client_id": "672ac951961f25001a35d70c",
  "secret": "edf6bac3e22d1b4472d8e5a79c58a0",
  "access_token": String,
  "cursor": String,
  "count": 250
}'
```
### Response

```json
{
  "accounts": [
    {
      "account_id": "BxBXxLj1m4HMXBm9WZZmCWVbPjX16EHwv99vp",
      "balances": {
        "available": 110.94,
        "current": 110.94,
        "iso_currency_code": "USD",
        "limit": null,
        "unofficial_currency_code": null
      },
      "mask": "0000",
      "name": "Plaid Checking",
      "official_name": "Plaid Gold Standard 0% Interest Checking",
      "subtype": "checking",
      "type": "depository"
    }
  ],
  "added": [
    {
      "account_id": "BxBXxLj1m4HMXBm9WZZmCWVbPjX16EHwv99vp",
      "account_owner": null,
      "amount": 72.1,
      "iso_currency_code": "USD",
      "unofficial_currency_code": null,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19046000",
      "check_number": null,
      "counterparties": [
        {
          "name": "Walmart",
          "type": "merchant",
          "logo_url": "https://plaid-merchant-logos.plaid.com/walmart_1100.png",
          "website": "walmart.com",
          "entity_id": "O5W5j4dN9OR3E6ypQmjdkWZZRoXEzVMz2ByWM",
          "confidence_level": "VERY_HIGH"
        }
      ],
      "date": "2023-09-24",
      "datetime": "2023-09-24T11:01:01Z",
      "authorized_date": "2023-09-22",
      "authorized_datetime": "2023-09-22T10:34:50Z",
      "location": {
        "address": "13425 Community Rd",
        "city": "Poway",
        "region": "CA",
        "postal_code": "92064",
        "country": "US",
        "lat": 32.959068,
        "lon": -117.037666,
        "store_number": "1700"
      },
      "name": "PURCHASE WM SUPERCENTER #1700",
      "merchant_name": "Walmart",
      "merchant_entity_id": "O5W5j4dN9OR3E6ypQmjdkWZZRoXEzVMz2ByWM",
      "logo_url": "https://plaid-merchant-logos.plaid.com/walmart_1100.png",
      "website": "walmart.com",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "payment_channel": "in store",
      "pending": false,
      "pending_transaction_id": "no86Eox18VHMvaOVL7gPUM9ap3aR1LsAVZ5nc",
      "personal_finance_category": {
        "primary": "GENERAL_MERCHANDISE",
        "detailed": "GENERAL_MERCHANDISE_SUPERSTORES",
        "confidence_level": "VERY_HIGH"
      },
      "personal_finance_category_icon_url": "https://plaid-category-icons.plaid.com/PFC_GENERAL_MERCHANDISE.png",
      "transaction_id": "lPNjeW1nR6CDn5okmGQ6hEpMo4lLNoSrzqDje",
      "transaction_code": null,
      "transaction_type": "place"
    }
  ],
  "modified": [
    {
      "account_id": "BxBXxLj1m4HMXBm9WZZmCWVbPjX16EHwv99vp",
      "account_owner": null,
      "amount": 28.34,
      "iso_currency_code": "USD",
      "unofficial_currency_code": null,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Fast Food"
      ],
      "category_id": "13005032",
      "check_number": null,
      "counterparties": [
        {
          "name": "DoorDash",
          "type": "marketplace",
          "logo_url": "https://plaid-counterparty-logos.plaid.com/doordash_1.png",
          "website": "doordash.com",
          "entity_id": "YNRJg5o2djJLv52nBA1Yn1KpL858egYVo4dpm",
          "confidence_level": "HIGH"
        },
        {
          "name": "Burger King",
          "type": "merchant",
          "logo_url": "https://plaid-merchant-logos.plaid.com/burger_king_155.png",
          "website": "burgerking.com",
          "entity_id": "mVrw538wamwdm22mK8jqpp7qd5br0eeV9o4a1",
          "confidence_level": "VERY_HIGH"
        }
      ],
      "date": "2023-09-28",
      "datetime": "2023-09-28T15:10:09Z",
      "authorized_date": "2023-09-27",
      "authorized_datetime": "2023-09-27T08:01:58Z",
      "location": {
        "address": null,
        "city": null,
        "region": null,
        "postal_code": null,
        "country": null,
        "lat": null,
        "lon": null,
        "store_number": null
      },
      "name": "Dd Doordash Burgerkin",
      "merchant_name": "Burger King",
      "merchant_entity_id": "mVrw538wamwdm22mK8jqpp7qd5br0eeV9o4a1",
      "logo_url": "https://plaid-merchant-logos.plaid.com/burger_king_155.png",
      "website": "burgerking.com",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "payment_channel": "online",
      "pending": true,
      "pending_transaction_id": null,
      "personal_finance_category": {
        "primary": "FOOD_AND_DRINK",
        "detailed": "FOOD_AND_DRINK_FAST_FOOD",
        "confidence_level": "VERY_HIGH"
      },
      "personal_finance_category_icon_url": "https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png",
      "transaction_id": "yhnUVvtcGGcCKU0bcz8PDQr5ZUxUXebUvbKC0",
      "transaction_code": null,
      "transaction_type": "digital"
    }
  ],
  "removed": [
    {
      "account_id": "BxBXxLj1m4HMXBm9WZZmCWVbPjX16EHwv99vp",
      "transaction_id": "CmdQTNgems8BT1B7ibkoUXVPyAeehT3Tmzk0l"
    }
  ],
  "next_cursor": "tVUUL15lYQN5rBnfDIc1I8xudpGdIlw9nsgeXWvhOfkECvUeR663i3Dt1uf/94S8ASkitgLcIiOSqNwzzp+bh89kirazha5vuZHBb2ZA5NtCDkkV",
  "has_more": false,
  "request_id": "Wvhy9PZHQLV8njG",
  "transactions_update_status": "HISTORICAL_UPDATE_COMPLETE"
}
```

## `/categories/get`

### Description

### Request

```shell
curl -X POST https://sandbox.plaid.com/categories/get \
  -H 'Content-Type: application/json' \
  -d '{}'
```
### Response
```json
{
  "categories": [
    {
      "category_id": "10000000",
      "group": "special",
      "hierarchy": [
        "Bank Fees"
      ]
    },
    {
      "category_id": "10001000",
      "group": "special",
      "hierarchy": [
        "Bank Fees",
        "Overdraft"
      ]
    },
    {
      "category_id": "12001000",
      "group": "place",
      "hierarchy": [
        "Community",
        "Animal Shelter"
      ]
    }
  ],
  "request_id": "ixTBLZGvhD4NnmB"
}
```