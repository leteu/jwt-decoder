function decodeToken<T extends object = object>(token: string): T {
  let base64Url: string

  if (token.match(/^[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*$/)) {
    base64Url = token.split('.')[1]
  } else if (token.match(/^[A-Za-z0-9-_]*$/)) {
    base64Url = token
  } else {
    console.log('token is not valid')
    return {} as T
  }

  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')

  try {
    const jsonString = decodeURIComponent(
      Array.from(atob(base64))
        .map((char) => `%${char.charCodeAt(0).toString(16).padStart(2, '0')}`)
        .join(''),
    )

    return JSON.parse(jsonString) as T
  } catch (error) {
    console.error('Failed to decode token:', error)

    return {} as T
  }
}

export { decodeToken }
export default decodeToken
