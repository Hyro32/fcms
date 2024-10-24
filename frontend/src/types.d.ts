interface Image {
  id: string
  filename: string
  mimeType: string
  filesize: number
  width: number
  height: number
  focalX: number
  focalY: number
  createdAt: string
  updatedAt: string
  alt: string
  url: string
}

interface Post {
  id: string
  title: string
  description: string
  image: Image
  date: string
  content: []
  slug: string
}
