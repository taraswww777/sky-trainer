import {createApp} from 'vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faBars,
    faMagnifyingGlass,
    faRightToBracket,
    faPen,
    faPhone,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import {
    faUser, faClock
} from '@fortawesome/free-regular-svg-icons'
import RootComponent from '../vue/RootComponent';
import * as allComponents from "../vue/components";
import {router} from './vue-router-config'
import {registerComponents} from "./vue-bootstrap-utils";

const app = createApp(RootComponent);

app.use(router);

library.add(faBars, faMagnifyingGlass, faRightToBracket, faPen, faEnvelope, faPhone);
library.add(faUser, faClock);

app.component('Fa', FontAwesomeIcon);

registerComponents(app)(allComponents);


app.mount('#rootVueApp');
