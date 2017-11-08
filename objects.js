var playlist = {beatles: "Hey Jude"};

function updatePlaylist(my_playlist, artist, song) {
  return Object.assign(my_playlist, {artist: song})
}

function removeFromPlaylist(my_playlist, artist) {
  delete my_playlist.artist
  return my_playlist
}
