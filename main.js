//BT01: Tìm ngày tháng năm ngày tiếp theo

var btnTim = document.getElementById("btnTim").addEventListener("click",function(e){
    e.preventDefault();
    var ngay        = parseInt(document.getElementById("inputNgay").value) ;
    var thang       = parseInt(document.getElementById("inputThang").value) ;
    var nam         = parseInt(document.getElementById("inputNam").value) ;
    var txtTim      = document.getElementById("txtTim");
    var ngayTrongThang, thongBao;
    var ngayQua,thangQua,namQua;
    var ngayMai,thangMai,namMai;

    
    switch(thang){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: 
            ngayTrongThang = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            ngayTrongThang = 30;
            break;
        case 2:
            if((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0){
                ngayTrongThang = 29;
            }else{
                ngayTrongThang = 28;
            }
            break;
    }

    if(nam < 0 || (thang < 1 || thang > 12) || (ngay < 1 || ngay > ngayTrongThang)){
        txtTim.setAttribute("class","alert alert-danger");
        thongBao = "nhập sai";
        txtTim.innerHTML = thongBao;
    }else{
        ngayQua  = ngay - 1;
        thangQua = thang;
        namQua   = nam;
        if(ngayQua == 0){
            thangQua = thang - 1;
            ngayQua  = ngayTrongThang;
            if(thangQua == 0){
                thangQua = 12;
                namQua   = nam - 1;
                ngayQua  = ngayTrongThang;
            }
        }

        ngayMai  = ngay + 1;
        thangMai = thang;
        namMai   = nam;
        if(ngayMai > ngayTrongThang){
            ngayMai     = 1;
            thangMai    = thang + 1;
            if(thangMai > 12){
                ngayMai  = 1;
                thangMai = 1;
                namMai   = nam + 1;
            }
        }


        thongBao = "ngày hôm sau "+ngayMai+"/"+thangMai+"/"+namMai+"<br/>";
        thongBao += "ngày hôm trước "+ngayQua+"/"+thangQua+"/"+namQua;
        txtTim.setAttribute("class","alert alert-success");
        txtTim.innerHTML = thongBao;
    }
    

});


//=========================================================
//BT02: BT02: Tìm tháng đó có bao nhiêu ngày

var btnTinh = document.getElementById("btnTinh").addEventListener("click",function(e){
    e.preventDefault();
    
    var thang       = parseInt(document.getElementById("inputMonth").value) ;
    var nam         = parseInt(document.getElementById("inputYear").value) ;
    var txtTinh     = document.getElementById("txtTinh");
    var thongBao2;
    var ngayTrongThang;
    switch(thang){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: 
            ngayTrongThang = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            ngayTrongThang = 30;
            break;
        case 2:
            if((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0){
                ngayTrongThang = 29;
            }else{
                ngayTrongThang = 28;
            }
            break;
    }

    thongBao2 = "tháng: "+thang+" có "+ngayTrongThang+" ngày";
    txtTinh.setAttribute("class","alert alert-success");
    txtTinh.innerHTML = thongBao2;

});


//===================================================
//BT03: Đọc ra 3 số nguyên
var btnDoc = document.getElementById("btnDoc").addEventListener("click",function(e){
    e.preventDefault();

    var num        = parseInt(document.getElementById("inputNum").value) ;
    var txtDoc     = document.getElementById("txtDoc");
    var donVi,chuc,tram,thongBao3;
    var docDonVi, docChuc, docTram;

    donVi   = num % 10;
    num     /= 10;
    chuc    = Math.floor(num % 10);
    tram    = Math.floor(num / 10);

    if(chuc == 0 && donVi == 0){
        docTram = "Một Trăm";
        thongBao3 = docTram;
    }else if(chuc <= 1 && donVi == 0){
        docTram = "Một Trăm Mười";
        thongBao3 = docTram;
    }else{
        switch(tram){
            case 1:
                docTram = "Một Trăm ";
                break;
            case 2:
                docTram = "Hai Trăm ";
                break;
            case 3:
                docTram = "Ba Trăm ";
                break;
            case 4:
                docTram = "Bốn Trăm ";
                break;
            case 5:
                docTram = "Năm Trăm ";
                break;
            case 6:
                docTram = "Sáu Trăm ";
                break;
            case 7:
                docTram = "Bảy Trăm ";
                break;
            case 8:
                docTram = "Tám Trăm ";
                break;
            case 9:
                docTram = "Chín Trăm ";
                break;
        }

        switch(chuc){
            case 0:
                docChuc = "Lẻ ";
                break;
            case 1:
                docChuc = "Mười ";
                break;
            case 2:
                docChuc = "Hai ";
                break;
            case 3:
                docChuc = "Ba ";
                break;
            case 4:
                docChuc = "Bốn ";
                break;
            case 5:
                docChuc = "Năm ";
                break;
            case 6:
                docChuc = "Sáu ";
                break;
            case 7:
                docChuc = "Bảy ";
                break;
            case 8:
                docChuc = "Tám ";
                break;
            case 9:
                docChuc = "Chín ";
                break;
        }

        switch(donVi){
            case 0:
                docDonVi = "Mươi";
                break;
            case 1:
                docDonVi = "Một ";
                break;
            case 2:
                docDonVi = "Hai ";
                break;
            case 3:
                docDonVi = "Ba ";
                break;
            case 4:
                docDonVi = "Bốn ";
                break;
            case 5:
                docDonVi = "Năm ";
                break;
            case 6:
                docDonVi = "Sáu ";
                break;
            case 7:
                docDonVi = "Bảy ";
                break;
            case 8:
                docDonVi = "Tám ";
                break;
            case 9:
                docDonVi = "Chín ";
                break;
        }
        
        thongBao3 = docTram + docChuc + docDonVi;
    } 
    
    txtDoc.setAttribute("class","alert alert-success");
    txtDoc.innerHTML = thongBao3;
    

});


//===================================================
//BT03: Tìm tọa độ xa nhất
var btnXaNhat = document.getElementById("btnXaNhat").addEventListener("click",function(e){
    e.preventDefault();

    var toaDo          = parseInt(document.getElementById("inputToaDo").value) ;
    var inputSV1       = parseInt(document.getElementById("inputSV1").value) ;
    var inputSV2       = parseInt(document.getElementById("inputSV2").value) ;
    var inputSV3       = parseInt(document.getElementById("inputSV3").value) ;
    var inputTenSV1    = document.getElementById("inputTenSV1").value ;
    var inputTenSV2    = document.getElementById("inputTenSV2").value ;
    var inputTenSV3    = document.getElementById("inputTenSV3").value ;
    var toaDo          = parseInt(document.getElementById("inputToaDo").value)

    var txtXaNhat   = document.getElementById("txtXaNhat");
    var thongBao4,maxTen;
    max     = inputSV1;
    maxTen  = inputTenSV1;

    if(max > inputSV2){
        max     = inputSV2;
        maxTen  = inputTenSV2;
    }
        
    if(max > inputSV3){
        max     = inputSV3;
        maxTen  = inputTenSV3;
    }

    if(toaDo < max){
        if(max < inputSV2){
            max     = inputSV2;
            maxTen  = inputTenSV2;
        }
            
        if(max < inputSV3){
            max     = inputSV3;
            maxTen  = inputTenSV3;
        }
    }
    
    txtXaNhat.setAttribute("class","alert alert-success");
    txtXaNhat.innerHTML = "sinh vien xa nhất tên: "+maxTen + " có tọa độ "+max;
    

});