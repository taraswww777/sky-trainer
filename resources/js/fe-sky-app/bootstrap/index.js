import {createApp} from 'vue/dist/vue.esm-bundler'
// import {createApp} from 'vue'
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
    faSpinner,
    faXmark
} from '@fortawesome/free-solid-svg-icons'
import {
    faFolderClosed,
    faUser, faClock, faIdBadge,
} from '@fortawesome/free-regular-svg-icons'
import RootComponent from '../RootComponent.vue';
import * as allComponents from "../components";
import {registerComponents} from "./bootstrap-utils";
import {appRouter} from '../app-router'
import {appStore} from "../app-store";

export const initFeSkyApp = (rootSelector) => {

    const app = createApp(RootComponent);

    app.use(appRouter);
    app.use(appStore);

    library.add(
        faBars, faMagnifyingGlass, faRightToBracket, faInfo,
        faPen, faEnvelope, faPhone, faXmark, faIdBadge,
        faUser, faClock, faChartPie, faFolderClosed, faSpinner
    );

    app.component('Fa', FontAwesomeIcon);

    registerComponents(app)(allComponents);


    app.mount(rootSelector);
}
