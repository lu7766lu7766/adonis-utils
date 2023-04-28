declare module "@ioc:Adonis/Utils" {
  function InjectService(model?: any): (target: Object, propKey?: string) => void

  export { InjectService }
}
