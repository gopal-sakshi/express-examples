Express Middleware Functions 
- functions that come into play 
    after the server receives the request 
    and before the response fires to the client. 
- They have access to `the request` and `the response` objects. 
- They can be used for any 
    data processing, 
    database querying, 
    making API calls, 
    calling the next middleware function (using the next() function)
    sending the response
------------------------------------------------------------------------------

Two aspects of middleware functions to keep in mind are:
- They are triggered sequentially (top to bottom) based on their sequence in code.
- They operate 
    until the process exits
    or the response has been sent back to the client.
------------------------------------------------------------------------------