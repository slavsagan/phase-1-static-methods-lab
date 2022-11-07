class Formatter {
  static capitalize(string) {
    return (
      string.charAt(0).toUpperCase() + string.slice(1)
    ) /** Capitalize first letter */
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  static titleize(string) {
    const arr = string.split(' ')

    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i] == 'the' ||
        arr[i] == 'a' ||
        arr[i] == 'an' ||
        arr[i] == 'but' ||
        arr[i] == 'of' ||
        arr[i] == 'and' ||
        arr[i] == 'for' ||
        arr[i] == 'at' ||
        arr[i] == 'by' ||
        arr[i] == 'from'
      ) {
        arr[i] = arr[i].charAt(0).toLowerCase() + arr[i].slice(1)
      } else {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
      }
    }
    const newString = arr.join(' ')
    const result = newString.charAt(0).toUpperCase() + newString.slice(1)
    return result
  }
}

console.log(Formatter.capitalize('crocodile'))

console.log(Formatter.sanitize('c'))
console.log(Formatter.sanitize('i'))
console.log(Formatter.sanitize('ca$@#tching cold'))
console.log(Formatter.sanitize("Doin' Dishes"))
console.log(Formatter.sanitize('Entert*ain(i{ng-Elephan^ts'))

console.log(Formatter.titleize('getting giggles'))
console.log(Formatter.titleize('where the wild things are'))
console.log(Formatter.titleize('chicken soup with rice and a few other songs'))
console.log(Formatter.titleize('Maurice a an but of and for at by from end'))

console.log(Formatter.titleize('a tale of two cities'))
console.log(Formatter.titleize('in the night kitchen'))
