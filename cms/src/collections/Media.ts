import { CollectionConfig } from 'payload/types'

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*']
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'alt',
      type: 'text'
    }
  ]
}

export default Media
