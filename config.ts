// @ts-ignore
const VERCEL_URL = process.env.VERCEL_URL

const VERCEL_ENV = process.env.VERCEL_ENV

export const BASE_URL =
    VERCEL_ENV === 'production'
        ? `https://zejnilovic.de`
        : `http://localhost:3000`
