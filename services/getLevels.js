export default function getLevels() {
    return fetch('/api/levels/')
        .then((response) => response.json());
}
