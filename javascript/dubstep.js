function songDecoder(song){
  return song.split('WUB').filter(word => word !== '').join(' ')
}

console.log(songDecoder("AWUBBWUBC"))
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"))
console.log(songDecoder("WUBAWUBBWUBCWUB"))