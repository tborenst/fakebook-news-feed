var username = "";
var serverIP = "localhost";

$("#status-form").submit(function() {
  $.ajax({
    url: "http://" + serverIp + ":8080/posts",
    type: "POST",
    data: {name: username, content: updateText},
    success: function(data) {
      if (data.success) addPost(username, $("#status-field").val());
    }
  });

  $("#status-field").val("");
  return false;
});

var addPost = function(name, content) {

  var profilePic = $("<img>");
  profilePic.prop("src", "img/person.png");
  profilePic.prop("width", "50");
  profilePic.prop("height", "50");

  var postHeader = $("<h1>");
  postHeader.html(name);

  var postText = $("<p>");
  postText.html(content);

  var updateDiv = $("<div>");
  updateDiv.addClass("update");
  updateDiv.append(postHeader);
  updateDiv.append(postText);

  var newPost = $("<article>");
  newPost.append(profilePic);
  newPost.append(updateDiv);


  $(".posts").prepend(newPost);

}

window.setInterval(function() {
  $.ajax({
    url: "http://" + serverIp + ":8080/posts",
    type: "GET",
    success: function(data) {
      var postArray = data.posts;

      $(".posts").html("");

      for (var i = 0; i < postArray.length; i++) {
        addPost(postArray[i].name, postArray[i].content);
      }
    }
  });

}, 10000);