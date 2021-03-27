def calculator(op1, op2, operator):
    if operator not in ["+", "-", "/", "*"]:
        print ("op1, op2, operator", op1, op2, operator)
        raise Exception("unsupported.")
    if operator == "+":
        return op1+op2
    if operator == "-":
        return op1-op2
    if operator == "*":
        return op1*op2
    if operator == "/":
        return op1/op2
