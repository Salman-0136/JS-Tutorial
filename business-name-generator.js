/* 
Creating a business name generator by combining list of adjectives, shop name and another word.

Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

let random = Math.random();

let adjective;
let shopName;
let anotherWord;

//for adjectives
{
    if(random>=0 && random<0.333)
    {
        adjective = "Crazy";
    }
    else if(random>= 0.333 && random<0.666)
    {
        adjective = "Amazing";
    }
    else
    {
        adjective = "Fire";
    }
}

//for shop name
random = Math.random();
{
    if(random>=0 && random<0.333)
    {
        shopName = "Engine";
    }
    else if(random>= 0.333 && random<0.666)
    {
        shopName = "Foods";
    }
    else
    {
        shopName = "Garments";
    }
}

//for another word
random = Math.random();
{
    if(random>=0 && random<0.333)
    {
        anotherWord = "Bros";
    }
    else if(random>= 0.333 && random<0.666)
    {
        anotherWord = "Limited";
    }
    else
    {
        anotherWord = "Hub";
    }
}

let businessName = `${adjective}${shopName}${anotherWord}`;
console.log(businessName);