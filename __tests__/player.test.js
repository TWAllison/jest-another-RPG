const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');
const Player = require('../lib/Player');

console.log(new Potion());

test('create a player object', () => {
    const player = new Player('Dave');

    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
    
});