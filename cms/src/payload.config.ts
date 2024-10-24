import path from 'path'
import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import Media from './collections/Media'
import Player from './collections/Player'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler()
  },
  editor: slateEditor({}),
  collections: [Users, Media, Player],
  localization: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    fallback: true
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI
  })
})
