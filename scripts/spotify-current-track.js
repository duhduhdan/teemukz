const nodeSpotify = require('node-spotify-webhelper')
const spotify = new nodeSpotify.SpotifyWebHelper({port: '4371'})  // netstat -tlnp || lsof -i | grep LISTEN for port #

spotify.getStatus((err, {track}) => {
  if (err) return console.error(err)

  const song = `${track.artist_resource.name} - ${track.track_resource.name}`

  // limit characters so status bar doesn't break
  console.log(song.substring(0, 32));
})
