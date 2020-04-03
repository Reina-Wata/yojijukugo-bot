function myFunction() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('シート1');
  
  var lastRow = sheet.getLastRow();
   
  for(var i = 2; i <= lastRow; i++) {
    if(!sheet.getRange(i, 4).getValue()){ 
      var body = sheet.getRange(i, 1).getValue();
      var yomi = sheet.getRange(i, 2).getValue();
      
      sheet.getRange(i, 4).setValue(true);
      break;
    }
  }
  
  if(i >= lastRow) {
    sheet.getRange(2, 4, lastRow - 1).clearContent();
  }

  var url = 'xxxxxxxxxxxxxx'; 
  var params = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({text: body+'('+yomi+')'})
  };
 
  UrlFetchApp.fetch(url, params);
}

