This is an issue tracker made with NEXT.js.

## Getting Started

First, install npm and run the development server:

```bash
npm install 

npm run dev
```

## Setup environment

- Create a .env file in the root of the application.
- Follow the instructions on .env.example file.
- After setting up the database and the database connection, you need to run migrations with the following command.

``` bash
 npx prisma migrate dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.