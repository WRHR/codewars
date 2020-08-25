function duplicateCount(text){
    let counts = {}
    let dupCount = 0
    let chars = text.toLowerCase().split('')
    chars.map(char=> {
        counts[char]? counts[char]++ : counts[char] = 1
    })
   for ([char,count] of Object.entries(counts)){
       if(counts[char] > 1 ) {
           dupCount++
       }
   }
   return dupCount
}