module.exports = balanced

function balanced(input) {
    var stack = new Stack()
    for(const char of input) {
        switch(char) {
            case '(':
            case '[':
            case '{':
                stack.push(char)
                break
            case ')':
                if(stack.peek() != '(') return false
                stack.pop()
                break
            case ']':
                if(stack.peek() != '[') return false
                stack.pop()
                break
            case '}':
                if(stack.peek() != '{') return false
                stack.pop()
                break
        }
    }

    return stack.isEmpty()
}

function Stack() {
    var stack = []
    this.push = element => {
        stack.push(element)
    }

    this.pop = () => {
        return stack.pop()
    }

    this.peek = () => {
        if(stack.length === 0) {
            return undefined;
        }

        return stack[stack.length - 1]
    }

    this.isEmpty = function() {
        return stack.length === 0
    }
}