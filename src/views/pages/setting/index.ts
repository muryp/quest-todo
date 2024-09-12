import { ICON_CLIPBOARD, ICON_DL } from '../../atoms/icon'

export default html`
  <div id="main-setting">
    <h2>import settings</h2>
    <div class="m-3">
      <div id="import-dl" class="btn btn-info btn-sm m-3">
        ${ICON_DL}download
      </div>
      <div id="import-cp" class="btn btn-info btn-sm m-3">
        ${ICON_CLIPBOARD}copy
      </div>
    </div>
    <h2>export settings</h2>
    <div class="m-3">
      <div class="btn btn-info btn-sm m-3 w-full">upload by file</div>
      <textarea
        class="textarea textarea-bordered w-full h-32"
        placeholder="Paste Your JSON in here..."></textarea>
      <div class="btn btn-info btn-sm m-3">upload</div>
    </div>
    <h2>Template</h2>
    <div>list templete</div>
    <div class="btn btn-info btn-sm m-3 w-full">add template</div>
  </div>
`
