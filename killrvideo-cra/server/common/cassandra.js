const { Client } = require("cassandra-driver")
const CASSANDRA_CONTACT_POINTS = process.env["CASSANDRA_CONTACT_POINTS"]
export const cassandra = new Client({
  contactPoints: CASSANDRA_CONTACT_POINTS,
  queryOptions: {
    prepare: true
  }
})
