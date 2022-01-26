let accessToken;
const clientId = '0124ca2095474f88af98abe5603e9401'
const redirectUrl = 'http://localhost:3000/';

const Spotify = {
    getAccessToken() {
        if (accessToken){
            return accessToken
        }

        //Check for access Token

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

        if(accessTokenMatch && expiresInMatch) {
         accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/') //Clear the parameters
            return accessToken
        }else {
            const accessUrl = `https://accounts.spotify.com/authorize?
            client_id=${clientId}&response_type=token&
            scope=playlist-modify-public&redirect_uri=${redirectUrl}`
            window.location = accessUrl;
        }
    },
    search(term) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(result => result.json())
        .then(jsonResponse => {
            if(!jsonResponse.tracks){
                return []
            }
            return jsonResponse.tracks.items.map((track) => ({
                id: track.id,
                name: track.name,
                artist: track.artist,
                album: track.album,
                uri: track.uri
            }));
        });
    },

    savePlaylist(namePlaylist, TrackUrl) {
        if(!namePlaylist || !TrackUrl.length) {
            return;
        }

        const accessToken = Spotify.getAccessToken();
        const headers = {Authorization: `Bearer ${accessToken}`};
        let userId;

        return fetch('https://api.spotify.com/v1/me', {headers: headers }
        ).then(response => response.json()
        ).then(jsonResponse => {
            userId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({name: namePlaylist })
            }).then(response => response.json()
            ).then(jsonResponse => {
                const playlistId = jsonResponse.id;
                return fetch(`https://api.spotify.com//v1/users/
                            ${userId}/playlists/${playlistId}/tracks`, {
                                headers: headers,
                                method: 'POST',
                                body: JSON.stringify({uris: TrackUrl})
                            });
            })
        })
    }
}


export default Spotify;