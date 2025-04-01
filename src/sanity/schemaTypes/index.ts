import { type SchemaTypeDefinition } from 'sanity'
import event from './event'
import sponsor from './sponsor'
import navbar from './navbar'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event,sponsor, navbar],
}
