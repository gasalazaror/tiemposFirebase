import { Injectable } from '@angular/core';
import { PersonaService } from '../persona.service';
import { DatePipe } from '@angular/common';
import { FormatTimePipe } from '../../pipes/format-time.pipe';
import { AnadirCerosPipe } from '../../pipes/anadir-ceros.pipe';

var jsPDF = require('jspdf')
require('jspdf-autotable')



@Injectable({
  providedIn: 'root'
})
export class ReporteService {


  comapnyJSON = {
    CompanyName: '',
    CompanyGSTIN: '',
    CompanyState: '',
    companyEmail: '',
    companyPhno: '',
  };

  constructor(private personaService: PersonaService) {

    personaService.obtenerEmpresa().valueChanges().subscribe(empresa => {
      this.comapnyJSON = {
        CompanyName: empresa.nombre,
        CompanyGSTIN: empresa.ruc,
        CompanyState: empresa.direccion,
        companyEmail: empresa.correo,
        companyPhno: empresa.telefono,
      };
    })
  }





  customer_BillingInfoJSON = {
    CustomerName: 'Jino Shaji',
    CustomerGSTIN: '37B76C238B7E1Z5',
    CustomerState: 'KERALA (09)',
    CustomerPAN: 'B76C238B7E',
    CustomerAddressLine1: 'ABCDEFGD HOUSE,IX/642-D',
    CustomerAddressLine2: 'ABCDEFGD P.O., NEDUMBASSERY',
    CustomerAddressLine3: 'COCHIN',
    PIN: '683584',
    CustomerEmail: 'abcd@gmail.com',
    CustomerPhno: '+918189457845',
  };


  customer_ShippingInfoJSON = {
    CustomerName: 'Jino Shaji',
    CustomerGSTIN: '37B76C238B7E1Z5',
    CustomerState: 'KERALA (09)',
    CustomerPAN: 'B76C238B7E',
    CustomerAddressLine1: 'ABCDEFGD HOUSE,IX/642-D',
    CustomerAddressLine2: 'ABCDEFGD P.O., NEDUMBASSERY',
    CustomerAddressLine3: 'COCHIN',
    PIN: '683584',
    CustomerEmail: 'abcd@gmail.com',
    CustomerPhno: '+918189457845',
  };


  invoiceJSON = {
    InvoiceNo: '',
    InvoiceDate: '',

  }

  company_logo = {
    src1: 'https://firebasestorage.googleapis.com/v0/b/kanban-8cf8b.appspot.com/o/sinFoto.png?alt=media&token=e3507d10-e278-431c-b03e-7beb87fd1dcb',
    w: 80,
    h: 50
  };

  fontSizes = {
    HeadTitleFontSize: 18,
    Head2TitleFontSize: 16,
    TitleFontSize: 14,
    SubTitleFontSize: 12,
    NormalFontSize: 10,
    SmallFontSize: 8
  };

  lineSpacing = {
    NormalSpacing: 12,
  };

  reporteCliente(orden) {
    this.invoiceJSON = {
      InvoiceNo: 'OT-' + new AnadirCerosPipe().transform(orden.data.numero, 5),
      InvoiceDate: new DatePipe('en-US').transform(orden.data.fecha.seconds * 1000, 'dd/MM/yyyy'),

    }

    var doc = new jsPDF('p', 'pt');

    doc.page = 1; // use this as a counter.

    

    var rightStartCol1 = 400;
    var rightStartCol2 = 480;


    var InitialstartX = 40;
    var startX = 40;
    var InitialstartY = 50;
    var startY = 0;

    var lineHeights = 12;


    doc.setFontSize(this.fontSizes.SubTitleFontSize);
    doc.setFont('times');
    doc.setFontType('bold');

    //pdf.addImage(agency_logo.src, 'PNG', logo_sizes.centered_x, _y, logo_sizes.w, logo_sizes.h);
    // doc.addImage(this.company_logo.src1, 'PNG', startX,startY+=50, this.company_logo.w,this.company_logo.h);

    doc.textAlign(this.comapnyJSON.CompanyName, { align: "left" }, startX, startY += 15 + this.company_logo.h);
    doc.setFontSize(this.fontSizes.NormalFontSize);
    doc.textAlign("RUC", { align: "left" }, startX, startY += this.lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
    doc.textAlign(this.comapnyJSON.CompanyGSTIN, { align: "left" }, 85, startY);

    doc.setFontType('bold');
    doc.textAlign("Dirección", { align: "left" }, startX, startY += this.lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(this.comapnyJSON.CompanyState, { align: "left" }, 85, startY);

    // doc.setFontType('bold');
    // doc.textAlign("Address", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
    // doc.setFontType('normal');
    // doc.textAlign(comapnyJSON.CompanyAddressLine1, {align: "left"}, 80, startY);
    // doc.textAlign(comapnyJSON.CompanyAddressLine2, {align: "left"}, 80, startY+=lineSpacing.NormalSpacing);
    // doc.textAlign(comapnyJSON.CompanyAddressLine3, {align: "left"}, 80, startY+=lineSpacing.NormalSpacing);

    doc.setFontType('bold');
    doc.textAlign("Email", { align: "left" }, startX, startY += this.lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(this.comapnyJSON.companyEmail, { align: "left" }, 85, startY);

    doc.setFontType('bold');
    doc.textAlign("Teléfono: ", { align: "left" }, startX, startY += this.lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(this.comapnyJSON.companyPhno, { align: "left" }, 85, startY);

    var tempY = InitialstartY;


    doc.setFontType('bold');
    doc.textAlign("Orden de Trabajo ", { align: "left" }, rightStartCol1, tempY += this.lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(this.invoiceJSON.InvoiceNo, { align: "left" }, rightStartCol2, tempY);


    doc.setFontType('bold');
    doc.textAlign("Fecha OT: ", { align: "left" }, rightStartCol1, tempY += this.lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(this.invoiceJSON.InvoiceDate, { align: "left" }, rightStartCol2, tempY);



    // doc.writeText(0, tempY+=lineSpacing.NormalSpacing ,"INVOICE No  :  "+invoiceJSON.InvoiceNo + '     ', { align: 'right' });
    // doc.writeText(0, tempY+=lineSpacing.NormalSpacing ,"INVOICE Date: "+invoiceJSON.InvoiceDate + '     ', { align: 'right' });
    // doc.writeText(0, tempY+=lineSpacing.NormalSpacing ,"Reference No: "+invoiceJSON.RefNo + '     ', { align: 'right' });
    // doc.writeText(0, tempY+=lineSpacing.NormalSpacing ,"Total       :  Rs. "+invoiceJSON.TotalAmnt + '     ', { align: 'right' });

    doc.setFontType('normal');

    doc.setLineWidth(1);
    // doc.line(20, startY+lineSpacing.NormalSpacing, 580, startY+=lineSpacing.NormalSpacing);
    doc.line(20, startY + this.lineSpacing.NormalSpacing, 220, startY + this.lineSpacing.NormalSpacing);
    doc.line(380, startY + this.lineSpacing.NormalSpacing, 580, startY + this.lineSpacing.NormalSpacing);

    doc.setFontSize(this.fontSizes.Head2TitleFontSize);
    doc.setFontType('bold');
    doc.textAlign("Orden de Trabajo", { align: "center" }, startX, startY += this.lineSpacing.NormalSpacing + 2);

    doc.setFontSize(this.fontSizes.NormalFontSize);
    doc.setFontType('bold');

    //-------Customer Info Billing---------------------
    var startBilling = startY;

    doc.textAlign("Billing Address,", { align: "left" }, startX, startY += this.lineSpacing.NormalSpacing);
    doc.textAlign(this.customer_BillingInfoJSON.CustomerName, { align: "left" }, startX, startY += this.lineSpacing.NormalSpacing);
    doc.setFontSize(this.fontSizes.NormalFontSize);
    doc.textAlign("GSTIN", { align: "left" }, startX, startY += this.lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
    doc.textAlign(this.customer_BillingInfoJSON.CustomerGSTIN, { align: "left" }, 80, startY);


    // doc.setFontType('bold');
    // doc.textAlign("PAN", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
    // doc.setFontType('normal');
    // doc.textAlign(customer_BillingInfoJSON.CustomerPAN, {align: "left"}, 80, startY);

    doc.setFontType('bold');
    doc.textAlign("Address", { align: "left" }, startX, startY += this.lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(this.customer_BillingInfoJSON.CustomerAddressLine1, { align: "left" }, 80, startY);
    doc.textAlign(this.customer_BillingInfoJSON.CustomerAddressLine2, { align: "left" }, 80, startY += this.lineSpacing.NormalSpacing);
    doc.textAlign(this.customer_BillingInfoJSON.CustomerAddressLine3, { align: "left" }, 80, startY += this.lineSpacing.NormalSpacing);

    doc.setFontType('bold');
    doc.textAlign("STATE", { align: "left" }, startX, startY += this.lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(this.customer_BillingInfoJSON.CustomerState, { align: "left" }, 80, startY);

    doc.setFontType('bold');
    doc.textAlign("PIN", { align: "left" }, startX, startY += this.lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(this.customer_BillingInfoJSON.PIN, { align: "left" }, 80, startY);

    doc.setFontType('bold');
    doc.textAlign("EMAIL", { align: "left" }, startX, startY += this.lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(this.customer_BillingInfoJSON.CustomerEmail, { align: "left" }, 80, startY);

    doc.setFontType('bold');
    doc.textAlign("Phone: ", { align: "left" }, startX, startY += this.lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(this.customer_BillingInfoJSON.CustomerPhno, { align: "left" }, 80, startY);



    //-------Customer Info Shipping---------------------
    var rightcol1 = 340;
    var rightcol2 = 400;


    // doc.setFontType('bold');
    // doc.textAlign("PAN", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
    // doc.setFontType('normal');
    // doc.textAlign(customer_BillingInfoJSON.CustomerPAN, {align: "left"}, 80, startY);



    var header = function (data) {
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
        1: { columnWidth: 'auto' },
        2: { columnWidth: 'auto' },
        3: { columnWidth: 'auto' },
        4: { columnWidth: 'auto' },
        5: { columnWidth: 'auto' },
        6: { columnWidth: 'auto' },
      },
      startY: startY += 50
    };

    var columns = ["Cantidad", 'Código', "Producto servicio"]
    var rows = []
    orden.data.servicios.forEach(servicio => {
      rows.push([servicio.cantidad, servicio.codigo, servicio.descripcion])
    });



    // columnStyles: {
    //   id: {fillColor: 255}
    // },

    doc.autoTable(columns, rows, options);   //From dynamic data.
    // doc.autoTable(res.columns, res.data, options); //From htmlTable



    //-------Invoice Footer---------------------
    var rightcol1 = 340;
    var rightcol2 = 430;

    startY = doc.autoTableEndPosY() + 30;
    doc.setFontSize(this.fontSizes.NormalFontSize);


    // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;

    doc.setFontType('bold');
    doc.textAlign(this.comapnyJSON.CompanyName + ',', { align: "center" }, rightcol2, startY += this.lineSpacing.NormalSpacing + 50);
    doc.textAlign('Firma Autorizada', { align: "center" }, rightcol2, startY += this.lineSpacing.NormalSpacing + 50);

    doc.save('OT-' + new AnadirCerosPipe().transform(orden.data.numero, 5)+".pdf");
  }


}
