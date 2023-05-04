

async function getEntries() {
    let entries;
    await fetch("http://localhost:5000/entries")
        .then(res => res.json())
        .then(data => {
            entries = data
            entries.forEach(entry => {
                createPost(entry);
            })
        })
}
getEntries()

function createPost(data) {
    const container = document.getElementById('entry-container')

    const body = document.createElement('div')
    body.classList.add('card-body')

    const title = document.createElement('h5')
    title.classList.add('card-title')
    title.textContent = data.title

    const category = document.createElement('h6')
    category.classList.add('card-subtitle', 'mb-2', 'text-muted')
    category.textContent = data.category

    const entry = document.createElement('p')
    entry.classList.add('card-text')
    entry.textContent = data.entry

    const date = document.createElement('p')
    date.classList.add('card-text', 'text-muted')
    date.textContent = data.date

    const button = document.createElement('button')
    button.classList.add('btn', 'btn-secondary', 'btn-sm')
    button.type = button

    const elements = [title, category, entry, date, button]
    elements.forEach((element) => {
        body.appendChild(element)
        container.appendChild(body)
    })

}