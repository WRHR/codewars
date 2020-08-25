function isIsogram(str){
    return !/(\w).*\1/i.test(str)
}

console.log(isIsogram("Dermatoglyphics"))