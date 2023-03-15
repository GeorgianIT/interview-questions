let shoppingList = ['Cheddar Cheese', '2% Milk'];

shoppingList[1] ='1.5% Milk';
shoppingList[2] = 'Chips';

shoppingList[shoppingList.length]='cereal'
//shoppingList.push('Tomatoes');  // add an item at the end of array
//shoppingList.pop(); // delete last item from array


//shoppingList.shift();
//shoppingList.unshift();

//nested array


const game = {
    player1: {
        username: 'Dan',
        playingAs: 'X'
    },
    player2: {
        username: 'Nancy',
        playingAs: 'O'
    },
    board : [
        ['O', null, 'X'],
        [null, 'X', 'O'],
        ['X', 'O', null]
    ]
}

console.log(game.board)
