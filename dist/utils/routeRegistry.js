class RouteRegistry {
    static register(path, handler) {
        this.routes[path] = handler;
    }
    static getRoutes() {
        return this.routes;
    }
}
RouteRegistry.routes = {};
export default RouteRegistry;
