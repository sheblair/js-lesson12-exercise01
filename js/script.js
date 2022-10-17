const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
    const usersRequest = await fetch("https://randomuser.me/api?results=5");
    const data = await usersRequest.json();

    // this is the array to specify which objects we want within the broader array of data. results is a keyword that refers to a particular set of objects within the large amount of data we got from the API
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

// call the main function to pull the data from the API when we refresh the page
getData();