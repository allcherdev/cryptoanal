let t = document.querySelector('.transfer');
let tCount = document.querySelector('.transfer__count');
let tAmount = document.querySelector('.transfer__amount');
let atc = document.querySelector('.transfer__atc');

let button = document.querySelector('.export');
let jsonData = document.querySelector('.json_data');
let json = "";

button.addEventListener('click', (e) => {
	e.preventDefault();

	let json = JSON.parse(jsonData.value).data;
	let url = undefined;

	if ( json.ethereum ) {
		url = json.ethereum.transfers;
	}
	if ( json.binance ) {
		url = json.binance.transfers;
	}

	function sum(arr, url, int) {

		for ( let a in url ) {
			if ( int == 1 ) {
				arr.push(url[a].count);
			}
			if ( int == 2 ) {
				arr.push(url[a].amount);
			}
		}

		return arr.map(i=>x+=i, x=0).reverse()[0];
	}

	let	generalCountTransfer = sum([], url, 1);
	let	generalAmountTransfer = sum([], url, 2);

	tCount.innerText = `${generalCountTransfer.toLocaleString('en-US')}`;
	tAmount.innerText = `${generalAmountTransfer.toLocaleString('en-US')}$`;
	let a = generalCountTransfer / generalAmountTransfer;
	
	atc.innerText = `${parseFloat(generalCountTransfer / generalAmountTransfer).toFixed(2)}$`;

})