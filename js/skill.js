//建立对象
function formobj() {
	this.school = "大连民族大学";
	this.sub = "计算机";
	this.offer = "本科";
	this.timein = "03/03/2019";
	this.timeout = "04/03/2019";
}
//全局变量
var ob;
var arr = []; //存放对象
var brr = []; //存放备份
var count = 0; //自增变量
//添加数据
function addData() {
	if(judge() == false) {
		return;
	} else {
		var table = document.createElement("table");
		table.id = "t" + count;
		var hr = document.createElement("hr");
		hr.id = "h" + count;
		table.border = "0";

		var tr, td;
		tr = table.insertRow(table.rows.length);
		var obj = new formobj();
		for(var i = 0; i < 5; i++) {
			td = tr.insertCell(tr.cells.length);
			if(i == 0) {
				td.width = 150;
				var result = '<font face="微软雅黑" style="letter-spacing: normal;">' + $("#txt1").val() + '</font>';
				td.innerHTML = result;
				obj.school = $('#txt1').val();

			}
			if(i == 1) {
				td.width = 100;
				var result = '<font face="微软雅黑" >' + $("#txt4").val() + '</font>';
				td.innerHTML = result;
				obj.sub = $("#txt4").val();
			}
			if(i == 2) {
				td.width = 50;
				var result = '<font face="微软雅黑">' + document.getElementById("sel1").value + '</font>';
				td.innerHTML = result;
				obj.offer = $("#sel1").val();
			}
			if(i == 3) {
				td.width = 240;
				var result = $("#datepicker1").val() + "-" + $("#datepicker2").val();
				td.innerHTML = result;
				obj.timein = $("#datepicker1").val();
				obj.timeout = $("#datepicker2").val();
			}

			function tabobj() {
				this.school = obj.school;
				this.offer = obj.offer;
				this.timein = obj.timein;
				this.timeout = obj.timeout;
				this.sub = obj.sub;
			}
			ob = new tabobj();
			arr[count] = ob;
			brr[count] = ob;
			if(i == 4) {
				td.width = 150;
				var result = '<button style="float:right;cursor: pointer;" id="' + count + '" onclick="upData(id)">' + '<font color = "red">' + "编辑" + '</font>' + '</button>'
				td.innerHTML = result;
			}
		}
		document.querySelector("#showData").appendChild(table);
		document.querySelector("#showData").appendChild(hr);
		cleanSpace();
		count++;
		console.log(table.id);
	}

}
//清空当前表单数据
function cleanSpace() {
	getid("txt1").value = "";
	getid("datepicker1").value = "";
	getid("datepicker2").value = "";
	getid("sel1").value = "初中";
	getid("txt4").value = "";
}
//修改功能
function upData(id) {

	for(var i = 0; i < count; i++) {
		if(i == id) {
			getid("txt1").value = arr[i].school;
			getid("datepicker1").value = arr[i].timein;
			getid("datepicker2").value = arr[i].timeout;
			getid("sel1").value = arr[i].offer;
			getid("txt4").value = arr[i].sub;
			getid("t" + i).innerHTML = "";
			$("#h" + i).remove();
		}
	}
}
//获取id
function getid(id) {
	return document.getElementById(id);
}
//判断
function judge() {
	var str1 = "大学";
	var str2 = "中学";
	var str3 = "高中";
	var str4 = "中科院";
	
	if($("#txt1").val() == "") {
		layer.confirm("就读学校不能为空!!!");
		return false;
	}
	if($("#datepicker1").val() == "") {
		layer.confirm("入学时间不能为空!!!");
		return false;
	}
	if($('#txt1').val().indexOf(str1) != -1 || $('#txt1').val().indexOf(str4) != -1) {
		if($("#sel1").val() != "本科" && $("#sel1").val() != "研究生") {
			layer.confirm("学历非法");
			return false;
		}
	} else if($('#txt1').val().indexOf(str2) != -1) {
		if($("#sel1").val() != "初中") {
			layer.confirm("学历非法");
			return false;
		}
	} else if($('#txt1').val().indexOf(str3) != -1) {
		if($("#sel1").val() != "高中") {
			layer.confirm("学历非法");
			return false;
		}
	} else {
		layer.confirm("请输入合法学校名称");
		return false;
	}

	if($("#datepicker2").val() == "") {
		layer.confirm("毕业时间不能为空!!!");
		return false;
	}
	if($("#txt4").val() == "") {
		layer.confirm("专业名称不能为空!!!");
		return false;
	}
	return true;

}
//保存修改数据
function save() {
	if(confirm("是否保存数据?") == true) {
		addData();
	}
}
//撤销操作
function undo() {
	if(confirm("是否取消操作?") == true) {
		cleanSpace();
	}
}