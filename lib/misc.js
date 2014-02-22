module.exports = {

    /**
     * This function should swap 2 variables without
     * using a third variable.
     */
    swap: function(values) {
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
    findFirst: function (tickets) {
        var destinations = []
        var airportDic = tickets.reduce(function (p,c) {
            var origin    = c.origin
            , destination = c.destination

            if (p[origin] === undefined) p[origin] = 1
            else p[origin]++

            if (p[destination] === undefined) p[destination] = 1
            else p[destination]++

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
    }

}
