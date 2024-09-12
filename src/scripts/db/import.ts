const getDb = () => {}

export function importDownlod() {
  // Your text in the variable foo
  const getDb = 'This is the text you want to download.'

  // Create a Blob object with the text
  const blob = new Blob([getDb], { type: 'text/plain' })

  // Create a link element
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob)
  link.download = 'quest.json'

  // Append the link to the body
  document.body.appendChild(link)

  // Programmatically click the link to trigger the download
  link.click()

  // Remove the link from the document
  document.body.removeChild(link)
}
export function importCopy() {}