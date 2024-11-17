import "reflect-metadata";

// Decorador para rutas GET
export function Get(path: string): MethodDecorator {
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
      const routes: any[] = Reflect.getMetadata("routes", target.constructor) || [];
      
      routes.push({
        method: 'GET',
        path,
        handler: propertyKey
      });
      
      Reflect.defineMetadata("routes", routes, target.constructor);
      return descriptor;
    };
  }

// Decorador para rutas POST
export function Post(path: string): MethodDecorator {
  return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const routes: any[] = Reflect.getMetadata("routes", target.constructor) || [];
    routes.push({ method: 'POST', path, handler: propertyKey });
    Reflect.defineMetadata("routes", routes, target.constructor);
    return descriptor;
  };
}

// Decorador para rutas PUT
export function Put(path: string): MethodDecorator {
  return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const routes: any[] = Reflect.getMetadata("routes", target.constructor) || [];
    routes.push({ method: 'PUT', path, handler: propertyKey });
    Reflect.defineMetadata("routes", routes, target.constructor);
    return descriptor;
  };
}

// Decorador para rutas DELETE
export function Delete(path: string): MethodDecorator {
  return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const routes: any[] = Reflect.getMetadata("routes", target.constructor) || [];
    routes.push({ method: 'DELETE', path, handler: propertyKey });
    Reflect.defineMetadata("routes", routes, target.constructor);
    return descriptor;
  };
}
