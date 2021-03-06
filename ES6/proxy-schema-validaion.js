/**
 * Created by moksha on 10/01/17.
 */

var validator = {
    set (target, key, value) {
        if (key === 'age') {
            if (typeof value !== 'number' || Number.isNaN(value)) {
                throw new TypeError('Age must be a number')
            }
            if (value <= 0) {
                throw new TypeError('Age must be a positive number')
            }
        }
        return true
    }
}
var person = { age: 27 }
var proxy = new Proxy(person, validator)
proxy.age = 'foo'
// <- TypeError: Age must be a number
proxy.age = NaN
// <- TypeError: Age must be a number
proxy.age = 0
// <- TypeError: Age must be a positive number
proxy.age = 28
console.log(person.age)
// <- 28