const readDiaryButton = document.getElementById('read-diary-button')
const writeEntryButton = document.getElementById('write-entry-button')

readDiaryButton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('button clicked')
    window.location.assign('/diary/client/diary.html')
})

writeEntryButton.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.assign('/diary/client/create.html')
})