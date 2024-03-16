var promomsg_array = [
    "Join Hong Kong Industrial University's College of Science for world-class education and research opportunities in science and technology! 20 QUOTAS LEFT!",
    "Join the future of engineering with Hong Kong Industrial University's College of Engineering, offering innovative programs and world-class faculty to prepare you for success in the field! 40 QUOTAS LEFT!",
    "Join the future of interdisciplinary studies with Hong Kong Industrial University's College of Interdisciplinary Studies, offering innovative programs and world-class faculty to prepare you for success in various fields! 30 QUOTAS LEFT!"
]

function random_msg() {
    var rand_num = Math.floor(Math.random()*3);
    document.getElementById('message').innerHTML='<h2>' + promomsg_array[rand_num] + '</h2>'
}      

setInterval(random_msg,3000)

var video_array = [
    "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mp4",
    "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mp4"
]

var vid_count = 2;
var vid=document.getElementById('promo_video');
vid.removeAttribute("loop");
vid.addEventListener('ended',loop_vid,false);


function loop_vid(e) { 
    if (vid_count % 2 ==1){
        vid.setAttribute("src",video_array[0]);
    }
    else{
        vid.setAttribute("src",video_array[1]);
    }
    vid_count++
}

window.onload = random_msg;