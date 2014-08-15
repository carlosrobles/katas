module.exports = {
  /**
   * This function should swap 2 variables without
   * using a third variable.
   */
   swap: function (values) {
    values[0] = values[0] + values[1]
    values[1] = values[0] - values[1]
    values[0] = values[0] - values[1]

    return values
  },

  /**
  Assuming John travels around the world in plane from city to city,
  we end up with a series of ticket with an origin and a destination:

  Paris -> Madrid; Madrid -> Lisbon; Lisbon -> New York; New York -> San Francisco

  Now John has forgotten his trip.

  Given an unsorted array of tickets (we don't know which one comes before another one),
  find the first ticket to help John. There is no timestamp on the tickets.
  */

  /**
   * I think this solution is efficient enough as it will only take
   * O(n) to build the airports dictionary, and then check if the
   * airports with only 1 occurrences are either origin or destination.
   *
   * @param {Array} tickets    The unsorted array of tickets
   * @return String|Number     The name of the airport or -1 if no origin airport could be determined
   */
   findFirst: function (tickets) {
    var destinations = []
    var airportDic = tickets.reduce(function (p,c) {
      if (p[c.origin] === undefined) p[c.origin] = 1
      else p[c.origin]++

      if (p[c.destination] === undefined) p[c.destination] = 1
      else p[c.destination]++

      return p
    }, {})

    for (var p in airportDic) {
      if (airportDic[p] === 1) {
        for (var i = 0, len = tickets.length; i < len; i++) {
          if (tickets[i].origin === p) return p
        }
      }
    }

    return -1
  },

  /**
  * Implements the look and say sequence:
  * 1, 11, 21, 1211, 111221, 312211
  *
  * http://www.codewars.com/kata/the-look-and-say-sequence/javascript
  */
  lookAndSay: function (n) {
    if (n <= 0 || isNaN(n)) return -1

    var arr = [1]

    function sayInteger (integer) {
      var matches = integer.toString().match(/((.)(\2*))/g)
      return matches.reduce(function (p, match) {
        p += match.length + match[0]
        return p
      }, "")
    }

    for (var i = 1; i < n; i++) {
      arr.push(sayInteger(arr[i-1]))
    }

    return arr.join(',')
  }
}
