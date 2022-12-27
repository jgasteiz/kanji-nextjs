export default function getLevel(levelName) {
    return fetch(`/api/levels/${levelName}`)
        .then((response) => response.json());
}
