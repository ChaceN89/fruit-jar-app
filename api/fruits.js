export default async function handler(req, res) {
  const FRUITS_API_PATH = process.env.FRUITS_API_PATH
  const FRUITS_API_KEY = process.env.FRUITS_API_KEY

  if (!FRUITS_API_PATH || !FRUITS_API_KEY) {
    return res.status(500).json({
      ok: false,
      status: 500,
      error: 'Missing environment variables',
      details: {
        FRUITS_API_PATH: FRUITS_API_PATH ?? '❌ undefined',
        FRUITS_API_KEY: FRUITS_API_KEY ? '[REDACTED]' : '❌ undefined',
      },
    })
  }

  try {
    const upstreamHeaders = {
      'x-api-key': FRUITS_API_KEY,
    }

    const response = await fetch(FRUITS_API_PATH, {
      method: 'GET',
      headers: upstreamHeaders,
    })

    const rawBody = await response.text()

    // If the upstream failed, pass back as detailed error
    if (!response.ok) {
      return res.status(response.status).json({
        ok: false,
        status: response.status,
        error: 'Upstream API error',
        upstreamBody: rawBody,
        upstreamStatus: response.status,
        upstreamHeaders: Object.fromEntries(response.headers.entries()),
        requestHeaders: upstreamHeaders,
        targetUrl: FRUITS_API_PATH,
      })
    }

    // Success case
    const data = JSON.parse(rawBody)
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({
      ok: false,
      status: 500,
      error: 'Proxy request failed',
      message: err.message,
      stack: err.stack,
      meta: {
        FRUITS_API_PATH,
        FRUITS_API_KEY: FRUITS_API_KEY ? '[REDACTED]' : '❌ undefined',
      },
    })
  }
}
