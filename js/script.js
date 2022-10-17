const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users");

const getData = async function (numUsers) {
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();

    // this is the array to specify which objects we want within the broader array of data. 
    // results is a keyword that refers to a particular set of objects within the large amount of data we got from the API.
    const userResults = data.results;

    // this calls the function to display the data for the array of 5 users
    displayUsers(userResults);
};

const displayUsers = function (userResults) {
    // empty the HTML before we add anything
    randomFolks.innerHTML = "";

    // loop through the array of users, pulling their info from the array and attaching it to various variables
    for (let user of userResults) {
        let country = user.location.country;
        let name = user.name.first;
        let imageUrl = user.picture.medium;

        // create and append an html element containing the user data
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `<h3>${name}</h3>
                            <p>${country}</p>
                            <img src=${imageUrl} alt="User avatar"/>`;    
        randomFolks.append(userDiv);
    };

};

// change event to use drop-down list
selectUserNumber.addEventListener("change", function (e) {
    const numUsers = e.target.value;

    // move the main function call in here with the numUsers variable as an argument
    getData(numUsers);
});

// call the function on its own with a default numUsers of 1 to provide a user upon refreshing the page.
// all other numUsers will be access through the change event and the getData() function call at the bottom of it
getData(1);