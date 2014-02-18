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
    }

}
