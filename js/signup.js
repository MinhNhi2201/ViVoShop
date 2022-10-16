function thong_bao(){
    var info={
        ten:document.getElementById("hoten").value,
        sdt:document.getElementById("sdt").value,
        mk:document.getElementsByClassName("mk").value,
    }   

    if(info.ten ==""){
        alert(" Bạn chưa nhập họ tên!")
        return false;
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
        
        alert("ĐĂNG KÝ THÀNH CÔNG!")


}
document.getElementById("submit").onclick = function(){
    thong_bao();
};




