import type { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const levelName = request.query.name as string
    return fetch(`${process.env.KANJI_SRS_API_URL}/levels/${levelName}/`)
        .then(async (res) => response.status(res.status).json(await res.json()))
}
