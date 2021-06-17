let arr=[12,19,-3,29,0,-5,65,34,120];
function merge(st,mid,end){
	
	let arr1=[];
	for(let i=st;i<=mid;i++){
		arr1.push(arr[i]);
	}
	let arr2=[];
	for(let j=mid+1;j<=end;j++){
		arr2.push(arr[j]);
	}
	let p1=0;p2=0;
	arr3=[];
	while(p1<arr1.length&&p2<arr2.length){
		if (arr1[p1]<arr2[p2]) {
			arr3.push(arr1[p1]);
			p1=p1+1;
		}
		else{
			arr3.push(arr2[p2]);
			p2=p2+1;
		}
	}
	while(p1<arr1.length){
		arr3.push(arr1[p1]);
		p1=p1+1;
	}
	while(p2<arr2.length){
		arr3.push(arr2[p2]);
		p2=p2+1;
	}
	for(let i=st;i<=end;i++){
		arr[i]=arr3[i-st];
	}
	return ;
}

function mergesort(st,end) {
	
	if (end-st===0) {
		return;
	}
	else if (end-st===1) {
		if (arr[st]>arr[end]) {
			let x=arr[st];
			arr[st]=arr[end];
			arr[end]=x;
			return;
		}
		else{
			return;
		}
	}
	let l=st;let h=end;
	let mid=Math.floor((l+h)/2);

	mergesort(st,mid);
	mergesort(mid+1,end);
	merge(st,mid,end);
}

console.log(arr);
mergesort(0,arr.length-1);
console.log(arr);