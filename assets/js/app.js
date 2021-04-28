//Variables
const tweetList = document.getElementById('tweet-list');


// Event Listener
eventListeners();

function eventListeners(){
    //form submission
    document.querySelector('#form').addEventListener('submit', newTweet);

    //removed tweet from list
    tweetList.addEventListener('click',removeTweet);

    //document
    document.addEventListener('DOMContentLoaded',localStorageOnLoad);
}


// Fuction
function newTweet(e){
    e.preventDefault();

    //Read the Textarea value
    const tweet = document.getElementById('tweet').value;

    // removed btn 
    const removedBtn = document.createElement('a');
    removedBtn.classList='remove-tweet';
    removedBtn.textContent='X';

    // create the <li> element
    const li = document.createElement('li');
    li.textContent = tweet;
    

    //add removed btn to each tweet
    li.appendChild(removedBtn);

    // addd to the list
    tweetList.appendChild(li);
    
    //add to localstorage
    addTweetLocalStorage(tweet);

    //print alert
        alert('Tweet added');

        this.reset();
}

    //removed tweet from the DOM
    function removeTweet(e){
        if(e.target.classList.contains('remove-tweet')){
           e.target.parentElement.remove();
        }

        //removed from storage
        removeTweetLocalStorage(e.target.parentElement.textContent);

    }
    //adds the tweets in the local storage
    function addTweetLocalStorage(tweet){
        let tweets = getTweetsFromStorage();

       
        //add tweets into array 
       tweets.push(tweet);
    
        //convert tweet array from string

      localStorage.setItem('tweets',JSON.stringify( tweets));
           
        

    }
    function getTweetsFromStorage(){
        let tweets;
        const tweetsLS = localStorage.getItem('tweets');

        //get the value, if null is returned then we create an empty array
        if(tweetsLS === null){
            tweets = [];
        }
        else{
            tweets = JSON.parse(tweetsLS);
        }
        return tweets;
    }

    //local storage tweets on load
    function localStorageOnLoad(){
        let tweets = getTweetsFromStorage();
     
     // loop throught storage and print the values
    tweets.forEach(function(tweet){

    // removed btn 
    const removedBtn = document.createElement('a');
    removedBtn.classList='remove-tweet';
    removedBtn.textContent='X';

    // create the <li> element
    const li = document.createElement('li');
    li.textContent = tweet;
    

    //add removed btn to each tweet
    li.appendChild(removedBtn);

    // addd to the list
    tweetList.appendChild(li);
    
     });
       
    }

    //removed the tweet from local storage
    function removeTweetLocalStorage(tweet){

        //get tweet from storage
        let tweets = getTweetsFromStorage();

        //removed tweet from storage
        const tweetDelete = tweet.substring( 0, tweet.length -1);
        
        // load throught the tweet and reoved the tweet thats equal
        
        tweets.forEach(function(tweetLS, index){
            if(tweetDelete === tweetLS){
                tweets.splice(index,1);
            }
        })
        //save the data
        localStorage.setItem('tweets',JSON.stringify(tweets));
    }
