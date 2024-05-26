import { TvalQuest } from '../../../mock/listQuest'

/* eslint-disable lit/attribute-value-entities */
const Icon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"> <path fill="currentColor" d="M46.5 0v139.6h23.3c0-23.3 0-69.8 23.3-93.1c23.2-23.3 46.5-23.3 69.8-23.3h46.5v395.6c0 34.9-11.6 69.8-46.5 69.8h-22.8l-.5 23.2h232.7v-23.3H349c-34.9 0-46.5-34.9-46.5-69.8V23.3H349c23.3 0 46.5 0 69.8 23.3s23.3 69.8 23.3 93.1h23.3V0z" /> </svg>'
const Input = (name: string, type: string, value: string) => {
  return html`
    <label class="input input-bordered flex items-center gap-2 [&>*]:uppercase">
      ${type === 'text' ? Icon : '#'}
      <input
        type="${type}"
        class="grow"
        name="${name}"
        placeholder="${name.replace(/\./i, ' ')}"
        value="${value}"
        required />
    </label>
  `
}
export default (
  { id, title, point, description }: TvalQuest,
  type: 'update' | 'add',
) => {
  return html`
    <form
      class="md:w-1/3 md:m-auto p-3 leading-9 [&>*]:uppercase"
      id="${id || ''}">
      ${Input('title', 'text', title)}
      ${Input('point.success', 'number', String(point?.success || ''))}
      ${Input('point.fail', 'number', String(point?.fail || ''))}
      <!--prettier-ignore-->
      <textarea
        class="textarea textarea-bordered h-24 w-full"
        placeholder="description..."
        required>${description}</textarea>
      <button class="btn btn-success w-full m-3" id="add">${type}</button>
      <a href="#" class="btn btn-warning m-3">Back to Home</a>
      <a href="#" class="btn btn-error m-3">Delete</a>
    </form>
  `
}
