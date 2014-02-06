module.exports = {

    /**
     *
     *
     *
     * {{}}
     *
     *
     */
    validateBrackets: function (str) {
        var openedPile = []
        , currentChar
        , opening = ['(', '{', '[']
        , closing = [')', '}', ']']

        for (var i = 0; i < str.length; i++) {
            currentChar = str.charAt(i)

            if (opening.indexOf(currentChar) !== -1) {
                openedPile.push(currentChar)
            }

            if (closing.indexOf(currentChar) !== -1) {
                var check = openedPile.splice(-1).toString()
                if (opening.indexOf(check) !== closing.indexOf(currentChar)) {
                    // the closing char does not match the last opened char
                    return false
                }
            }
        }

        return openedPile.length === 0
    }

    /*

    http://www.codewars.com/dojo/katas/5277c8a221e209d3f6000b56/solutions/javascript

    function validBraces(braces){
        var r = /\(\)|\{\}|\[\]/;
        while(braces.length && r.test(braces)) {
            braces = braces.replace(r,'');
        }
        return braces.length === 0;
    }


    function validBraces(braces){
  var stack = [];

  for (var i=0; i<braces.length; i++) {
    if (braces[i] == '[' || braces[i] == '{' || braces[i] == '(') stack.push(braces[i]);
    else if (braces[i] == ']' && stack.pop() !== '[') return false;
    else if (braces[i] == '}' && stack.pop() !== '{') return false;
    else if (braces[i] == ')' && stack.pop() !== '(') return false;
  }

  return stack.length === 0;
}


function validBraces(braces){
  var stack = [];
  for(var i = 0; i < braces.length; i++) {
    switch(braces[i]){
      case ']': if (stack.pop() !== '[') return false; break;
      case ')': if (stack.pop() !== '(') return false; break;
      case '}': if (stack.pop() !== '{') return false; break;
      default:
        stack.push(braces[i]);
    }
  }
  return !stack.length;
}
    */

}
