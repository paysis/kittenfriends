export function getKittens() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
}