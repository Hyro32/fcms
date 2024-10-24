export const getMedia = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/media')
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

export const getPosts = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/posts')
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}
