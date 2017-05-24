import requests
import json 
location = 'London'
url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location

def main(dict):

    loc = json.loads(requests.get(url +location).content)
    return {
      "lat": loc["results"][0]["geometry"]["location"]["lat"],
      "lng": loc["results"][0]["geometry"]["location"]["lng"]
    }