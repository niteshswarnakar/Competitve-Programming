from samplefunction import return_opposite


def balanceParanthesis(arr):

    stack = []

    for element in arr:
        if element == "[" or element == "{" or element == "(" or element == "<":
            stack.append(element)

        elif element == "]" or element == "}" or element == ")" or element == ">":
            if len(stack) == 0:
                return False
            elif len(stack) != 0:
                if stack[-1] == return_opposite(element):
                    stack.pop()
                else:
                    return False    
    
    
    return len(stack) == 0

test_string = "<<"

print(balanceParanthesis(test_string))


        

