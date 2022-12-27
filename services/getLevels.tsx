export default function getLevels(): Promise<string> {
    return fetch('/api/levels')
        .then((response) => {
            if (response.status == 200) {
                return response.json()
            }
        })
}