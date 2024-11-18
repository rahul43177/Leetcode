/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const counterFiller = (counter , array) => {
    for(let el of array)  {
        counter[el] = (counter[el] || 0) + 1
    }
    return counter; 
}
var isAnagram = function(s, t) {
    if(s.length != t.length) return false ;
    let counter1 = {}
    let counter2 = {} 

    counter1 = counterFiller(counter1 , s)
    counter2 = counterFiller(counter2 , t)

    console.log(counter1 , counter2)

    for(let key in counter1) {
        if(counter1[key] != counter2[key]){ 
            return false ;
        }
    }
    return true ;
};