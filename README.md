# World API
RESTful API based on the world. Allows you to list continents, countries and capitals.

## Database Model
<p align="center">
    <img width="750" src="https://github.com/sebastian-reyes/world-api/blob/master/assets/github/img/db_world.png">
</p>

## Functionalities
- [x] list continents
- [x] Find continent by Id
- [x] list countries
- [x] Find countrie by Id

## Clone and use this project

### Clone
Clone this repo and run `npm i` to install dependencies.

### Database connection
Create **config.json** file based on **example.config.json**, the credentials are repeated in the 3 environments.<br/>
Example (development environment)
```json
"development": {
      "username": "root",
      "password": "p@ssworD/",
      "database": "your_database",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
```

### sequelize commands
If you have not created the database, run this command in the console:
```bash
npx sequelize-cli db:create
```
To migrate model to database, run this command:
```bash
npx sequelize-cli db:migrate
```

### Development server
Run `npm run dev` for a dev server. Navigate to `http://localhost:3000/`. The application will automatically reload if you change any of the source files.

## Technologies
- nodejs
- express
- MySQL (Database)
- sequelize
- mysql2
- babel
- dotenv
- morgan
- nodemon