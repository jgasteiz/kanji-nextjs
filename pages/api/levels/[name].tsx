import type { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const levelName = request.query.name as string
    return fetch(`${process.env.KANJI_SRS_API_URL}/wanikani/levels/${levelName}/subjects/`)
        .then(async (res) => {
            const json = {levelName: levelName, subjects: await res.json()}
            return response.status(res.status).json(json)
        })
}
