import React from 'react';
import { shallow, mount, render } from 'enzyme';
import GameList from '../GameList';
import GameListEntry from '../GameListEntry';

const games = [{ title: 'Dota 2',
    id: '570',
    logoURL: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/570/d4f836839254be08d8e9dd333ecc9a01782c26d2.jpg',
    logoFileName: 'game_logo_1000',
    price: 39.99,
    hoursOnRecord: 867,
    description: 'this is a description of the game. will have scentences',
    categories: [ 'action', 'adventure', 'rpg' ],
    screenshots: 
     [ 'game_image_1000',
       'game_image_1001',
       'game_image_1002',
       'game_image_1003' ] }];

    const handleGameMouseEntry = jest.fn( () => null);
    const handleGameMouseExit = jest.fn( () => null);
    const selectedGame = {};
    selectedGame.title = 'Dota 2';

describe('GameList Component', () => {
  it('should render without throwing and error', () => {
    
    const gameList = shallow(<GameList 
      games={games} 
      handleGameMouseEntry={handleGameMouseEntry}
      handleGameMouseExit={handleGameMouseExit}
      selectedGame={selectedGame}/>);

    expect(gameList.find('.game-list').exists()).toBe(true)
  })
})

describe('GameListEntry Component', () => {
  it('should render without throwing and error', () => {
    const gameListEntry = shallow(<GameListEntry
      game={games[0]}
      key={'something'}
      handleGameMouseEntry={handleGameMouseEntry}
      selectedGame={selectedGame} />)

    expect(gameListEntry.find('.game-icon').exists()).toBe(true)
  })
})