function genTable(json) {

	var table = document.createElement('table');
	var tr = document.createElement('tr');
	var th = document.createElement('th');
	th.textContent = 'First Name';
	tr.appendChild(th);
	var th = document.createElement('th');
	th.textContent = 'Last Name';
	tr.appendChild(th);
	table.appendChild(tr);

	for(var i in json.Students) {
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		td.textContent = json.Students[i].firstName;;
		tr.appendChild(td);
		var td = document.createElement('td');
		td.textContent = json.Students[i].lastName;
		tr.appendChild(td);
		table.appendChild(tr);
	}

	document.getElementById('maintable').appendChild(table);

}

fetch('https://sochigusa.github.io/JavaScript/json/students.json')
	.then(response => response.json())
	.then(json => genTable(json))
