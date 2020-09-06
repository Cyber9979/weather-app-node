const request = require('request')
const chalk = require('chalk')
const geocode = (address,callback)=>{
    //console.log(address)
    console.log(address)
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiY3liZXI5OTc5IiwiYSI6ImNrZWNsamFlajBqNGIzMW10cnlteGJucmMifQ.fqjrJRf_75LWe4toIBCcMQ"
        
    request({url,json:true},(error,response)=>{
        if(error){
            callback(chalk.red.bgWhite.inverse('Unable To Connect to The Website Make Sure You Have Currenty Working Internet Connection.'),undefined)
        }else if(response.body.features[0]==null){
            callback(chalk.yellow.inverse('Unable to get the Coordinates.Make sure have entered the correct location,Try with othe keyword or change the spell of location.'),undefined)
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
            console.log(response.body.features[0].center[0],response.body.features[0].center[1],response.body.features[0].place_name)
        }
    })
}

module.exports=geocode