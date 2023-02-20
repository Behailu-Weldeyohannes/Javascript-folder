/*
function getDate(){
    const date = new Date();
    return date;
}

const year = new Date().getFullYear();

export {getDate, year}
*/

export default function getDate() {
  const year = new Date().getFullYear();
  const date = `${new Date()}, year: ${year}`;
  return date;
}