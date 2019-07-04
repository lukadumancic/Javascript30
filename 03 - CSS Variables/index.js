const inputs = document.querySelectorAll('.controls input')

const handleUpdate = (input) => {
  const suffix = input.dataset.sizing || ''
  document.documentElement.style.setProperty(`--${input.name}`, input.value + suffix)
}

inputs.forEach((input) => input.addEventListener('change', () => handleUpdate(input)))
inputs.forEach((input) => input.addEventListener('mousemove', () => handleUpdate(input)))