# Code Challenge: Check for Palindromes

"""
>>> palindrome1("eye")
True

>>> palindrome1("_eye")
True

>>> palindrome1("race car");
True

>>> palindrome1("not a palindrome");
False

>>> palindrome1("A man, a plan, a canal. Panama");
True

>>> palindrome1("never odd or even");
True

>>> palindrome1("nope");
False

>>> palindrome1("almostomla");
False

>>> palindrome1("My age is 0, 0 si ega ym.");
True

>>> palindrome1("1 eye for of 1 eye.");
False

>>> palindrome1("0_0 (: /-\ :) 0-0");
True

>>> palindrome1("five|\_/|four");
False

"""

def palindrome(string: str) -> Bool:
    """
    Return true if the given string is a palindrome. Otherwise, return false.
    :param string:
    :return:
    """
    string_lower = string.lower()
    string_clean =

