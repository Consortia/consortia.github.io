var videoList = ["assets/video/screenwatch.mp4",
"assets/video/fly.mp4", 
"assets/video/hummingbird.mp4",
"assets/video/cherryblossom.mp4",
"assets/video/rotation.mp4",
"assets/video/grain.mp4",
"assets/video/anenome.mp4",
"assets/video/eye.mp4"];
videoList.sort(function(a, b) {return 0.5 - Math.random()});

$("#video").html("<video class='video' autoplay playsinline muted poster='' id='bgvid' loop><source src='" + videoList[0] + "' type='video/mp4'></video>");
