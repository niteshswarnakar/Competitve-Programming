from doctest import FAIL_FAST


#Q1. Find which rooms are opened at the end when each customer enter into the building
#and they change door state for their multiplicative room number upto 100

rooms = [False for i in range(100)]

def find_room_state(rooms):
    for i in range(100):
        for j in range(i,100,i+1):
            if rooms[j] == False:
                rooms[j] = True
            else:
                rooms[j] = False
        # print(rooms[i])
    return rooms


final_rooms = find_room_state(rooms)

i = 1

for room in rooms:
    if room == True:
        print(i,"(Open) , ",end = "")
    else:
        print(i,",", end = "")
    i+=1




