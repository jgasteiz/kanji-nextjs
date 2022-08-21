export default function handler(req, res) {
    // TODO: move this to an environment variable.
    return fetch("https://8rilph.deta.dev/levels/")
        .then((response) => response.json())
        .then((data) => {
            return res.status(200).json(data);
        })
}
