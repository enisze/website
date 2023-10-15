// @ts-ignore
const VERCEL_URL = import.meta.env.NEXT_PUBLIC_VERCEL_URL

export const BASE_URL = VERCEL_URL
    ? `https://${VERCEL_URL}`
    : `http://localhost:3000`
