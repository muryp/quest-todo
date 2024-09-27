/* eslint-disable lit/attribute-value-entities */
import Input from '../atoms/input'

interface Targs {
  title: string
  point?: number
  description: string
  type: 'update' | 'add'
}
export default function ({ title, point, description, type }: Targs) {
  return html`
    <form class="md:m-auto p-3 leading-9 [&>*]:uppercase w-full">
      ${Input('title', 'text', title)}
      ${Input('point', 'number', String(point || ''))}
      <!--prettier-ignore-->
      <textarea
        class="textarea textarea-bordered h-24 w-full"
        placeholder="description..."
        required>${description}</textarea>
      <button class="btn btn-success w-full" id="submit">${type}</button>
    </form>
  `
}
