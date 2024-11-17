import "reflect-metadata";
import RouteRegistry from "../utils/routeRegistry";
export function Controller(basePath) {
    return (target) => {
        const classTarget = target;
        const existingRoutes = Reflect.getMetadata("routes", target) || [];
        existingRoutes.forEach(({ path, methodName }) => {
            const fullPath = `${basePath}${path}`;
            const instance = new classTarget();
            RouteRegistry.register(fullPath, instance[methodName].bind(instance));
        });
    };
}
