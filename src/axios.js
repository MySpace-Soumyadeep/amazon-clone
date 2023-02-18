import axios from 'axios'

const instance = axios.create({
    // the API (cloud function) URL
    // baseURL: 'http://localhost:5001/clone-dc30d/us-central1/api'
    
    baseURL: 'https://us-central1-clone-dc30d.cloudfunctions.net/api'
});

export default instance;

