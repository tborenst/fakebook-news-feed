$("#status-form").submit(function() {
  var updateText = $("#status-field").val();

  addPost(updateText);

  $("#status-field").val("");
  return false;
});

var addPost = function(updateText) {

  var profilePic = $("<img>");
  profilePic.prop("src", "img/person.png");
  profilePic.prop("width", "50");
  profilePic.prop("height", "50");
  profilePic.prop("alt", "Person A");

  var postHeader = $("<h1>");
  postHeader.html("Person A");

  var postText = $("<p>");
  postText.html(updateText);

  var updateDiv = $("<div>");
  updateDiv.addClass("update");
  updateDiv.append(postHeader);
  updateDiv.append(postText);

  var newPost = $("<article>");
  newPost.append(profilePic);
  newPost.append(updateDiv);


  $(".posts").prepend(newPost);

}