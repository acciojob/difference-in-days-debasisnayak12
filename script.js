var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const date1Ms = new Date(date1);
	const date2Ms = new Date(date2);

	const diffMs = date1Ms.getTime() - date2Ms.getTime();
	const diffDays = diffMs / (1000*60*60*24);
	 
	return diffDays;
  
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");

alert(dateDiffInDays(dateOne, dateTwo));
