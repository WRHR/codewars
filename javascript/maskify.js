function maskify(cc) {
  if(cc.length < 4){ return cc }
  let char = cc.split('')
  let lastFour = char.slice(char.length - 4)
  let chunk = char.slice(0, cc.length - 4).map(char => char = '#')
  return [...chunk, ...lastFour].join('')
}

console.log(maskify('4556364607935616'))
console.log(maskify('455'))