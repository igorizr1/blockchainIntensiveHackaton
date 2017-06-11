const express = require('express')
const app = express()

const Web3 = require('web3');
const web3 = new Web3();



web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));





app.get('/balance', function (req, res) {


    var coinbase = web3.eth.coinbase;
    var balance = web3.eth.getBalance(coinbase);

      res.json({
        balance: balance
      })


    console.log('balance', balance)
})


app.post('/charge-start', function (req, res) {


//    res.json({
//        charge_timestamp: req.charge_timestamp,
//        station_id: req.station_id,
//        device_id: req.device_id
//    })

    res.json({
        charge_timestamp: '11111',
        station_id: '11111',
        device_id: '11111'
    })


})

app.post('/charge-end', function (req, res) {


    res.json({
        charge_amount: '11111',
        charge_timestamp: '11111',
        station_id: '11111',
        device_id: '11111'
    })


})




app.listen(3000, function () {
  console.log('Example app listening on port 3000!')





//    console.log('balance', balance)


})