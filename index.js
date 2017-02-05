$(document).ready(function(){
    function init() {
      navigator.getUserMedia(
        { audio: false, video: true},
        function (stream){
          var v2 = document.createElement("video")
          v2.width = '160';
          v2.height = '140';
          if (v2.mozSrcObject !== undefined) {
            v2.mozSrcObject = stream;
          } else {
            v2.src = (window.URL && window.URL.createObjectURL(stream))|| stream;
          }
          var hook = document.body;
          hook.append(v2);
          hook.style.display = "block";
          v2.play();
        },
        function(error){
          console.log(error);
      });
    }
    $("#initButton").click(init);
});