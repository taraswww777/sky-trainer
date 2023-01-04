import {createApp} from 'vue'
import RootComponent from '../vue/RootComponent';
import * as allComponents from "../vue/components";

const app = createApp(RootComponent);

function registerComponents(components){
    const componentKeys = Object.keys(components);
    componentKeys.forEach((key) => {
        app.component(key, components[key]);
    });
}

registerComponents(allComponents);


app.mount('#rootVueApp');
