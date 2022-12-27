import { Level } from "../types"


export default function getLevel(levelName: string): Promise<Level> {
    return fetch(`/api/levels/${levelName}`)
        .then((response) => {
            if (response.status == 200) {
                return response.json()
            }
        })
}