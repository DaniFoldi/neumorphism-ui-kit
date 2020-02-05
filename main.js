addEventListener('load', async () => {
  document.querySelectorAll('.neu-checkbox').forEach(el => el.addEventListener('click', async () => {
    if (el.getAttribute('data-checked') === 'false')
      el.setAttribute('data-checked', 'true')
    else
      el.setAttribute('data-checked', 'false')
  }))
  document.querySelectorAll('.neu-radio').forEach(el => el.addEventListener('click', async () => {
    const group = el.getAttribute('data-group')
    const selected = document.querySelector(`.neu-radio[data-group="${group}"][data-selected="true"]`)
    selected && selected.setAttribute('data-selected', 'false')
    el.setAttribute('data-selected', 'true')
  }))
})
