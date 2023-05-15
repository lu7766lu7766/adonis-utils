export function InjectService(injectClass?: any) {
  return function (target: Object, propKey?: string) {
    if (propKey) {
      const targetClass = injectClass ?? (Reflect.getMetadata("design:type", target, propKey) || [])
      const params = Reflect.getMetadata("design:paramtypes", targetClass) || []
      const recursionInject = (params) => {
        return params.map((p) => {
          const dp = Reflect.getMetadata("design:paramtypes", p)
          if (dp) {
            return new p(...recursionInject(dp))
          } else {
            return new p()
          }
        })
      }

      const service = new targetClass(...recursionInject(params))

      Object.defineProperty(target, propKey, {
        value: service,
        writable: false,
      })
    }
  }
}
