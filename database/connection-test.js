const { Client } = require('pg')
// ^ same thing:    const Client = require('pg').Client  

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'cross_team_collab_tool',
    password: '',
    port: 5432,
});

client.connect()
.then(() => console.log("connected successfully"))
.catch(e => console.error(e))
.finally(() => client.end())