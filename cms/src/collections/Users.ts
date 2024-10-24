import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email'
  },
  labels: {
    singular: {
      en: 'User',
      es: 'Usuario'
    },
    plural: {
      en: 'Users',
      es: 'Usuarios'
    }
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ]
}

export default Users
