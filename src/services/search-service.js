import axios from 'axios'

export const searchService = {
  search
}

function search (params) {
  // const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
  const url = '/search-api/search/solr/ds/select?q=' + params
  return axios.get(url).then(response => {
    return response.data
  }).catch(error => {
    return Promise.reject(error)
  })
}
