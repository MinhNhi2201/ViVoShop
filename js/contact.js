document.getElementById("submit").addEventListener("click", () => {
    let name = document.getElementById("hoten").value;
    let sodth = document.getElementById("sodth").value;
    let email = document.getElementById("mail").value;
    let noidung = document.getElementById("nd").value;
  
   window.confirm(
      `
          Họ và tên: ${name}
          Số điện thoại: ${sodth}
          Email: ${email}
          Nội dung góp ý: 
          ${noidung}
          `
    );
  });
  
