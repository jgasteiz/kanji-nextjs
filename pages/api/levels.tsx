import type { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    return fetch(`${process.env.KANJI_SRS_API_URL}/wanikani/levels/`)
        .then(async (res) => response.status(res.status).json(await res.json()))
}
