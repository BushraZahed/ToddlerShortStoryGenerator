//javascript quote Generator
//variables
let btn = document.querySelector('#new-story');
let story = document.querySelector('.story');
let storyTitle = document.querySelector('.story-title') //storyTitle
const stories = [ 
{ 
    story:  "The bus pulled away just after Todd stepped onto it. He was traveling to visit zoo for a fun trip. He pulled out his zoo map and started to make plans. 'I hope I have enough time to visit all the animals and birds I want to see' he thought.",   
    storyTitle: 'The Bus Ride 🚌'
}, 
{ 
    story:  "Naira jumped into the wave and was immediately immersed in the water. She stood up and came out of the water. 'I love the water, I love the waves and I love the sand,'she said. Her family was visiting the beach for the weekend with her friend Faizan's family. She looked forward to every minute she could spend swimming on the beach with her friend.",
    storyTitle: 'Day at the Beach 🏖️'
}, 
{ 
    story:  "When he got home from school Ryder wanted his favorite treat, chocolate chip cookies. He mixed all of the ingredients together, put the cookie dough on the sheet and put the sheet in the oven. After they were finished baking he pulled them out of the oven. Even though they were still hot he put a whole cookie right in his mouth. He quickly spit it out because it tasted really salty. 'I guess I read the recipe wrong,' he said. He forgot to add sugar." ,
    storyTitle: 'The Right Ingredients 🍪'
}, 
{ 
    story:  "Faizan had been waiting for 5 days to go to the grocery, and now he was late. The rain was pouring so hard that his daddy had to drive slower than usual.When they finally parked in the grocery parking lot, Faizan and his dad opened their umbrellas, stepped out of the car, and ran up to the grocery door. On the door the sign read 'Closed, No Power'. The storm had caused a power outage.",  
    storyTitle: 'A Rainy Day ⛈️'
}, 

];

btn.addEventListener('click', function()
{
    let random = Math.floor(Math.random()*stories.length);
    storyTitle.innerText = stories[random].storyTitle; //story title
    story.innerText = stories[random].story;
    

})