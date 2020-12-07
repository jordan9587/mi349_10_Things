const submitButton = document.getElementById("button");

var post = {};

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

    var node2 = document.createElement("LI");
    var addAuthour = document.createTextNode("Authour: " + post.authour);
    node2.appendChild(addAuthour);
    document.body.appendChild(node2);
    document.getElementById("myPosts").appendChild(node2);

    var node3 = document.createElement("LI");
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    var addDate = document.createTextNode("Date: " + utc);
    node3.appendChild(addDate);
    document.body.appendChild(node3);
    document.getElementById("myPosts").appendChild(node3);

    var node4 = document.createElement("LI");
    var addContent= document.createTextNode("Content: " + post.content);
    node4.appendChild(addContent);    
    document.body.appendChild(node4);
    document.getElementById("myPosts").appendChild(node4);
    
};
