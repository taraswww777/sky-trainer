import {createApp} from 'vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faBars, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faUser, faClock} from '@fortawesome/free-regular-svg-icons'
import RootComponent from '../vue/RootComponent';
import * as allComponents from "../vue/components";

const app = createApp(RootComponent);

function registerComponents(components) {
    const componentKeys = Object.keys(components);
    componentKeys.forEach((key) => {
        app.component(key, components[key]);
    });
}

library.add(faBars, faMagnifyingGlass);
library.add(faUser, faClock);

app.component('Fa', FontAwesomeIcon);

registerComponents(allComponents);


app.mount('#rootVueApp');
