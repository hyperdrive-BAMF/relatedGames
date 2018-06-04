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

const dummyGames = [
  {
    title: "Legend of Zelda",
    id: 1000000,
    description: "some description here",
    price: 49.99,
    rating: "positive",
    categories: ["rpg", "3rd person", "fantasy"],
    thumbnail: "game_image_1003.jpg",
    screenshots: [
      "s3.com/image1234.jpg", "s3.com/image1235.jpg", "s3.com/image1236.jpg"
    ]
  },
  {
    title: "GTA V",
    id: 1000001,
    description: "some other description here",
    price: 59.99,
    rating: "positive",
    categories: ["rpg", "3rd person", "violent"],
    thumbnail: "game_image_1004.jpg",
    screenshots: [
      "s3.com/image1034.jpg", "s3.com/image1035.jpg", "s3.com/image1036.jpg"
    ]
  },
  {
    title: "GTA VI !!!!!",
    id: 1000001,
    description: "some more description words here",
    price: 59.99,
    rating: "positive",
    categories: ["rpg", "3rd person", "violent"],
    thumbnail: "game_image_1005.jpg",
    screenshots: [
      "s3.com/image1034.jpg", "s3.com/image1035.jpg", "s3.com/image1036.jpg"
    ]
  }

];




//https://steamcdn-a.akamaihd.net/steam/apps/<app id>/header.jpg
export default dummyGames;











