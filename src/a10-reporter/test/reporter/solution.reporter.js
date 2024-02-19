const success = '🍾'
const fail = '🐛'

export default async function* reporter(source) {
  for await (const event of source) {
    switch (event.type) {
      case 'test:pass':
        yield success
        break
      case 'test:fail':
        yield fail
        break
      default:
        break
    }
  }
}
