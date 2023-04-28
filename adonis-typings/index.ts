declare module "@ioc:Adonis/Utils" {
  function InjectService(model: any): (target: Object, propKey?: string, index?: number) => void

  export { InjectService }
}
