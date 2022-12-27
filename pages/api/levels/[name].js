export default function handler(req, res) {
    return fetch(`${process.env.KANJI_SRS_API_URL}/levels/${req.query.name}/`)
        .then((response) => response.json())
        .then((data) => {
            return res.status(200).json(data);
        })
}
