!<script setup lang="ts">

function sendToServer(msg) {
  var msgJSON = JSON.stringify(msg);

  connection.send(msgJSON);
}

function handleUserlistMsg(msg) {
  var i;
  var listElem = document.querySelector(".userlistbox");

  while (listElem.firstChild) {
    listElem.removeChild(listElem.firstChild);
  }

  msg.users.forEach(function (username) {
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(username));
    item.addEventListener("click", invite, false);

    listElem.appendChild(item);
  });
}
</script>

<template>
    
    <div class="flexChild" id="camera-container">
        <div class="camera-box">
            <h1>this is mail</h1>
          <video id="received_video" autoplay></video>
          <video id="local_video" autoplay muted></video>
          <button id="hangup-button" onclick="hangUpCall();" disabled>Hang Up</button>
        </div>
    </div>
 
</template>

<style scoped lang="scss">
    .flexChild{
        width: 40rem;
        height: 30rem;
        background-color: #ffffff6c;
    }
</style>
