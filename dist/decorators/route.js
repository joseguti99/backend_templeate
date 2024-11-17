import "reflect-metadata";
export function Route({ paths }) {
    return (target, propertyKey, descriptor) => {
        const existingRoutes = Reflect.getMetadata("routes", target.constructor) || [];
        paths.forEach((path) => {
            existingRoutes.push({ path, methodName: propertyKey });
        });
        Reflect.defineMetadata("routes", existingRoutes, target.constructor);
        return descriptor;
    };
}
