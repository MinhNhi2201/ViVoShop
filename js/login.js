function thong_bao(){
    var info={
    sdt:document.getElementById("sdt").value,
    mk:document.getElementById("mk").value,
    }   
    
    if(info.mk ==""){
        alert(" Bạn chưa nhập mật khẩu!")
        return false;
    }
    var kiemTraDT = isNaN(info.sdt);
    if (info.sdt == "") {
    alert("Bạn chưa nhập số điện thoại");
    return false;
    }
    if (kiemTraDT == true) {
        alert("Điện thoại phải để ở định dạng số");
        return false;
        }
        
        alert("ĐĂNG NHẬP THÀNH CÔNG!")


}
document.getElementById("submit").onclick = function(){
    thong_bao();
};


document.getElementById("forget").onclick = function(){
    var r= confirm("Tạo mật khẩu mới ?","");
    if(r==true){
        prompt("Nhập số diện thoại");
        alert("Hãy chờ xác nhận!")
    }
    else return false;
};

