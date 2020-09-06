const request=require('request')
const chalk=require('chalk')
forcast=(add,callback) =>{

    const url="http://api.weatherstack.com/current?access_key=37b01b7cf7fec4d99597628d3d0aa3f7&query="+encodeURIComponent(add)+""
    request({url,json:true},(error,response)=>{
        if(error){
            callback('Unable To Connect to The Website Make Sure You Have Currenty Working Internet Connection.')
        }else if(response.body.error){
            callback('Unable to Find location,Make Sure You Have Entered The Correct Location')
        }else{
            
            callback(undefined,response.body.current.weather_descriptions+'.It is currently '+' '+response.body.current.temperature+' '+' Degrees,and it feelslike '+' '+response.body.current.feelslike+' '+ ' Degrees.','Location:'+response.body.location.name+','+response.body.location.region+','+response.body.location.country)
            //callback(undefined,response.body.current.weather_descriptions+'.It is currently '+' '+response.body.current.temperature+' '+' Degrees,and it feelslike '+' '+response.body.current.feelslike+' '+ ' Degrees. \n '+"Location:"+response.body.location.name+","+response.body.location.region+",   "+response.body.location.country)
        }
    })
}

module.exports=forcast