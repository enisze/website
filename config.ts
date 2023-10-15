// @ts-ignore
const VERCEL_URL = process.env.VERCEL_URL

export const BASE_URL = VERCEL_URL
    ? `https://${VERCEL_URL}`
    : `http://localhost:3000`
