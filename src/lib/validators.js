export function hasSpecialChar(value = '') {
  const format = /[`~!#$%^&*()+=\[\]{};':"\\|,<>\/?]+/
  if (format.test(value)) {
    return false
  } else {
    return true
  }
}
