export function prices() {
    return fetch('/data/prices.json')
        .then(res => res.json())
}
