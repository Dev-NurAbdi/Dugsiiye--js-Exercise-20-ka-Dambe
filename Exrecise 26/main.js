// Blocking or Synchronous
function waitForFriend(){
    alert("saxiibkaga miyaad sugaysaa?");
}
console.log("Saaxiibkay wuu soo daahay ");
waitForFriend();
console.log("Waxaan sugayaa saxibkey Ali, in kastoo uu aad u soo daahay  sorry");

// non- Blocking or ASynchronous
function notifyFriendArrival(callback){
    setTimeout(() => {
        const imtixkaSaxipkey = "Saaxiibkay wuxuu imaanayaa 2 second ka dib";
        callback (imtixkaSaxipkey);
    }, 2000);
};
notifyFriendArrival(function(imtixkaSaxipkey){
    console.log(imtixkaSaxipkey)
});
console.log("Saxibkey haduu imado si waanagsan haloo soo dhaweeyo guys")


