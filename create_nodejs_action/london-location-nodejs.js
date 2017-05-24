let request = require('request')

function main(params){
  let location = 'London'
  let url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location
  return new Promise( (resolve, reject) => {
    request.get(url,  (error, response, body) => {
      if(error){
        reject(error)
      }
      else {
        let loc = JSON.parse(body).results[0]['geometry'].location
        
        resolve({
          lat: loc.lat,
          lng: loc.lng
        })
      }
    })
  })
}