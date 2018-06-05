/*
Title: string,
Id: number,
Description: string,
Price: number,
Rating: string/number - maybe an array,
Categories: array of strings - all category tags the game has stored under,
Thumbnail: string - link to images stored on S3,
Screenshots: array of strings - links to images stored on S3,
*/
//STREATCH FEATURES
//add total sales 
//release data

const dummyGames = [ { title: 'Dota 2',
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
       'game_image_1003' ] },
  { title: '1... 2... 3... KICK IT! (Drop That Beat Like an Ugly Baby)',
    id: '15540',
    logoURL: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/15540/10c00b46392f9264c87e8d3357713854cf6cecfe.jpg',
    logoFileName: 'game_logo_1001',
    price: 39.99,
    hoursOnRecord: 0.5,
    description: 'this is a description of the game. will have scentences',
    categories: [ 'action', 'adventure', 'rpg' ],
    screenshots: 
     [ 'game_image_1004',
       'game_image_1005',
       'game_image_1006',
       'game_image_1007' ] },
  { title: 'AaAaAA!!! - A Reckless Disregard for Gravity',
    id: '15520',
    logoURL: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/15520/2ae14ebb995bacc54813b1c45cb49332113ba1ea.jpg',
    logoFileName: 'game_logo_1002',
    price: 39.99,
    hoursOnRecord: 7.7,
    description: 'this is a description of the game. will have scentences',
    categories: [ 'action', 'adventure', 'rpg' ],
    screenshots: 
     [ 'game_image_1008',
       'game_image_1009',
       'game_image_1010',
       'game_image_1011' ] },
  { title: 'Alien Swarm',
    id: '630',
    logoURL: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/630/de3320a2c29b55b6f21d142dee26d9b044a29e97.jpg',
    logoFileName: 'game_logo_1003',
    price: 39.99,
    hoursOnRecord: 2,
    description: 'this is a description of the game. will have scentences',
    categories: [ 'action', 'adventure', 'rpg' ],
    screenshots: 
     [ 'game_image_1012',
       'game_image_1013',
       'game_image_1014',
       'game_image_1015' ] },
  { title: 'Amnesia: The Dark Descent',
    id: '57300',
    logoURL: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/57300/75b8a82acfb05abda97977ac4eb5af20e0dcf01e.jpg',
    logoFileName: 'game_logo_1004',
    price: 39.99,
    hoursOnRecord: 8,
    description: 'this is a description of the game. will have scentences',
    categories: [ 'action', 'adventure', 'rpg' ],
    screenshots: 
     [ 'game_image_1016',
       'game_image_1017',
       'game_image_1018',
       'game_image_1019' ] },
  { title: 'Antichamber',
    id: '219890',
    logoURL: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/219890/23966982a5795854342af3522706c7f9c6a83cb5.jpg',
    logoFileName: 'game_logo_1005',
    price: 39.99,
    hoursOnRecord: 4.5,
    description: 'this is a description of the game. will have scentences',
    categories: [ 'action', 'adventure', 'rpg' ],
    screenshots: 
     [ 'game_image_1020',
       'game_image_1021',
       'game_image_1022',
       'game_image_1023' ] },
  { title: 'Aquaria',
    id: '24420',
    logoURL: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/24420/d6ebe90b8bbb2eccfa28616a283e9781694cdba0.jpg',
    logoFileName: 'game_logo_1006',
    price: 39.99,
    hoursOnRecord: 0.4,
    description: 'this is a description of the game. will have scentences',
    categories: [ 'action', 'adventure', 'rpg' ],
    screenshots: 
     [ 'game_image_1024',
       'game_image_1025',
       'game_image_1026',
       'game_image_1027' ] },
  { title: 'Assassin\'s Creed II',
    id: '33230',
    logoURL: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/33230/6d29461ee9303967cb32c2142afaf9bbdb911b6f.jpg',
    logoFileName: 'game_logo_1007',
    price: 39.99,
    hoursOnRecord: 0,
    description: 'this is a description of the game. will have scentences',
    categories: [ 'action', 'adventure', 'rpg' ],
    screenshots: 
     [ 'game_image_1028',
       'game_image_1029',
       'game_image_1030',
       'game_image_1031' ] },
  { title: 'Audiosurf',
    id: '12900',
    logoURL: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/12900/75dc0398efeae1cc994714e37c893b593f9c9a88.jpg',
    logoFileName: 'game_logo_1008',
    price: 39.99,
    hoursOnRecord: 3.8,
    description: 'this is a description of the game. will have scentences',
    categories: [ 'action', 'adventure', 'rpg' ],
    screenshots: 
     [ 'game_image_1032',
       'game_image_1033',
       'game_image_1034',
       'game_image_1035' ] },
  { title: 'Back to the Future: Ep 1 - It\'s About Time',
    id: '31290',
    logoURL: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/31290/252a22c149c29a2d93fcb0080f3ee9d2dbbd9a2f.jpg',
    logoFileName: 'game_logo_1009',
    price: 39.99,
    hoursOnRecord: 0,
    description: 'this is a description of the game. will have scentences',
    categories: [ 'action', 'adventure', 'rpg' ],
    screenshots: 
     [ 'game_image_1036',
       'game_image_1037',
       'game_image_1038',
       'game_image_1039' ] } ]

//https://steamcdn-a.akamaihd.net/steam/apps/<app id>/header.jpg
module.exports = dummyGames;

// /export default dummyGames;











