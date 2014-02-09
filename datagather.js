var server = 'localhost';
var session = random_string();

var time_last = Date.now();

// TODO: Send "start" signal here to server
// TODO: Security aspects
/*
    "start": {
        "session": session
    }
*/

stage.get('Image').on('click tap', function(e) {
    var target = e.targetNode;
    
    var time_now = time = Date.now();
    var diff = time_now - time_last;
    time_last = Date.now();
    
    var bubble_visible = speech_bubble.isVisible();
    var bubble_text = speech_bubble.children[1].getText();
    
    console.log("Click!", target.getId(), ", time diff:", diff, "ms");
    console.log("Bubble:", bubble_visible, bubble_text);
    
    // Note: Time difference should ba made to refer to last click in the DB so
    //       that it tells how much time player spent with that action
    //       (reading, for example)
    // TODO: Other data?
    /*
    "click": {
        "session": session,
        "target": target,
        "time_diff": diff,
        "bubble_visible": bubble_visible,
        "bubble_text": bubble_text
    }
    */
});

function random_string() {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var random_string = ''
    
    for (var i = 0; i < 16; i++) {
        var rand = Math.floor(Math.random() * chars.length);
        random_string += chars[rand];
    }
    
    return random_string;
}