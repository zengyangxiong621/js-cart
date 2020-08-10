/**
 * 全选功能
 * 
 */
let checkAll = document.querySelector(".checkall");
let checkBoxes = document.querySelectorAll(".item_checkbox");
let items = document.querySelectorAll('.item');
let minuses = document.querySelectorAll('.num_minus');
let pluses = document.querySelectorAll('.num_plus');

checkAll.checked = false;


//全选
checkAll.onclick = function(){
	
	checkBoxes.forEach(function(checkBox){
		checkBox.checked = checkAll.checked;	
	});
	updatePrice();	
}
//给checkBoxes一个循环，判断每一个checkBox是否被选中，若有一个不是被选中，则跳出循环
//若一遍循环完，每个都被选中则checkAll为被选中的状态。
/* checkBoxes.forEach(function(checkBox){
	checkBox.onclick = function () {
		checkBoxes.forEach(function(checkBox){
			if(!checkBox.checked){
				checkAll.checked = false;
				throw 'Jump out now!';
			}else{
				checkAll.checked = true;
			}
		});
		
		updatePrice();	
	}
}); */
        for (var i = 0; i < checkBoxes.length; i++) {
            checkBoxes[i].onclick = function () {
                for (var j = 0; j < checkBoxes.length; j++) {
                    if (!checkBoxes[j].checked) {
                        checkAll.checked = false;
                        break;
                    } else {
                        checkAll.checked = true;
                    }
                }
                updatePrice();
            }
        }
//结算
function updatePrice(){
	let totalNum = 0;
	let totalPrice = 0;
	items.forEach(function(item){
		if(item.querySelector('.item_checkbox').checked){
			let num  = item.querySelector('.num').value;
			totalNum = totalNum + parseInt(num);
			let price = item.querySelector('.price_2').getAttribute('data-price');
			totalPrice = totalPrice + parseFloat(price) * num;
		}
		
	});
	document.querySelector('.checked_num').innerText = totalNum;
	document.querySelector('.total_price').innerText = totalPrice;
	
}

/* minuses.forEach(function(minus){
	minus.onclick() = function(){
		let num = minus.parentElement.querySelector('.num').value;
		if(parseInt(num)>1){
			num = parseInt(num) - 1;
			updatePrice();
		}
		
	}	
}); */
minuses.forEach(function(minus){
	minus.onclick = function(){
		let num = minus.parentElement.querySelector('.num').value;
		if(parseInt(num)>1){
			minus.parentElement.querySelector('.num').value = parseInt(num) - 1;
			updatePrice();
		}
	};
});
pluses.forEach(function(plus){
	plus.onclick = function(){
		let num = plus.parentElement.querySelector('.num').value;
		plus.parentElement.querySelector('.num').value = parseInt(num) + 1;
		updatePrice();
	};
});



/* function updatePrice(){
	items.forEach(function(item){
		if(item.querySelector('.item_checkbox').checked){
			alert(66);

		}
	});
} */