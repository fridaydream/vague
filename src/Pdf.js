import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom'
import React from 'react';
import { PDFDocument, StandardFonts, degrees, rgb } from 'pdf-lib'
import download from 'downloadjs'

const Pdf = () => {
  const setDocumentMetadata = async () => {
    const pdfDoc = await PDFDocument.create()
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
    const page = pdfDoc.addPage([500, 600])
    page.setFont(timesRomanFont)
    page.drawText('The Life of an Egg', { x: 60, y: 500, size: 50 })
    page.drawText('An Epic Tale of Woe', { x: 125, y: 460, size: 25 })
    
    // Note that these fields are visible in the "Document Properties" section of 
    // most PDF readers.
    pdfDoc.setTitle('🥚 The Life of an Egg 🍳')
    pdfDoc.setAuthor('Humpty Dumpty')
    pdfDoc.setSubject('📘 An Epic Tale of Woe 📖')
    pdfDoc.setKeywords(['eggs', 'wall', 'fall', 'king', 'horses', 'men'])
    pdfDoc.setProducer('PDF App 9000 🤖')
    pdfDoc.setCreator('pdf-lib (https://github.com/Hopding/pdf-lib)')
    pdfDoc.setCreationDate(new Date('2018-06-24T01:58:37.228Z'))
    pdfDoc.setModificationDate(new Date('2019-12-21T07:00:11.000Z'))
    
    const pdfBytes = await pdfDoc.save()
    console.log('pdf添加matedata二进制', pdfBytes, pdfDoc)
    // Trigger the browser to download the PDF document
    download(pdfBytes, "pdf.pdf", "application/pdf");
  }
  const readDocumentMetadata = async () => {
    const url = 'https://test-oss.dsphere.com.cn/dsphere-file-location/DS2022010618333200000194.pdf'
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
    console.log('existingPdfBytes', existingPdfBytes)
    const pdfDoc = await PDFDocument.load(existingPdfBytes, { 
      updateMetadata: false
    })

    console.log('pdfDoc', pdfDoc)
    
    console.log('Title:', pdfDoc.getTitle())
    console.log('Author:', pdfDoc.getAuthor())
    console.log('Subject:', pdfDoc.getSubject())
    console.log('Creator:', pdfDoc.getCreator())
    console.log('Keywords:', pdfDoc.getKeywords())
    console.log('Producer:', pdfDoc.getProducer())
    console.log('Creation Date:', pdfDoc.getCreationDate())
    console.log('Modification Date:', pdfDoc.getModificationDate())
  }
  const modifyPdf = async () => {
    const url = 'http://localhost:3000/pdf-lib_modification_example3.pdf'
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
  
    const pdfDoc = await PDFDocument.load(existingPdfBytes)
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
  
    const pages = pdfDoc.getPages()
    const firstPage = pages[0]
    const { height } = firstPage.getSize()
    firstPage.drawText('text text', {
      x: 5,
      y: height / 2 + 300,
      size: 50,
      font: helveticaFont,
      color: rgb(0.95, 0.1, 0.1),
      opacity: 0.1,
      rotate: degrees(-45),
    })
  
    const pdfBytes = await pdfDoc.save()
    download(pdfBytes, "pdf-lib_modification_example_modify.pdf", "application/pdf");
  }
  const downloadnew =(fileName = 'aa', url = 'https://test-oss.dsphere.com.cn/dsphere-file-location/DS2022010618333200000194.pdf') => {
    const el = document.createElement('a')
      el.style.display = 'none'
      el.setAttribute('target', '_blank')
      fileName && el.setAttribute('download', fileName);
      el.href = url;
      console.log(el);
      document.body.appendChild(el);
      el.click();
      document.body.removeChild(el);
  }
  return <>
    <Button type="primary" onClick={setDocumentMetadata}>
      设置metadata
    </Button>
    <div>
      ---
    </div>
    <Button type="primary" onClick={readDocumentMetadata}>
      读取metadata
    </Button>
    <div>
      ---
    </div>
    <Button type="primary" onClick={modifyPdf}>
      修改内容
    </Button>
    <Button type="primary" onClick={downloadnew}>
      download
    </Button>
  </>
};

export default Pdf;