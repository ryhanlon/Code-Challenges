# Return the length of the longest word in the provided sentence.
#
# Your response should be a number.
# break the string apart by space character
# loop through each string to get its length
# compare each string to find the longest
# return the int of the longest string



"""

>>> find_longest_word("The quick brown fox jumped over the lazy dog")
6

>>> find_longest_word("May the force be with you")
5

>>> find_longest_word("Google do a barrel roll")
6

>>> find_longest_word("What is the average airspeed velocity of an unladen swallow")
8

>>> find_longest_word("What if we try a super-long word such as otorhinolaryngology")
19

"""

def find_longest_word(string: str) -> int:
    """
    Find the longest word from a sentence or string of words.
    :param string: str
    :return: int
    """
    # initialize longest_word variable
    longest_word = 1

    # split string by space character
    split_word = string.split(' ')

    # loop through list of string to compare which one is the largest,
    # then assign the the largest word to longest_word
    for word in split_word:
        if len(word) > longest_word:
            longest_word = len(word)
    return longest_word
