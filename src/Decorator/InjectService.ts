export function InjectService(classService: any) {
  return function (target: Object, propKey?: string, index?: number) {
    const params = Reflect.getMetadata('design:paramtypes', classService) || []
    const service = new classService(...params)
    if (typeof index === 'undefined' && propKey) {
      Object.defineProperty(target, propKey, {
        value: service,
        writable: false,
      })
      return
    }
  }
}
