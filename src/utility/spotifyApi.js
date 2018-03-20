import Axios from "axios";

const client_id = '8538aaedc7604907a9b1fd3a6ba9373b'; // Your client id
const client_secret = 'b3b83d24567245adaf92876d7105be74'; // Your secret
const accountInstance = Axios.create(
   { 
   // method : "POST",

    baseURL: "https://cs-554-spotify-proxy.herokuapp.com/",
    headers: {
      'Authorization' : 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    params: {
        grant_type: 'client_credentials'
      },
    
      // `timeout` specifies the number of milliseconds before the request times out.
      // If the request takes longer than `timeout`, the request will be aborted.
      timeout: 5000,
    
      // `withCredentials` indicates whether or not cross-site Access-Control requests
      // should be made using credentials
      //withCredentials: true,
      json:true
});
export async function getAccessToken(){
  try{
    const httpResponse =await accountInstance.post('/api/token');
    console.log(httpResponse.data);
    return httpResponse.data.access_token;
  } catch(e) {
    console.log(e);
    return null;
  }
  
  // .catch(function (error) {
  //   console.log(error);
  // }).then(response =>{
  //   console.log(response.data);
  //   return response.data.access_token;
  // });
  
  
  
}
export const searchForSongs = async songName => {
    console.log('songName ==', songName);
    
    const accessToken = await getAccessToken();
    console.log('accessToken ==', accessToken);
    const apiInstance= Axios.create(
        {
        baseURL: "https://cs-554-spotify-proxy.herokuapp.com/",
        headers: {
          'Authorization': 'Bearer ' + accessToken
        },
        timeout: 5000,
        //withCredentials: true,
        json: true
      });
      let song = songName.replace(' ', '%20');
    let url = `/v1/search?q=${song}&type=track`
     const httpResponse = await apiInstance.get(url).catch(async error =>{
        console.log(error);
      }); 
      return httpResponse.data.tracks.items;
       
  };