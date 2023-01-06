import {createApp} from 'vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faBars,
    faMagnifyingGlass,
    faRightToBracket,
    faPen,
    faPhone,
    faEnvelope,
    faChartPie,
    faInfo,
    faXmark
} from '@fortawesome/free-solid-svg-icons'
import {
    faFolderClosed,
    faUser, faClock, faIdBadge,
} from '@fortawesome/free-regular-svg-icons'
import RootComponent from '../vue/RootComponent';
import * as allComponents from "../vue/components";
import {router} from './vue-router-config'
import {registerComponents} from "./vue-bootstrap-utils";

const app = createApp(RootComponent);

app.use(router);

library.add(
    faBars, faMagnifyingGlass, faRightToBracket, faInfo,
    faPen, faEnvelope, faPhone, faXmark, faIdBadge,
    faUser, faClock, faChartPie, faFolderClosed
);

app.component('Fa', FontAwesomeIcon);

registerComponents(app)(allComponents);


app.mount('#rootVueApp');
