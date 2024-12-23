const ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>'
export default function (isComplete: boolean) {
  if (isComplete) {
    return html`
      <div class="w-1/2 m-auto">
        <div role="alert" class="alert">
          <span>you don't have quest complete/uncomplete right now</span>
        </div>
        <a href="#" class="btn btn-success">Go to Home</a>
      </div>
    `
  }
  return html`
    <div class="w-1/2 m-auto">
      <div role="alert" class="alert">
        ${ICON}
        <span>you don't have task right now</span>
      </div>
      <a href="#quest/add" class="btn btn-success">Add new Task!</a>
    </div>
  `
}
