const _ = {
    clamp: function(number, lower, upper) {
        let lowerClampedValue = Math.max(number,lower);
        let clampedValue = Math.min(lowerClampedValue, upper)

        return clampedValue
    },
    inRange: function(number,start, end) {
        if(end === undefined) {
           end = start;
           start = 0
        } 
          
        if (start > end) {
            const temp = end;
            end = start;
            start = temp
        }
        const isInRange =  start <= number && number < end 
        return isInRange;
    
    },
    words: function(string) {
        let words = string.split(' ')
        return words
    },
    pad: function(string, length) {
        if(length <= string.length) {
            return string
        }
            const startPaddingLength = Math.floor((length - string.length)/2)
            const endPaddingLength = length - string.length - startPaddingLength
            const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength)
            return paddedString
    },
    has(object, key) { 
        const hasValue = object[key]
        if(hasValue != undefined){
            return true
        } else {
            return false
        }
    },
    invert(object) {
        let invertedObject = {}
        for (var key in object){
            let originalValue = object[key]
            invertedObject = {originalValue:key}
        }
        return invertedObject
    },
    findKey(object, predicate) {
        for (var key in object) {
            let value = object[key]
            let predicateReturnValue = predicate(value)

            if(predicateReturnValue) {
                return key
            }
        }
        undefined
        return undefined
    },
    drop:function(array, n) {
        if(n===undefined){
            n=1
        }
        let droppedArray = array.slice(n)
        return droppedArray
    },
    dropWhile: function(array,predicate) {
        let dropNumber = array.findIndex(function(element,index) {
            return !predicate(element, index, array)
        });

        let droppedArray = this.drop(dropNumber)
        return droppedArray;
    }
}


// Do not write or modify code below this line.
module.exports = _;