// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    components: collection({
      label: 'Components',
      slugField: 'name',
      path: 'src/content/components/*',
      format: { contentField: 'description' },
      schema: {
        name: fields.slug({ name: { label: 'Component Name' } }),
        title: fields.text({ label: 'Display Title' }),
        shortDescription: fields.text({
          label: 'Short Description',
          multiline: true,
        }),
        description: fields.markdoc({ 
          label: 'Full Description',
        }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Stable', value: 'stable' },
            { label: 'Beta', value: 'beta' },
            { label: 'Alpha', value: 'alpha' },
            { label: 'Deprecated', value: 'deprecated' },
          ],
          defaultValue: 'alpha',
        }),
      },
    }),
  },
});