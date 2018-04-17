module.exports = closest;

function closest(input) {
    result = 0
    for(const value of input) {
        if(result === 0 || Math.abs(value) < Math.abs(result) || value === Math.abs(result)) {
            result = value
        }
    }

    return result
}