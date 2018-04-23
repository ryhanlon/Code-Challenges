# Reverse a string.
"""
>>> reverse_string('hello')
'olleh'

>>> reverse_string('Howdy')
'ydwoH'

>>> reverse_string('Greetings from Earth')
'htraE morf sgniteerG'

"""

def reverse_string(string: str) -> str:
    """
    Function accepts a string and reverses it.
    :param str: string
    :return: string
    """

    reversed_str = string[::-1]
    return reversed_str


