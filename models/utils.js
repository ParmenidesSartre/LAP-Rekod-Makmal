function generateHeader(doc) {
  doc
    .image('models/lap.png', (doc.page.width - 50) / 2, 45, { width: '50' })
    .fontSize(14)
    .text('LAPORAN UJIAN PENYUCIANHAMA ( DISINFECTION )', 125, 150, {
      underline: true,
    })
    .moveDown()
}

function generateRecordInformation(doc,data) {
  const info =
    'Memasang, menguji, dan mentauliah paip UPVC PN12 berukuran 100mm G.P bagi menggantikan paip 100mm AC sediaada serta kerja-kerja berkaitan di Kampung Batu 11, Trong, Perak Darul Ridzuan.'
  
  const top = 200;
  
  doc
    .fontSize(12)
    .text('Nama Projek: ', 50, 200)
    .text( data[0]['name'], 175, 200, { width: 400, height: 325, align: 'justify' })
    .text('Nama Kontraktor: ', 50, top + 50)
    .text(data[0]['contractorName'], 175,top + 50)
    .text('Jenis Paip: ', 50, top + 75)
    .text(data[0]['pipeType'], 175,top + 75)
    .text('Saiz Paip: ', 50, top + 100)
    .text(data[0]['pipeSize'], 175, top + 100)
    .text('Panjang Paip: ', 50, top + 125)
    .text(data[0]['pipeLength '], 175, top + 125)
    .text('Tarikh: ', 50, top + 150)
    .text(formatDate(new Date()), 175, top + 150)
    .fontSize(14)
    .text('KEPUTUSAN UJIAN      :       LULUS', 50, top + 175)
    .moveDown()
}

function generateInvoiceTable(doc, invoice) {
  let i
  const invoiceTableTop = 330

  doc.font('Helvetica-Bold')
  generateTableRow(
    doc,
    invoiceTableTop,
    'Item',
    'Description',
    'Unit Cost',
    'Quantity',
    'Line Total',
  )
  generateHr(doc, invoiceTableTop + 20)
  doc.font('Helvetica')

  for (i = 0; i < invoice.items.length; i++) {
    const item = invoice.items[i]
    const position = invoiceTableTop + (i + 1) * 30
    generateTableRow(
      doc,
      position,
      item.item,
      item.description,
      formatCurrency(item.amount / item.quantity),
      item.quantity,
      formatCurrency(item.amount),
    )

    generateHr(doc, position + 20)
  }

  const subtotalPosition = invoiceTableTop + (i + 1) * 30
  generateTableRow(
    doc,
    subtotalPosition,
    '',
    '',
    'Subtotal',
    '',
    formatCurrency(invoice.subtotal),
  )

  const paidToDatePosition = subtotalPosition + 20
  generateTableRow(
    doc,
    paidToDatePosition,
    '',
    '',
    'Paid To Date',
    '',
    formatCurrency(invoice.paid),
  )

  const duePosition = paidToDatePosition + 25
  doc.font('Helvetica-Bold')
  generateTableRow(
    doc,
    duePosition,
    '',
    '',
    'Balance Due',
    '',
    formatCurrency(invoice.subtotal - invoice.paid),
  )
  doc.font('Helvetica')
}

function generateFooter(doc) {
  doc
    .fontSize(10)
    .text(
      'Payment is due within 15 days. Thank you for your business.',
      50,
      780,
      { align: 'center', width: 500 },
    )
}

function generateTableRow(
  doc,
  y,
  item,
  description,
  unitCost,
  quantity,
  lineTotal,
) {
  doc
    .fontSize(10)
    .text(item, 50, y)
    .text(description, 150, y)
    .text(unitCost, 280, y, { width: 90, align: 'right' })
    .text(quantity, 370, y, { width: 90, align: 'right' })
    .text(lineTotal, 0, y, { align: 'right' })
}

function generateHr(doc, y) {
  doc.strokeColor('#aaaaaa').lineWidth(1).moveTo(50, y).lineTo(550, y).stroke()
}

function formatCurrency(cents) {
  return '$' + (cents / 100).toFixed(2)
}

function formatDate(date) {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return day + '/' + month + '/' + year
}

module.exports = {
  generateHeader,
  generateRecordInformation,
  generateTableRow,
  generateHr,
  generateInvoiceTable,
  generateFooter,
}
