import type { CollectionConfig } from 'payload'

export const Hero: CollectionConfig = {
  slug: 'hero',
  fields: [
    {
      name: 'title',
      type: 'text',
    }
  ],
  access: {
    read: () => {
      return true
    },
  },
}