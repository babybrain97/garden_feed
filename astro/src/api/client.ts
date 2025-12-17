import createClient from 'openapi-fetch'
import type { paths } from './schema'

export const strapiClient = createClient<paths>({
  baseUrl: `${import.meta.env.STRAPI_URL}/api`,
  headers: {
    Authorization: `Bearer ${import.meta.env.STRAPI_TOKEN}`,
  },
})