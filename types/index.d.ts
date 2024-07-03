declare global {
  type ResponseJsonValue<T> = Awaited<ReturnType<Awaited<ReturnType<T>>["json"]>>
}

export {}
