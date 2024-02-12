## Simplified version of paytm

#### It would allow it's users to:
- Sign up
- Sign in
- Make transactions

### Todo:
- [x] Backend
    - [x] mongodb database file 
    - [x] authentication middleware
    - [x] index route --> route to user route and account route
    - [x] user route --> post(/signin) | post(/signup) | get(/bulk) [to find users with firstname or lastname]
    - [x] account route --> get(/balance) | post(/transfer)

- [ ] Frontend
    - [x] React init
    - [x] Components
    - [x] /signup page
    - [x] /signin page
    - [ ] /dashboard page
    - [ ] /sendmoney page
    - [ ] connect pages together
    - [ ] use axios to connect with backend




