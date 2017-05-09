//===================
//  THE LONELY ACTION
//===================

//  TAKES IN THE INDEX OF A CHECkBOX,
//  SENDS IT OVER FOR STATE CHANGES
export function checked(i) {
  return {type: 'CHECKED', payload: {i}}
}
