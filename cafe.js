function coffeeTime(persons) {
  persons.map(function (person) {
    person.drink(person.coffee)
  })
  return true
}

function mixer(baseCoffee, addedCoffee) {
  return baseCoffee + addedCoffee
}

coffeeTime([{
  name: 'Balázs',
  coffee: mixer('Forte', 'Ristretto India')
}, {
  name: 'Marci',
  coffee: 'Ristretto India'
}])

squeezeLatteGuano(KopiLuwak, coffeeBeans) {
  KopiLuwak.feed(coffeeBeans)
  var excrement = KopiLuwak.defecate()
  var beans = JSON.parse(excrement).getCoffeeBeans()
  makeACupOfCoffee(beans)
}
