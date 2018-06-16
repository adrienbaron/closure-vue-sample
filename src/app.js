import {Vue} from './vue';

new Vue({
    'el': '#counter',
    'data': {
        'counter': 10
    },
    'template': `
<div>
    {{ counter }}
    <div>
        <button @click="counter++">Add 1 to value</button>
        <button @click="counter = 0">Reset</button>
    </div>
</div>`
});
