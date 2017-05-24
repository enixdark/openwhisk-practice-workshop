let request = require('request')

function main(params){
  let location = 'Vermont'
  let url = 'https://query.yahooapis.com/v1/public/yql?q=select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json'
  
  return new Promise( (resolve, reject) => {
    request.get(url,  (error, response, body) => {
      if(error){
        reject(error)
      }
      else {
        let condition = JSON.parse(body).query.results.channel.item.condition
        let text = condition.text
        let temperature = condition.temp
        let output = 'It is ' + temperature + ' degrees in ' + location + ' and ' + text
        resolve({msg: output})
      }
    })
  })
}