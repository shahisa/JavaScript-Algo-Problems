# Given an input string, reverse the string word by word.

# For example,
# Given s = "the sky is blue",
# return "blue is sky the".
# logic
# take each space value and turn into a array. then read the array backwards
def reverseWords(s):
  words = s.split()
  revWords= []


  for i in words[::-1]:
     revWords.append(i)
  return ' '.join(revWords)
# Create a singly linked list.

Class Node:
    def __init__(self,data,nextNode = None):
        self.data = data
        self.nextNode = nextNode

    def getData(self):
        return self.data

    def setData(self,val):
        self.data = val

    def setNextNode(self,val):
        self.nextNode = val

Class LinkedList: 
