export function InjectService(injectClass?: any) {
  return function (target: Object, propKey?: string) {
    if (propKey) {
      const targetClass = injectClass ?? (Reflect.getMetadata("design:type", target, propKey) || [])
      const params = Reflect.getMetadata("design:paramtypes", targetClass) || []
      const service = new targetClass(...params)

      Object.defineProperty(target, propKey, {
        value: service,
        writable: false,
      })
    }
  }
}
