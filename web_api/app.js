const express = require('express')
const app = express()

const Web3 = require('web3');
const web3 = new Web3();

var fs = require('fs');
const solc = require('solc')



web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));




/**
* CREATE Contract
*/
app.post('/contract', function (req, res) {



    let source = fs.readFileSync('./TokenEmission.sol', 'utf8');
    let compiledContract = solc.compile(source, 1);


//    web3.eth.accounts
//    code = fs.readFileSync('./TokenEmission.sol').toString()

//    console.log('code', code)



    let abi = compiledContract.contracts[':TokenEmission'].interface;
    let bytecode = compiledContract.contracts[':TokenEmission'].bytecode;

    let gasEstimate = web3.eth.estimateGas({data: '0x'+bytecode});


    console.log('gasEstimate', gasEstimate)



    let EnergyContract = web3.eth.contract(JSON.parse(abi));

//    contract = web3.eth.compile.solidity(code); //contract.code: contract.info.abiDefinition:




//    EnergyContract = web3.eth.contract(contract.info.abiDefinition); //Application Binary Interface



//    deployedContract = EnergyContract.new(['estate_name1','estate_name2','estate_name3', web3.eth.accounts[0], web3.eth.accounts[0], web3.eth.accounts[0], web3.eth.accounts[2]],{data: contract.code, from: web3.eth.accounts[0], gas: 4700000})

    web3.personal.unlockAccount(web3.eth.accounts[0], '123');



    deployedContract = EnergyContract.new('kryptoTest', 'krt', 0, 1000, {
       from: web3.eth.accounts[0],
       data: '0x'+bytecode,
       gas: gasEstimate+400000
   }, function(err, EnergyContract){
        if(!err) {
           // NOTE: The callback will fire twice!
           // Once the contract has the transactionHash property set and once its deployed on an address.

           // e.g. check tx hash on the first call (transaction send)
           if(!EnergyContract.address) {
               console.log('EnergyContract.transactionHash', EnergyContract.transactionHash) // The hash of the transaction, which deploys the contract

//                res.json({
//                   transactionHash: EnergyContract.transactionHash
//               })



           // check address on the second call (contract deployed)
           } else {
               console.log('success', EnergyContract.address) // the contract address



               console.log('deployedContract', deployedContract)
           //
           //
//               contractInstance = EnergyContract.at(deployedContract.address);
           //
           //
//               console.log('contractInstance', contractInstance)
           //
           //
               console.log('deployedContract.address', deployedContract.address)


//               res.json({
//                   charge_timestamp: '11111',
//                   station_id: '11111',
//                   device_id: '11111'
//               })


           }

           // Note that the returned "myContractReturned" === "myContract",
           // so the returned "myContractReturned" object will also get the address set.
        }else{

            console.log('error', err)

//            res.json({
//               error: err
//           })
        }
    })


    var myContractInstance = EnergyContract.new('kryptoTest', 'krt', 0, 1000, {
        data: '0x'+bytecode,
        gas: gasEstimate+400000,
        from: web3.eth.accounts[0]
    });



//
//



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
