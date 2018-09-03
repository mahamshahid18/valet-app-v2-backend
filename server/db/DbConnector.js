'use strict';

const mongoose = require('mongoose');

class DbConnector {
    constructor() {
        this.serverName = process.env.DB_BASE_URL;
        this.port = process.env.DB_PORT;
        this.dbName = process.env.DB_NAME;
        this.dbUser = process.env.DB_USER;
        this.dbPwd = process.env.DB_PWD;
    }

    connect() {
        const dbUri = `${this.serverName}:${this.port}`;

        return mongoose.connect(
            `mongodb://${this.dbUser}:${this.dbPwd}@ds022408.${dbUri}/${this.dbName}`,
            { useNewUrlParser: true }
        );
    }
}

module.exports = DbConnector;
