from random import *

def simon():
    score = -1
    game = True
    seq = []
    playerInput = ''
    newChoice = ''
    choices = ['r','g','y','b']
    while(game):
        score += 1
        newChoice = choice(choices)
        seq.append(newChoice)
        print(seq)
        for i in range(len(seq)):
            playerInput = input("Enter the sequence so far: ")
            if playerInput == seq[i]:
                pass
            else:
                game = False
                break
        
    print("Your score is", score)     
