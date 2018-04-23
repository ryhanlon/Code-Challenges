# Return the provided string with the first letter of each word capitalized.
# Make sure the rest of the word is in lower case.
# For the purpose of this exercise, capitalize connecting words like "the" and "of".

"""
>>> title_case("I'm a little tea pot")
"I'm A Little Tea Pot"

>>> title_case("sHoRt AnD sToUt")
'Short And Stout'

>>> title_case("HERE IS MY HANDLE HERE IS MY SPOUT")
'Here Is My Handle Here Is My Spout'

>>> title_case2("I'm a little tea pot")
"I'm A Little Tea Pot"

>>> title_case2("sHoRt AnD sToUt")
'Short And Stout'

>>> title_case2("HERE IS MY HANDLE HERE IS MY SPOUT")
'Here Is My Handle Here Is My Spout'

>>> title_case3("I'm a little tea pot")
"I'm A Little Tea Pot"

>>> title_case3("sHoRt AnD sToUt")
'Short And Stout'

>>> title_case3("HERE IS MY HANDLE HERE IS MY SPOUT")
'Here Is My Handle Here Is My Spout'

"""

def title_case(string: str) -> str:
    """
    :param string:
    :return:
    """
    split_string = string.lower().split(' ')

    final_sentence = []
    for word in split_string:
        title_letter = word[0].upper()
        title_word = title_letter + word[1:]
        final_sentence.append(title_word)

    titled_string = ' '.join(final_sentence)
    return titled_string

def title_case2(string: str) -> str:
    """
    As a list comprehension
    :param string:
    :return:
    """

def title_case3(string: str) -> str:
    """
    Imported string library
    :param string:
    :return:
    """