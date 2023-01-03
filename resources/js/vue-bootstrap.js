import {createApp} from 'vue'
import RootComponent from '../components/RootComponent';
import ExampleComponent from "../components/ExampleComponent";

const app = createApp(RootComponent);

app.component('example-component', ExampleComponent)

app.mount('#rootVueApp');
