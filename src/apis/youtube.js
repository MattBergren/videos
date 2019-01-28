import axios from 'axios';

const KEY = 'AIzaSyDZnwNyUJsUcXbNA6ZI7wq9UyI5oqepalc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});