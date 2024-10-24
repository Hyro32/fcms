import { CollectionConfig } from 'payload/types'

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title'
  },
  labels: {
    singular: {
      en: 'Post',
      es: 'Publicación'
    },
    plural: {
      en: 'Posts',
      es: 'Publicaciones'
    }
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: {
        en: 'Title',
        es: 'Título'
      }
    },
    {
      name: 'description',
      type: 'text',
      required: true,
      label: {
        en: 'Description',
        es: 'Descripción'
      }
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: {
        en: 'Image',
        es: 'Imagen'
      }
    },
    {
      name: 'date',
      type: 'date',
      defaultValue: () => new Date(),
      admin: {
        date: {
          pickerAppearance: 'dayOnly'
        }
      },
      label: {
        en: 'Date',
        es: 'Fecha'
      }
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: {
        en: 'Content',
        es: 'Contenido'
      }
    },
    {
      name: 'slug',
      type: 'text',
      required: true
    }
  ]
}

export default Posts
