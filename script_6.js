let data1={};

let category={};

let groups ={};

let gr ={};

let cat_drop = document.getElementById("category");
let sec_row = document.querySelector(".secrow");

let gr_drop = document.getElementById("group");
let third_row = document.querySelector(".thirdrow");

let fifth_row = document.querySelector(".fifthrow");
let con = document.querySelector(".mycontainer");

let col = document.createElement("div");
col.className = "col-lg-3";

console.log(cat_drop.innerHTML);
console.log(gr_drop.innerHTML);

async function res(){

let data = await fetch("https://emojihub.yurace.pro/api/all");
data1 = await data.json();
console.log(data1);

for(let i=0; i<data1.length; i++){
	category[data1[i].category] = "value";
}

console.log(category);

let category_key = Object.keys(category);
console.log(category_key);

for(let i=0; i<category_key.length; i++){
	cat_drop.innerHTML = `${cat_drop.innerHTML}
	<option value="${category_key[i]}">${category_key[i]}</option>`;
	
}

}

res();

cat_drop.addEventListener("change",group);

function group(){
	
	console.log(cat_drop.value);
	groups={};
	groups = data1.filter((item) => {
		if(item.category == cat_drop.value){
			return item;
		}
	});
	console.log(groups);

	gr={};
	for(let i=0; i<groups.length; i++){
		gr[groups[i].group]="value";
	} 
	console.log(gr);

	let group_key = Object.keys(gr);
	console.log(group_key);

	gr_drop.innerHTML=`<option value="NA"></option>`;

	for(let i=0; i<group_key.length; i++){
		gr_drop.innerHTML = `${gr_drop.innerHTML}
		<option value="${group_key[i]}">${group_key[i]}</option>`;
	}
}

async function foo(){
	console.log(col.innerHTML);
	console.log(cat_drop.value);
	console.log(gr_drop.value);
	console.log(ra.value);
	
	if(cat_drop.value == "NA"){
		if(ra.value == "random"){
		let data = await fetch(`https://emojihub.yurace.pro/api/${ra.value}`);
		let val = await data.json();
		console.log(val);
		fifth_row.innerHTML ="";
		col.innerHTML = `<h5>Name: ${val.name}</h5>
		<p style="text-align:center;">${val.htmlCode}</p>
		<p> Category:${val.category}</p>
		<p> Group:${val.group}</p>`;
		fifth_row.append(col);
		}
		else{
		fifth_row.innerHTML ="";
		let data = await fetch(`https://emojihub.yurace.pro/api/${ra.value}`);
		let val = await data.json();
		console.log(val);
		for(let i=0; i<val.length; i++){
		let col = document.createElement("div");
		col.className = "col-lg-3";
		col.innerHTML = `${col.innerHTML}
		<h5>Name: ${val[i].name}</h5>
		<p style="text-align:center;">${val[i].htmlCode}</p>
		<p> Category:${val[i].category}</p>
		<p> Group:${val[i].group}</p>`;
		fifth_row.append(col);
		}
		}
	}
	else if(gr_drop.value == "NA"){
		if(ra.value == "random"){
		let data = await fetch(`https://emojihub.yurace.pro/api/${ra.value}/category/${cat_drop.value}`);
		let val = await data.json();
		console.log(val);
		fifth_row.innerHTML ="";
		col.innerHTML = `<h5>Name: ${val.name}</h5>
		<p style="text-align:center;">${val.htmlCode}</p>
		<p> Category:${val.category}</p>
		<p> Group:${val.group}</p>`;
		fifth_row.append(col);
		}
		else{
		fifth_row.innerHTML ="";
		let data = await fetch(`https://emojihub.yurace.pro/api/${ra.value}/category/${cat_drop.value}`);
		let val = await data.json();
		console.log(val);
		for(let i=0; i<val.length; i++){
		let col = document.createElement("div");
		col.className = "col-lg-3";
		col.innerHTML = `<h5>Name: ${val[i].name}</h5>
		<p style="text-align:center;">${val[i].htmlCode}</p>
		<p> Category:${val[i].category}</p>
		<p> Group:${val[i].group}</p>`;
		fifth_row.append(col);
		}
		}
	}
	else {
		if(ra.value == "random"){
		let data = await fetch(`https://emojihub.yurace.pro/api/${ra.value}/group/${gr_drop.value}`);
		let val = await data.json();
		console.log(val);
		fifth_row.innerHTML ="";
		col.innerHTML = `<h5>Name: ${val.name}</h5>
		<p style="text-align:center;">${val.htmlCode}</p>
		<p> Category:${val.category}</p>
		<p> Group:${val.group}</p>`;
		fifth_row.append(col);
		}
		else{
		fifth_row.innerHTML ="";
		let data = await fetch(`https://emojihub.yurace.pro/api/${ra.value}/group/${gr_drop.value}`);
		let val = await data.json();
		console.log(val);
		for(let i=0; i<val.length; i++){
		let col = document.createElement("div");
		col.className = "col-lg-3";
		col.innerHTML = `<h5>Name: ${val[i].name}</h5>
		<p style="text-align:center;">${val[i].htmlCode}</p>
		<p> Category:${val[i].category}</p>
		<p> Group:${val[i].group}</p>`;
		fifth_row.append(col);
		}
		}
	}
}






