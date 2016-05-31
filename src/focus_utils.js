import moment from 'moment'

export function nextFocus (current, key) {

  switch (key) {
  case 'ArrowUp':
    return current.clone().subtract(7, 'days');;
    break;
  case 'ArrowDown':
    return current.clone().add(7, 'days');;
    break;
  case 'ArrowLeft':
    return current.clone().subtract(1, 'days');;
    break;
  case 'ArrowRight':
    return current.clone().add(1, 'days');;
    break;
  default:

  }

}
