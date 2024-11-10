import render from './render'

export default async function () {
  const mainEl = document.getElementById('main')!
  mainEl.innerHTML = ''
  render(1)
}
