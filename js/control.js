function changeSpeed(input, span, video) {
    input.addEventListener('input', function (e) {
        let v = e.currentTarget.value;
        video.playbackRate = v;
        span.innerText = 'x' + parseFloat(v).toFixed(1);

    })
}

function createSpeedControl() {
    let node = document.createElement('div');
    let input = document.createElement('input');
    input.id = 'speedInput';
    input.type = 'range';
    input.value = 1.0;
    input.min = 0.4;
    input.max = 8;
    input.step = 0.2;
    node.appendChild(input);
    let span = document.createElement('span');
    span.id = 'speedSpan';
    span.innerText = 'x1.0';
    node.appendChild(span);
    return node;
}

function initSpeedControl(parent, site) {
    parent.insertBefore(createSpeedControl(), parent.childNodes[site]);
    changeSpeed(
        document.getElementById('speedInput'),
        document.getElementById('speedSpan'),
        document.getElementsByTagName('video')[0]
    );
}

window.onload = function () {
    setTimeout(
        () => {
            let dom = {
                control: document.getElementsByClassName('PlayerControlsNeo__button-control-row')[0]
            };
            initSpeedControl(dom.control, 4);
        },
        6000
    )
}
// chrome.runtime.sendMessage({"message": "activate_icon"});
