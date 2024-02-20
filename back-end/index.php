<?php
include("cors.php");
include("response-format.php");

// variables start with $(dollar) symbol.variables are used for storing any data
// To store a single value we can write the variable like below
$myName="abbas";
// To store multiple values we can write the variable like below
$myFriends=["babu","ramu","akbar"];
// myFriends variable is called as array variable because it is storing more than one value.Here each value has a default name starting with zero(0).this names are called indexes.
// For each value in the array if you want give some name we have write like below
$myFriendsOne=[
    "oldFriend" => "ramu",
    "newFriend" => "babu",
    "relativeFriend" => "akbar"
];
// This type of array  is called assosiative array
// in normal array each value name is called as index.
// In assosiative array each value name is called as key.
// To get one value from normal array we can write like below 
$oneValueFromArray=$myFriends[1];
// To get one value from assosiative array we can write like below
$oneValueFromAssociativeArray=$myFriendsOne["newFriend"];
sendResponse($oneValueFromAssociativeArray);