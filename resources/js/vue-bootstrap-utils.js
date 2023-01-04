export const registerComponents = (app) => (components) => {
    const componentKeys = Object.keys(components);
    componentKeys.forEach((key) => {
        app.component(key, components[key]);
    });
}
