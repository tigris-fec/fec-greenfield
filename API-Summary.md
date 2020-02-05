# Project Greenfield API

API URL: http://3.134.102.30/

## Cart API

1. GET - /cart/:user_token
* list or products added to the cart by a user
* params:
  - user_token (integer)
    + identifies the user session for which the cart should be pulled

2. POST - /cart/ - adds a product ot the cart
-  

Gets list of proucts added to cart by user

```bash
export API_URL='http://3.134.102.30/'
export USER_TOKEN='abcde12345'

curl $API_URL/cart/$USER_TOKEN
```


```bash
export API_URL='http://3.134.102.30/'

curl $API_URL/products/list
```
