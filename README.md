# tjmusers

1. Create user_db database
2. Configure config/database.js with credentials for your environment
3. On the command line run 'npm start'
4. In browser visit localhost:9000/setup

## Routes

### Post
#### /users

``` JSON
{
	"name": "Steve",
	"username": "Stevo",
	"email": "steve@davesemporium.org",
	"role": "Admin"
}
```

### Get
#### /users
Returns all users

#### /users/:field/:value
Returns users based on required field and matching value
Example /users/username/davo

### Delete
#### /users/:id
Deletes user by id
Example /users/1
