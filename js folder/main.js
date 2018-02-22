$(document).ready(function() {
  var users = [
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas"
  ];

  function renderApi() {
    users.forEach(function(item) {
      var twitchTuApi =
        "https://wind-bow.gomix.me/twitch-api/streams/" + item + "?callback=?";
      $.getJSON(twitchTuApi, function(data_1) {
        console.log(data_1);

        if (data_1.stream) {
          var display_name = data_1.stream.channel.display_name;
          var logo_Picture = data_1.stream.channel.logo;
          var status = data_1.stream.channel.status;
          if (status.length > 10) {
            var status = status.slice(20);
            status += ".........";
          }
          console.log(status);

          var container_1 = document.createElement("div");
          container_1.id = "container_1";
          var h2Tag = document.createElement("h2");
          h2Tag.textContent = display_name;

          var aTag = document.createElement("a");
          aTag.href = "https://go.twitch.tv/" + item;
          aTag.setAttribute("target", "_blank");

          var img = document.createElement("img");
          img.src = logo_Picture;

          var span = document.createElement("span");
          span.textContent = status;

          aTag.appendChild(h2Tag);

          container_1.appendChild(img);
          container_1.appendChild(aTag);
          container_1.appendChild(span);
          document.getElementById("container").appendChild(container_1);
        } else {
          var twitchTuApi_2 =
            "https://wind-bow.gomix.me/twitch-api/channels/" +
            item +
            "?callback=?";
          $.getJSON(twitchTuApi_2, function(data_2) {
            console.log(data_2);

            var offlineImg = data_2.logo;
            var offlineDisply_name = data_2.display_name;

            var Container_2 = document.createElement("div");
            Container_2.id = "Container_2";

            var offlineName = document.createElement("h2");
            offlineName.textContent = offlineDisply_name;

            var Offline_aTag = document.createElement("a");
            Offline_aTag.href = "https://go.twitch.tv/" + item;
            Offline_aTag.setAttribute("target", "_blank");

            var offline_img = document.createElement("img");
            offline_img.src = offlineImg;

            var offline_Status = document.createElement("p");
            offline_Status.textContent = "OFFLINE";

            Offline_aTag.appendChild(offlineName);

            Container_2.appendChild(offline_img);
            Container_2.appendChild(Offline_aTag);
            Container_2.appendChild(offline_Status);

            document.getElementById("container2").appendChild(Container_2);
          });
        }
      });
    });
  }

  renderApi();

  $("#All").click(function() {
    $("#container").show(1000);
    $("#container2").show(1000);
  }); /* close for all button click event */

  $("#Online").click(function() {
    $("#container2").hide(1000);
    $("#container").show(1000);
  });
  $("#Offline").click(function() {
    $("#container").hide(1000);
    $("#container2").show(1000);
  });
});
