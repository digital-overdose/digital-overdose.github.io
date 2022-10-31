const m = {};
const input = document.getElementById('input');
const response = document.getElementById('response');

const txt = 'Challenge by @Atomic_Maya for the ASV CTF';
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
            }, 250);
        }
    }

    if (!m[0](e.target.value, handler)) {
        handler({status: false});
    }
});
