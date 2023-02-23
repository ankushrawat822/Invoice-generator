import React from 'react'
import _ from 'lodash';
import page2TopLogo from './assets/page-2-top-logo.png'
import Page1 from './Page1'
import Page2 from './Page2'
import {AiFillPrinter} from 'react-icons/ai'
import {BsFillCloudDownloadFill} from 'react-icons/bs'
import {AiFillMail} from 'react-icons/ai'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import Test from './Test';


import { Routes, Route } from 'react-router-dom'
import {Link} from 'react-router-dom'

const App = () => {
      
const printDocument = ()=>{
    <PDFDownloadLink document={<App />} fileName="MyComponent.pdf">
    {({loading }) => (loading ? 'Loading document...' : 'Download now!')}
  </PDFDownloadLink>
  }

  const handlePrintBtn = () => {
    window.print()
  }


    
  const data = [{
    "sno": 1,
    "material_desc": "Wes lorem ipsum atre",
    "hsn": "6579",
    "uom": "Bravo",
    "oty": 34,
    "rate": 87,
    "amount": 10
  }, {
    "sno": 2,
    "material_desc": "Ely Wes lorem ipsum atre",
    "hsn": "08799",
    "uom": "Bravoc",
    "oty": 96,
    "rate": 93,
    "amount": 10
  }, {
    "sno": 3,
    "material_desc": "Kurt Wes lorem ipsum atre",
    "hsn": "00",
    "uom": "Sierra ",
    "oty": 45,
    "rate": 7,
    "amount": 10
  }, {
    "sno": 4,
    "material_desc": "Nealy Wes lorem ipsum atre",
    "hsn": "187",
    "uom": "Echo",
    "oty": 15,
    "rate": 32,
    "amount": 10
  }, {
    "sno": 5,
    "material_desc": "Ciro Wes lorem ipsum atre",
    "hsn": "81",
    "uom": "India",
    "oty": 74,
    "rate": 33,
    "amount": 10
  }, 
  {
    "sno": 6,
    "material_desc": "Candis Wes lorem ipsum atre",
    "hsn": "5910",
    "uom": "Bravo",
    "oty": 69,
    "rate": 68,
    "amount": 10
  },
  {
    "sno": 7,
    "material_desc": "Wes lorem ipsum atre",
    "hsn": "6579",
    "uom": "Bravo",
    "oty": 34,
    "rate": 87,
    "amount": 10
  },
  {
    "sno": 8,
    "material_desc": "Wes lorem ipsum atre",
    "hsn": "6579",
    "uom": "Bravo",
    "oty": 34,
    "rate": 87,
    "amount": 10
  },
  
{
  "sno": 9,
  "material_desc": "Wes lorem ipsum atre",
  "hsn": "6579",
  "uom": "Bravo",
  "oty": 34,
  "rate": 87,
  "amount": 10
},
{
  "sno": 10,
  "material_desc": "Wes lorem ipsum atre",
  "hsn": "6579",
  "uom": "Bravo",
  "oty": 34,
  "rate": 87,
  "amount": 10
}, 

]

//  splitting data array to many subarrays of 7 

let result = _.chunk(data , 7)

//  calculating amount total start
let AllPageAmountArr = []
for(let i = 0 ; i<result.length ; i++){
  let pageAmount = result[i].map((item) => ( item.amount ))
console.log(pageAmount)
let sum = pageAmount.reduce((partialSum, a) => partialSum + a, 0)
 AllPageAmountArr.push(sum)

}

let AllPagesum = AllPageAmountArr.reduce((partialSum, a) => partialSum + a, 0)

// console.log(AllPagesum)

    AllPageAmountArr[AllPageAmountArr.length - 1] = AllPagesum

    // console.log("final array : " + AllPageAmountArr)

    //  calculating amount total ends


let n = result.length - 1



if(result[n].length < 7){
  let emptyNo = result[n].length;
  for(let i = 0 ; i< (7 - emptyNo) ; i++ ){ 
    // code for pushing empty obj to last array 
      
      result[n].push({
        "sno": '',
       "material_desc": " ",
    "hsn": '',
    "uom": " ",
    "oty": '',
    "rate": '',
    "amount": ""
        });
   }
}
 

  return (
    <>

     {/* buttons */}
  <div className=' print:hidden flex items-center justify-center gap-6 mt-5'>
      {/* print btn */}
        <button onClick={handlePrintBtn}> <AiFillPrinter className='text-[33px] text-green-500 p-1  hover:bg-[#8080803e] hover:rounded-[8px]'></AiFillPrinter></button>
        {/* mail btn */}
        <a href="mailto:email@example.com?subject='Hello!'&body='Your Invocie is Attached...'">  <AiFillMail className='text-[33px] text-blue-500 p-1 hover:bg-[#8080803e] hover:rounded-[8px]'> </AiFillMail></a>
     
        {/* download btn */}
        <button onClick={printDocument}><BsFillCloudDownloadFill className='text-[33px] text-red-500 p-1  hover:bg-[#8080803e] hover:rounded-[8px]'></BsFillCloudDownloadFill></button>
        <button > <Link to="/test">Test</Link></button>
      </div>
      
   <Routes> 


   <Route path='/' element={ <main  className=' bg-[#f5f6fa] '>
    
     

      <div id='componentToDownload' className='a4-style'>
    
      {/* <Page1 img={topLogo} ></Page1> */}



     {  result.map((item , i) => (    
           <>
           {/* {console.log("i+1 is : " +  (i + 1))}
           {console.log(" result length - 1 is : " + (result.length))} */}
         
           <Page1 key={i} img={page2TopLogo} item={item} pageNo={i+1} noOfPage={result.length }  amount={AllPageAmountArr} ></Page1>
           </>         
        
    )) }
     
      {/* <Page2></Page2> */}
      </div>
    
     
    </main>}/>

    <Route path='/test' element={<Test  img={page2TopLogo}  noOfPage={result.length }  data={data} amount={AllPagesum}/>} />

    </Routes>


    {/* <section className='w-[100vw] h-[100vh]  bg-[#f5f6fa]'></section> */}

   

  </>
  )
}

export default App