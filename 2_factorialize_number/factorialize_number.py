# Code Challenge: Factorialize a number

"""
>>> factorialize(5)
120

>>> factorialize(10)
3628800

>>> factorialize(20)
2432902008176640000

>>> factorialize(0)
1

"""

def factorialize(num: int) -> int:
    """
    Factorialize a number.
    :param num: int
    :return: int
    """
    factorial = 1
    for n in range(1, num + 1):
        factorial *= n
    print(factorial)


