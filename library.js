var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
 
var printPlaylists = function () {
  var playlist = library['playlists']
  for (var key in playlist) {
    console.log(`${key}: ${playlist[key].name} - ${playlist[key].tracks.length} tracks`)
  }
  console.log()
}

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var tracks = library['tracks']
  for (var key in tracks) {
    console.log(`${key}: ${tracks[key].name} by ${tracks[key].name} (${tracks[key].album}). `)
  }
  console.log()
}


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var playlist = library.playlists[playlistId];
  var track = playlist.tracks;
  console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length}`);

  for (var key in track) {
    var trackInfo = track[key];
    var trackObj = library.tracks[trackInfo];
    console.log(`${trackObj.id}: ${trackObj.name} by ${trackObj.artist} (${trackObj.album})`)
  }
}
printPlaylist("p01")

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  //var track = library.tracks[trackId];
  var playlist = library.playlists[playlistId].tracks;
  playlist.push(trackId)
  console.log(playlist);
}

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
var id = uid();
  library.tracks[id] = {
    id,
    name,
    artist,
    album
  }
}
// adds a playlist to the library

var addPlaylist = function (name) {
var id = uid()
  library.playlists[id] = {
    id,
    name,
  }
}
addPlaylist("cool");
console.log(library.playlists)

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}