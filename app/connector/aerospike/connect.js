//const Aerospike = require('aerospike')
const mysql = require('mysql');
const config = require('./../../config/database_config');
const { isEmpty } = require('lodash');
//const logger = require('./../../lib/logger');

const connect = () => {
    let client = Aerospike.client({
        hosts: [
            { addr: "172.28.128.3", port: 3000 }
        ],
        log: {
            level: 'INFO'//aerospike.log.INFO
        }
    });

    //Establish a connection.
    client.connect(function (error) {
        if (error) {
            // handle failure
            console.log('Connection to Aerospike cluster failed!')
        } else {
            // handle success
            console.log('Connection to Aerospike cluster succeeded!');

            let key = new Aerospike.Key('test', 'demo', 'uid');

            //Write operation:
            /*let bins = {
                uid: 1000,                // integer data stored in bin called "uid"
                name: 'user_name',         // string data stored in bin called "user_name"
                dob: { mm: 12, dd: 29, yy: 1995 },  // map data stored (msgpack format) in bin called "dob" 
                friends: [1001, 1002, 1003],  // list data stored (msgpack format) in bin called "friends"
                avatar: Buffer.from([0xa, 0xb, 0xc])   // blob data stored in a bin called "avatar"
            }
            client.put(key, bins, function (error) {
                if (error) {
                    console.log('error: %s', error.message);
                } else {
                    console.log('Record written to database successfully.');
                }
            });*/

            //Read operation:
            //get() :reads all bins
            /*client.get(key, function (error, record) {
                if (error) {
                    switch (error.code) {
                        case Aerospike.status.AEROSPIKE_ERR_RECORD_NOT_FOUND:
                            console.log('NOT_FOUND -', key)
                            break
                        default:
                            console.log('ERR - ', error, key)
                    }
                } else {
                    console.log('OK - ', record)
                }
                //client.close();
            });*/


            //select() :get only defined bins
            /*let bins = ['name', 'dob'];
            client.select(key, bins, function (error, record) {
                if (error) {
                    console.error('Error: %s', error.message);
                } else {
                    console.log("Ok -> ", record);
                }
            });*/

            //batchRead() :read Batch of records
            /*let readKeys = [
                { key: new Aerospike.Key('test', 'demo', 'uid'), read_all_bins: true },
                { key: new Aerospike.Key('test', 'demo', 'uid1'), read_all_bins: true },
                { key: new Aerospike.Key('test', 'demo', 'key1'), read_all_bins: true }
            ];
            client.batchRead(readKeys, function (error, results) {
                if (error) {
                    console.log('ERROR - %s', error.message)
                } else {
                    results.forEach(function (result) {
                        switch (result.status) {
                            case Aerospike.status.AEROSPIKE_OK:
                                let record = result.record
                                console.log('OK - ', record)
                                break
                            case Aerospike.status.AEROSPIKE_ERR_RECORD_NOT_FOUND:
                                console.log("NOT_FOUND - ", result.record.key)
                                break
                            default:
                                console.log("ERROR - %d - %s", result.status, result.record.key)
                        }
                    });
                }
                //client.close()
            });*/

            //exists() :to check whether data is present
            /*client.exists(key, function (error, result) {
                if (error) {
                    // handle error
                } else if (result) {
                    console.log("Exists-----", result);
                    // record exists
                } else {
                    // record does not exist
                }
            })*/

            //Delete operation
            // Delete the record using the key
            client.remove(key, function (error) {
                if (error) {
                    console.log("error %s", error.message)
                } else {
                    console.log("Removed....");
                }
            })
        }
    });




}

module.exports = connect;