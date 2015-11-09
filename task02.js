function solution1(array) {
    var result = 1;
    while (array.indexOf(result) >= 0) {
        result++;
    }
    return result;
}

function solution2(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '{' || s[i] == '[' || s[i] == '(') {
            stack.push(s[i]);
        } else {
            if (stack.length == 0) {
                return false;
            }
            var symbol = stack.pop();
            if (s[i] == ')' && symbol != '(' || s[i] == ']' && symbol != '[' || s[i] == '}' && symbol != '{') {
                return false;
            }
        }
    }
    return stack.length == 0;
}

function solution3(array, f) {
    var re = /(\((.*)\)|(\w+))\s*=>\s*(.*)/;
    var match = re.exec(f);
    var func = new Function(match[2] || match[3], "return " + match[4]);
    return array.map(func);
}