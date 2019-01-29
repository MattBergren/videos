import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = { 
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.onTermSubmit('buildings');
    }


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

        this.setState( {
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    // callback on video select 
    // passing down to video list component - 
    // then passed down to video detail component
    // get video object selct
    // set selected video state
    onVideoSelect = (video) => {
        this.setState( {selectedVideo: video});
    };


    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ten wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="six wide column">
                            <VideoList 
                                onVideoSelect={this.onVideoSelect}       videos={this.state.videos} 
                            />
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default App;