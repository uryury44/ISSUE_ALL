<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
</head>
<body>
<div>
  <form id="myForm">
    <input type="file" name="file" id="file"/>
    <button type="submit">上傳檔案</button>
  </form>
</div>
</body>
<script>
$(function(){
  $("#myForm").submit(function(e){
    e.preventDefault(); // 停止觸發submit
    console.log("upload");
    var formData = new FormData($("#myForm")[0]); // 使用FormData包裝form表單來傳輸資料
    $.ajax({
      type: "POST",
      url: "upload",
      data:formData,
      cache:false, // 不需要cache
      processData: false, // jQuery預設會把data轉為query String, 所以要停用
      contentType: false, // jQuery預設contentType為'application/x-www-form-urlencoded; charset=UTF-8', 且不用自己設定為'multipart/form-data'
      dataType: 'text',
      success: function (data){
        console.log(data);
      }      
    });
  });
});
</script>
</html>
