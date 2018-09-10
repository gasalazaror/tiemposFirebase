import { Injectable } from '@angular/core';

declare var jsPDF: any;



@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor() { }

   generate() {

    var doc = new jsPDF('p', 'pt');
  
    var res = doc.autoTableHtmlToJson(document.getElementById("basic-table"));
    doc.autoTable(res.columns, res.data, {margin: {top: 80}});
  
    var header = function(data) {
      doc.setFontSize(18);
      doc.setTextColor(40);
      doc.setFontStyle('normal');
      //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
      doc.text("Testing Report", data.settings.margin.center, 50);
    };
  
    var options = {
      beforePageContent: header,
      margin: {
        top: 80
      },
      startY: doc.autoTableEndPosY() + 20
    };
  
    doc.autoTable(res.columns, res.data, options);
  
    doc.save("table.pdf");
  }
  
  comapnyJSON={
    CompanyName:'ABCD TECHONOLOGIES',
    CompanyGSTIN:'37B76C238B7E1Z5',
    CompanyState:'KERALA (09)',
    CompanyPAN:'B76C238B7E',
    CompanyAddressLine1:'ABCDEFGD HOUSE,IX/642-D',
    CompanyAddressLine2:'ABCDEFGD P.O., NEDUMBASSERY',
    CompanyAddressLine3:'COCHIN',
    PIN: '683584',
    companyEmail:'xyz@gmail.com',
    companyPhno:'+918189457845',
  };
  
   customer_BillingInfoJSON={
    CustomerName:'Jino Shaji',
    CustomerGSTIN:'37B76C238B7E1Z5',
    CustomerState:'KERALA (09)',
    CustomerPAN:'B76C238B7E',
    CustomerAddressLine1:'ABCDEFGD HOUSE,IX/642-D',
    CustomerAddressLine2:'ABCDEFGD P.O., NEDUMBASSERY',
    CustomerAddressLine3:'COCHIN',
    PIN: '683584',
    CustomerEmail:'abcd@gmail.com',
    CustomerPhno:'+918189457845',
  };
  
  
   customer_ShippingInfoJSON={
    CustomerName:'Jino Shaji',
    CustomerGSTIN:'37B76C238B7E1Z5',
    CustomerState:'KERALA (09)',
    CustomerPAN:'B76C238B7E',
    CustomerAddressLine1:'ABCDEFGD HOUSE,IX/642-D',
    CustomerAddressLine2:'ABCDEFGD P.O., NEDUMBASSERY',
    CustomerAddressLine3:'COCHIN',
    PIN: '683584',
    CustomerEmail:'abcd@gmail.com',
    CustomerPhno:'+918189457845',
  };
  
  
   invoiceJSON={
    InvoiceNo:'INV-120152',
    InvoiceDate:'03-12-2017',
    RefNo:'REF-78445',
    TotalAmnt:'Rs.1,24,200',
    SubTotalAmnt:'Rs.1,04,200',
    TotalGST:'Rs.2,0000',
    TotalCGST:'Rs.1,0000',
    TotalSGST:'Rs.1,0000',
    TotalIGST:'Rs.0',
    TotalCESS:'Rs.0',
  }
  
   company_logo = {
    src1:'https://upload.wikimedia.org/wikipedia/commons/8/85/Nick_%28Logo%29.png',
    w: 80,
    h: 50
  };
  
   fontSizes={
    HeadTitleFontSize:18,
    Head2TitleFontSize:16,
    TitleFontSize:14,
    SubTitleFontSize:12,
    NormalFontSize:10,
    SmallFontSize:8
  };
   
   lineSpacing={
    NormalSpacing:12,
  };
  
   generate_cutomPDF() {
    
      var doc = new jsPDF('p', 'pt');
    
      var rightStartCol1=400;
      var rightStartCol2=480;
  
  
      var InitialstartX=40;
      var startX=40;
      var InitialstartY=50;
      var startY=0;
  
      var lineHeights=12;
  
 
      doc.setFontSize(this.fontSizes.SubTitleFontSize);
      doc.setFont('times');
      doc.setFontType('bold');
      
      //pdf.addImage(agency_logo.src, 'PNG', logo_sizes.centered_x, _y, logo_sizes.w, logo_sizes.h);
      doc.addImage(this.company_logo.src1, 'PNG', startX,startY+=50, this.company_logo.w,this.company_logo.h);
  
      doc.textAlign(this.comapnyJSON.CompanyName, {align: "left"}, startX, startY+=15+this.company_logo.h);
      doc.setFontSize(this.fontSizes.NormalFontSize);
      doc.textAlign("GSTIN", {align: "left"}, startX, startY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
     // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
      doc.textAlign(this.comapnyJSON.CompanyGSTIN, {align: "left"}, 80, startY);
      
      doc.setFontType('bold');
      doc.textAlign("STATE", {align: "left"}, startX, startY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.textAlign(this.comapnyJSON.CompanyState, {align: "left"}, 80, startY);
  
      doc.setFontType('bold');
      doc.textAlign("PAN", {align: "left"}, startX, startY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.textAlign(this.comapnyJSON.CompanyPAN, {align: "left"}, 80, startY);
  
      // doc.setFontType('bold');
      // doc.textAlign("Address", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
      // doc.setFontType('normal');
      // doc.textAlign(comapnyJSON.CompanyAddressLine1, {align: "left"}, 80, startY);
      // doc.textAlign(comapnyJSON.CompanyAddressLine2, {align: "left"}, 80, startY+=lineSpacing.NormalSpacing);
      // doc.textAlign(comapnyJSON.CompanyAddressLine3, {align: "left"}, 80, startY+=lineSpacing.NormalSpacing);
       
      doc.setFontType('bold');
      doc.textAlign("PIN", {align: "left"}, startX, startY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.textAlign(this.comapnyJSON.PIN, {align: "left"}, 80, startY);
      
      doc.setFontType('bold');
      doc.textAlign("EMAIL", {align: "left"}, startX, startY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.textAlign(this.comapnyJSON.companyEmail, {align: "left"}, 80, startY);
  
      doc.setFontType('bold');
      doc.textAlign("Phone: ", {align: "left"}, startX, startY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.textAlign(this.comapnyJSON.companyPhno, {align: "left"}, 80, startY);
  
     var tempY=InitialstartY;
  
  
      doc.setFontType('bold');
      doc.textAlign("INVOICE NO: ", {align: "left"},  rightStartCol1, tempY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.textAlign(this.invoiceJSON.InvoiceNo, {align: "left"}, rightStartCol2, tempY);
  
  
      doc.setFontType('bold');
      doc.textAlign("INVOICE Date: ", {align: "left"},  rightStartCol1, tempY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.textAlign(this.invoiceJSON.InvoiceDate, {align: "left"}, rightStartCol2, tempY);
  
      doc.setFontType('bold');
      doc.textAlign("Reference No: ", {align: "left"},  rightStartCol1, tempY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.textAlign(this.invoiceJSON.RefNo, {align: "left"}, rightStartCol2, tempY);
  
      doc.setFontType('bold');
      doc.textAlign("Total: ", {align: "left"},  rightStartCol1, tempY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.textAlign(this.invoiceJSON.TotalAmnt, {align: "left"}, rightStartCol2, tempY);
      // doc.writeText(0, tempY+=lineSpacing.NormalSpacing ,"INVOICE No  :  "+invoiceJSON.InvoiceNo + '     ', { align: 'right' });
      // doc.writeText(0, tempY+=lineSpacing.NormalSpacing ,"INVOICE Date: "+invoiceJSON.InvoiceDate + '     ', { align: 'right' });
      // doc.writeText(0, tempY+=lineSpacing.NormalSpacing ,"Reference No: "+invoiceJSON.RefNo + '     ', { align: 'right' });
      // doc.writeText(0, tempY+=lineSpacing.NormalSpacing ,"Total       :  Rs. "+invoiceJSON.TotalAmnt + '     ', { align: 'right' });
     
      doc.setFontType('normal');
     
      doc.setLineWidth(1);
     // doc.line(20, startY+lineSpacing.NormalSpacing, 580, startY+=lineSpacing.NormalSpacing);
      doc.line(20, startY+this.lineSpacing.NormalSpacing, 220, startY+this.lineSpacing.NormalSpacing);
      doc.line(380, startY+this.lineSpacing.NormalSpacing, 580, startY+this.lineSpacing.NormalSpacing);
     
      doc.setFontSize(this.fontSizes.Head2TitleFontSize);
      doc.setFontType('bold');
      doc.textAlign("TAX INVOICE", {align: "center"}, startX, startY+=this.lineSpacing.NormalSpacing+2);
       
      doc.setFontSize(this.fontSizes.NormalFontSize);
      doc.setFontType('bold');
  
      //-------Customer Info Billing---------------------
     var startBilling=startY;
  
      doc.textAlign("Billing Address,", {align: "left"}, startX, startY+=this.lineSpacing.NormalSpacing);
      doc.textAlign(this.customer_BillingInfoJSON.CustomerName, {align: "left"}, startX, startY+=this.lineSpacing.NormalSpacing);
      doc.setFontSize(this.fontSizes.NormalFontSize);
      doc.textAlign("GSTIN", {align: "left"}, startX, startY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
     // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
      doc.textAlign(this.customer_BillingInfoJSON.CustomerGSTIN, {align: "left"}, 80, startY);
      
     
      // doc.setFontType('bold');
      // doc.textAlign("PAN", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
      // doc.setFontType('normal');
      // doc.textAlign(customer_BillingInfoJSON.CustomerPAN, {align: "left"}, 80, startY);
  
      doc.setFontType('bold');
      doc.textAlign("Address", {align: "left"}, startX, startY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.textAlign(this.customer_BillingInfoJSON.CustomerAddressLine1, {align: "left"}, 80, startY);
      doc.textAlign(this.customer_BillingInfoJSON.CustomerAddressLine2, {align: "left"}, 80, startY+=this.lineSpacing.NormalSpacing);
      doc.textAlign(this.customer_BillingInfoJSON.CustomerAddressLine3, {align: "left"}, 80, startY+=this.lineSpacing.NormalSpacing);
       
      doc.setFontType('bold');
      doc.textAlign("STATE", {align: "left"}, startX, startY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.textAlign(this.customer_BillingInfoJSON.CustomerState, {align: "left"}, 80, startY);
  
      doc.setFontType('bold');
      doc.textAlign("PIN", {align: "left"}, startX, startY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.textAlign(this.customer_BillingInfoJSON.PIN, {align: "left"}, 80, startY);
      
      doc.setFontType('bold');
      doc.textAlign("EMAIL", {align: "left"}, startX, startY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.textAlign(this.customer_BillingInfoJSON.CustomerEmail, {align: "left"}, 80, startY);
  
      doc.setFontType('bold');
      doc.textAlign("Phone: ", {align: "left"}, startX, startY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.textAlign(this.customer_BillingInfoJSON.CustomerPhno, {align: "left"}, 80, startY);
  
      
  
      //-------Customer Info Shipping---------------------
      var rightcol1=340;
      var rightcol2=400;
  
      startY=startBilling;
      doc.setFontType('bold');
      doc.textAlign("Shipping Address,", {align: "left"}, rightcol1, startY+=this.lineSpacing.NormalSpacing);
      doc.textAlign(this.customer_BillingInfoJSON.CustomerName, {align: "left"}, rightcol1, startY+=this.lineSpacing.NormalSpacing);
      doc.setFontSize(this.fontSizes.NormalFontSize);
      doc.setFontType('bold');
      doc.textAlign("GSTIN", {align: "left"}, rightcol1, startY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
     // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
      doc.textAlign(this.customer_BillingInfoJSON.CustomerGSTIN, {align: "left"},rightcol2, startY);
      
     
      // doc.setFontType('bold');
      // doc.textAlign("PAN", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
      // doc.setFontType('normal');
      // doc.textAlign(customer_BillingInfoJSON.CustomerPAN, {align: "left"}, 80, startY);
  
      doc.setFontType('bold');
      doc.textAlign("Address", {align: "left"}, rightcol1, startY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.textAlign(this.customer_BillingInfoJSON.CustomerAddressLine1, {align: "left"}, rightcol2, startY);
      doc.textAlign(this.customer_BillingInfoJSON.CustomerAddressLine2, {align: "left"}, rightcol2, startY+=this.lineSpacing.NormalSpacing);
      doc.textAlign(this.customer_BillingInfoJSON.CustomerAddressLine3, {align: "left"}, rightcol2, startY+=this.lineSpacing.NormalSpacing);
       
      doc.setFontType('bold');
      doc.textAlign("STATE", {align: "left"}, rightcol1, startY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.textAlign(this.customer_BillingInfoJSON.CustomerState, {align: "left"}, rightcol2, startY);
  
      doc.setFontType('bold');
      doc.textAlign("PIN", {align: "left"}, rightcol1, startY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.textAlign(this.customer_BillingInfoJSON.PIN, {align: "left"}, rightcol2, startY);
      
      doc.setFontType('bold');
      doc.textAlign("EMAIL", {align: "left"}, rightcol1, startY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.textAlign(this.customer_BillingInfoJSON.CustomerEmail, {align: "left"}, rightcol2, startY);
  
      doc.setFontType('bold');
      doc.textAlign("Phone: ", {align: "left"}, rightcol1, startY+=this.lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.textAlign(this.customer_BillingInfoJSON.CustomerPhno, {align: "left"}, rightcol2, startY);
  
      
  
  
      var header = function(data) {
        doc.setFontSize(8);
        doc.setTextColor(40);
        doc.setFontStyle('normal');
       // doc.textAlign("TAX INVOICE", {align: "center"}, data.settings.margin.left, 50);
   
        //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
       // doc.text("Testing Report", 110, 50);
      };
     // doc.autoTable(res.columns, res.data, {margin: {top:  startY+=30}});
     doc.setFontSize(8);
     doc.setFontStyle('normal');
     
      var options = {
        beforePageContent: header,
        margin: {
          top: 50 
        },
        styles: {
          overflow: 'linebreak',
          fontSize: 8,
          rowHeight: 'auto',
          columnWidth: 'wrap'
        },
        columnStyles: {
          1: {columnWidth: 'auto'},
          2: {columnWidth: 'auto'},
          3: {columnWidth: 'auto'},
          4: {columnWidth: 'auto'},
          5: {columnWidth: 'auto'},
          6: {columnWidth: 'auto'},
        },
        startY: startY+=50
      };
    
      var columns = [
        {title: "ID", dataKey: "id",width: 90},
        {title: "Product", dataKey: "Product",width: 40}, 
        {title: "Rate/Item", dataKey: "Rate/Item",width: 40}, 
        {title: "Qty", dataKey: "Qty",width: 40}, 
        {title: "Dsnt", dataKey: "Dsnt",width: 40}, 
        {title: "S.Total", dataKey: "STotal",width: 40}, 
        {title: "CGST", dataKey: "CGST",width: 40}, 
        {title: "SGST", dataKey: "SGST",width: 40}, 
        {title: "IGST", dataKey: "IGST",width: 40}, 
        {title: "CESS", dataKey: "CESS",width: 40}, 
        {title: "Total", dataKey: "Total",width: 40}, 
    ];
    var rows = [
      {"id": 1, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10","Qty" : "12","Dsnt":"0","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 2, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10","Qty" : "12","Dsnt":"0","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 3, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": '', "Product": "", "Rate/Item": "Total","Qty" : "","Dsnt":"20","STotal":"360","CGST":60,"SGST":60,"IGST":0,"CESS":60,"Total":680},
   
    ];
  
    // columnStyles: {
    //   id: {fillColor: 255}
    // },
    
    doc.autoTable(columns, rows, options);   //From dynamic data.
    // doc.autoTable(res.columns, res.data, options); //From htmlTable
    
  
  
    //-------Invoice Footer---------------------
    var rightcol1=340;
    var rightcol2=430;
  
    startY=doc.autoTableEndPosY()+30;
    doc.setFontSize(this.fontSizes.NormalFontSize);
    
    doc.setFontType('bold');
    doc.textAlign("Sub Total,", {align: "left"}, rightcol1, startY+=this.lineSpacing.NormalSpacing);
    doc.textAlign(this.invoiceJSON.SubTotalAmnt, {align: "left"}, rightcol2, startY);
    doc.setFontSize(this.fontSizes.NormalFontSize);
    doc.setFontType('bold');
    doc.textAlign("CGST Rs.", {align: "left"}, rightcol1, startY+=this.lineSpacing.NormalSpacing);
    doc.setFontType('normal');
   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
    doc.textAlign(this.invoiceJSON.TotalCGST, {align: "left"},rightcol2, startY);
    
  
    doc.setFontType('bold');
    doc.textAlign("SGST Rs.", {align: "left"}, rightcol1, startY+=this.lineSpacing.NormalSpacing);
    doc.setFontType('normal');
   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
    doc.textAlign(this.invoiceJSON.TotalSGST, {align: "left"},rightcol2, startY);
    
    doc.setFontType('bold');
    doc.textAlign("IGST Rs.", {align: "left"}, rightcol1, startY+=this.lineSpacing.NormalSpacing);
    doc.setFontType('normal');
   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
    doc.textAlign(this.invoiceJSON.TotalIGST, {align: "left"},rightcol2, startY);
    
  
    doc.setFontType('bold');
    doc.textAlign("CESS Rs.", {align: "left"}, rightcol1, startY+=this.lineSpacing.NormalSpacing);
    doc.setFontType('normal');
   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
    doc.textAlign(this.invoiceJSON.TotalCESS, {align: "left"},rightcol2, startY);
    
    doc.setFontType('bold');
    doc.textAlign("Total GST Rs.", {align: "left"}, rightcol1, startY+=this.lineSpacing.NormalSpacing);
    doc.setFontType('normal');
   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
    doc.textAlign(this.invoiceJSON.TotalGST, {align: "left"},rightcol2, startY);
    
  
    doc.setFontType('bold');
    doc.textAlign("Grand Total Rs.", {align: "left"}, rightcol1, startY+=this.lineSpacing.NormalSpacing);
    doc.setFontType('normal');
   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
    doc.textAlign(this.invoiceJSON.TotalAmnt, {align: "left"},rightcol2, startY);
    doc.setFontType('bold');
    doc.textAlign('For '+this.comapnyJSON.CompanyName+',', {align: "center"},rightcol2, startY+=this.lineSpacing.NormalSpacing+50);
    doc.textAlign('Authorised Signatory', {align: "center"},rightcol2, startY+=this.lineSpacing.NormalSpacing+50);
    
      doc.save("invoice.pdf");
  }
  
  
}
