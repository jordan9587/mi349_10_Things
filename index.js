const submitButton = document.getElementById("button");

var post = new Object();

submitButton.onclick = function () {
    post.title = document.getElementById("title").value;
    post.authour = document.getElementById("authour").value;
    post.content = document.getElementById("content").value;
    post.displayDetails();
};

post.displayDetails = function()
{
    
    var node = document.createElement("LI");
    var addTitle = document.createTextNode("Title: " + post.title);
    node.appendChild(addTitle);
    document.body.appendChild(node);
    document.getElementById("myPosts").appendChild(node);

    var node = document.createElement("LI");
    var addAuthour = document.createTextNode("Authour: " + post.authour);
    node.appendChild(addAuthour);
    document.body.appendChild(node);
    document.getElementById("myPosts").appendChild(node);

    var node = document.createElement("LI");
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    var addDate = document.createTextNode("Date: " + utc);
    node.appendChild(addDate);
    document.body.appendChild(node);
    document.getElementById("myPosts").appendChild(node);

    var node = document.createElement("LI");
    var addContent= document.createTextNode("Content: " + post.content);
    node.appendChild(addContent);    
    document.body.appendChild(node);
    document.getElementById("myPosts").appendChild(node);
    
};
