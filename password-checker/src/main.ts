import './style.css'
import { checkPassword } from './check.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Password checker</h1>
    <div class="card">

    </div>

  </div>
`
checkPassword


