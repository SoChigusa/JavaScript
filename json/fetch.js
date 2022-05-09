import fetch from "node-fetch";

let response = await fetch('https://sochigusa.github.io/JavaScript/json/students.json');
if (response.ok) {
	let json = await response.json();
	console.log(json);
	console.log(json.Students[0].firstName);
	console.log(json.Students[0].lastName);
} else {
	alert("HTTP-Error: " + response.status);
}
