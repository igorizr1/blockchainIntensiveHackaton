const express = require('express')
const app = express()

const Web3 = require('web3');
const web3 = new Web3();



web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));




/**
* CREATE Contract
*/
app.post('/contract', function (req, res) {




//    web3.eth.accounts
    code = fs.readFileSync('./../airlab/contracts/token/TokenEmission.sol').toString()
    contract = web3.eth.compile.solidity(code); //contract.code: contract.info.abiDefinition:




    EnergyContract = web3.eth.contract(contract.info.abiDefinition); //Application Binary Interface
//    deployedContract = EnergyContract.new(['estate_name1','estate_name2','estate_name3', web3.eth.accounts[0], web3.eth.accounts[0], web3.eth.accounts[0], web3.eth.accounts[2]],{data: contract.code, from: web3.eth.accounts[0], gas: 4700000})


    deployedContract = EnergyContract.new('kryptoTest', 'krt', 0, 1000)


    console.log('deployedContract', deployedContract)


    contractInstance = EnergyContract.at(deployedContract.address);


    console.log('contractInstance', contractInstance)


    console.log('deployedContract.address', deployedContract.address)


    res.json({
        charge_timestamp: '11111',
        station_id: '11111',
        device_id: '11111'
    })


})


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
