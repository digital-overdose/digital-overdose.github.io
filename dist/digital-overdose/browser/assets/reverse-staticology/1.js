const m = {};
const input = document.getElementById('input');
const response = document.getElementById('response');

const txt = 'Challenge reworked by @AtomicNicos for @d_overcon\nOriginal by @UnrealSec';
response.innerText = txt;

input.addEventListener('input', e =>{
    const handler = o => {
        if (o.status) {
            response.classList.add('green');
            response.innerText = `Congratulations!`;
        } else {
            response.classList.add('red');
            response.innerText = `Try again!`;

            setTimeout(()=>{
                response.classList = '';
                response.innerText = txt;
            }, 1000);
        }
    }

    if (!m[0](e.target.value, handler)) {
        handler({status: false});
    }
});