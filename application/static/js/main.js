
var context = new AudioContext();
var gainNode1 = context.createGain();
var gainNode2 = context.createGain();
var gainNode3 = context.createGain();
var gainNode4 = context.createGain();

document.getElementById('vol1').addEventListener('change', function() {
    gainNode1.gain.value = this.value;
});
document.getElementById('vol2').addEventListener('change', function() {
    gainNode2.gain.value = this.value;
});
document.getElementById('vol3').addEventListener('change', function() {
    gainNode3.gain.value = this.value;
});
document.getElementById('vol4').addEventListener('change', function() {
    gainNode4.gain.value = this.value;
});

function playmusic(link){
    var request = new XMLHttpRequest();
    request.open('GET', link, true);
    request.responseType = 'arraybuffer';
    request.onload = function () {
        var undecodedAudio = request.response;
        context.decodeAudioData(undecodedAudio, function (buffer) {
            var sourceBuffer = context.createBufferSource();
            sourceBuffer.buffer = buffer;
            sourceBuffer.connect(context.destination);
            sourceBuffer.start(context.currentTime);
        });
    };
    request.send();
 
	
}

function playAll(){
    var request1 = new XMLHttpRequest();
    request1.open('GET', '/static/js/violin1.mp3', true);
    request1.responseType = 'arraybuffer';
    request1.onload = function () {
        var undecodedAudio = request1.response;
        context.decodeAudioData(undecodedAudio, function (buffer) {
            var sourceBuffer = context.createBufferSource();
            sourceBuffer.buffer = buffer;
            sourceBuffer.connect(gainNode1);
            gainNode1.connect(context.destination);
            sourceBuffer.start(context.currentTime);
            sourceBuffer.loop = true;
        });
    };
    request1.send();
    var request2 = new XMLHttpRequest();
    request2.open('GET', '/static/js/violin2.mp3', true);
    request2.responseType = 'arraybuffer';
    request2.onload = function () {
        var undecodedAudio = request2.response;
        context.decodeAudioData(undecodedAudio, function (buffer) {
            var sourceBuffer = context.createBufferSource();
            sourceBuffer.buffer = buffer;
            sourceBuffer.connect(gainNode2);
            gainNode2.connect(context.destination);
            sourceBuffer.start(context.currentTime);
            sourceBuffer.loop = true;
        });
    };
    request2.send();
    var request3 = new XMLHttpRequest();
    request3.open('GET', '/static/js/violindrone.mp3', true);
    request3.responseType = 'arraybuffer';
    request3.onload = function () {
        var undecodedAudio = request3.response;
        context.decodeAudioData(undecodedAudio, function (buffer) {
            var sourceBuffer = context.createBufferSource();
            sourceBuffer.buffer = buffer;
            sourceBuffer.connect(gainNode3);
            gainNode3.connect(context.destination);
            sourceBuffer.start(context.currentTime);
            sourceBuffer.loop = true;
        });
    };
    request3.send();
    var request4 = new XMLHttpRequest();
    request4.open('GET', '/static/js/violinpizz.mp3', true);
    request4.responseType = 'arraybuffer';
    request4.onload = function () {
        var undecodedAudio = request4.response;
        context.decodeAudioData(undecodedAudio, function (buffer) {
            var sourceBuffer = context.createBufferSource();
            sourceBuffer.buffer = buffer;
            sourceBuffer.connect(gainNode4);
            gainNode4.connect(context.destination);
            sourceBuffer.start(context.currentTime);
            sourceBuffer.loop = true;
        });
    };
    request4.send();
}

function playAllREAL(links){
    var requests = [links.length];
	for(i = 0; i < links.length; i++){
		var request1 = new XMLHttpRequest();
	    request1.open('GET', links[i], true);
	    request1.responseType = 'arraybuffer';
	    request1.onload = function () {
            var undecodedAudio = request1.response;
            context.decodeAudioData(undecodedAudio, function (buffer) {
                var sourceBuffer = context.createBufferSource();
                sourceBuffer.buffer = buffer;
                sourceBuffer.connect(context.destination);
                sourceBuffer.start(context.currentTime);
                sourceBuffer.loop = true;
            });
    	};
        requests[i] = request1;
    }
    for(i = 0; i < requests.length; i++){
        requests[i].send();
    }
}

function recordmusic(){
    console.log('record');
}