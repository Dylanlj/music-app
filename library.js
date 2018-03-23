const uuidv1 = require('uuid/v1');
class Library {
  constructor(name, creator) {
    this.name = name
    this.creator = creator
    this.playlists = {};
    this.tracks= {}
  }
  addTrack(title, rating, length) {
    let newTrack = {
      title: title,
      rating: rating,
      length: length
    }
    this.tracks[title] = newTrack
  }
  addPlaylist(playlistName) {
    let newPlaylist = {
      name: playlistName,
      id: uuidv1(),
      tracks: [],
      overallRating: function() {
        let rating = 0;
        for(let i in this.tracks) {
          rating += this.tracks[i].rating
        }
        return rating / this.tracks.length
      },
      totalDuration: function () {
        let totalLength = 0;
        for(let i in this.tracks) {
          totalLength += this.tracks[i].length
        }
        return totalLength
      }
    }
    this.playlists[playlistName] = newPlaylist
  }

  getTracks(track) {
    console.log(track)
  }

  addTrackToPlaylist(trackName, playlistName) {
    if(this.tracks[trackName] && this.playlists[playlistName]){
      this.playlists[playlistName].tracks.push(this.tracks[trackName])
    } else {
      throw new Error("playlist or trackname couldn't be found")
    }

  }
}



let lib = new Library("great Music", "dylan")

lib.addPlaylist("punk")
lib.addTrack("whats my age again?", 4, 210 )
lib.addTrack("shake tramp", 3, 300 )
lib.addTrack("girl all the bad guys want", 5, 240 )
lib.addTrackToPlaylist("whats my age again?", "punk")
lib.addTrackToPlaylist("shake tramp", "punk")
console.log(lib.playlists.punk.overallRating())
console.log(lib.playlists.punk.totalDuration())

//console.log(lib)
//console.log(lib.playlists)
