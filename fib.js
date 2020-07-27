const limit = 1000000
const fib = (x, y) => x + y
let pv1 = 1, pv2 = 0, value = fib(pv1, pv2)

while (value < limit) {
  console.log(value)
  value = fib(pv1, pv2)
  pv2 = pv1
  pv1 = value
}

// constants and variables
// var used to handle both
// now const is constants
// and let is variables

// functions
function fibb (x, y) {
  return x + y;
}

var fibbb = function(x, y) {
  return x + y;
}

// data types
var x = 5 // number
var y = 5 // string
var firstName = 'harry' // string
var lastName = 'bedford' // string
var car = {
  id: 5,
  colour: 'red',
  speed: 0
}
var boolean = false
var list = [
  1, 2, 3, 4,
]

// operations
1 + 2 // will equal 3
2 - 1 // will equal 1
2 * 3 // will equal 6
4 / 2 // will equal 2
4 % 3 // will equal 1
9 % 3 // will equal 0
1 + '2' // will equal '12'
'harry ' + 'bedford' // will equal 'harry bedford'
firstName + ' ' + lastName // will equal 'harry bedford'
`${firstName} ${lastName}` // will equal 'harry bedford'
list[0] // will equal 1
car.id // will equal 5
car['id'] // will equal 5

fibbb(2, 4) // will equal 6

// conditionals
if (2 < 3) {
  var result = true
} else {
  var result = false
}

result = 2 < 3 ? true : false
