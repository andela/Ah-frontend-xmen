function parseDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

export default parseDate;

// function getPages(){
//   const pageNumbers = [];
//   const numberOfItems = this.props.itemCount;
//   for (let i = 1; i <= Math.ceil(numberOfItems / 10); i++) {
//       pageNumbers.push(i);
//   }
//   return pageNumbers;
// };

// export default getPages;
