import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {

    state = { 
        videos: [],
        selectedVideo: null
    };


    // callback on form submit 
    // passing down to search bar component
    // get value of search term
    // make search ajax request to youtube API
    // set videos state
    onTermSubmit = async(term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState( {videos: response.data.items});
    }

    // callback on video select 
    // passing down to video list component
    // get id of video selct
    // set selected video state
    onVideoSelect = (video) => {
        console.log('from the app', video);
    };


    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />

                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />

            </div>
        )
    }

}

export default App;