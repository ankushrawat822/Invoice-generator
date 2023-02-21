import React from 'react'
import Page1 from './Page1'
import page2TopLogo from './assets/page-2-top-logo.png'
import bottonLogo from './assets/bottom-img.png'

const Test = ({img , data , pageNo , noOfPage , amount}) => {
  return (
   <>
 <main className=' bg-[#f5f6fa] mt-7 print:mt-2 w-[100vw]'>
       
       {/* <div className='flex items-center justify-center gap-6'>
         <button onClick={handlePrintBtn} >Print</button>
         <button>Email</button>
         <button>Download</button>
       </div> */}

       {/* outter main div */}
       <div  className='flex items-center justify-center '>

         {/* main container box black-border*/}
         <div className='inline-flex flex-col  lg:mx-auto bg-white main-container-setWidth'>
           {/* top header */}
           <div className='flex top-header-div flex-row items-center justify-evenly gap-2 py-2 border-black border-t-2 border-r-2 border-l-2'>
             {/* img div */}
             <div className='flex flex-col items-center justify-center '>
               <img src={img} alt="" />
               <p>Building Trust Forever </p>
             </div>
             {/* between line */}
             <div className='line-between-top-header'></div>
             {/* text heading top div*/}
             <div className=' flex flex-col items-center justify-center text-center'>
               {/* title */}
               <h1 className=' text-[24px] md:text-[30px] lg:text-[34px] font-bold'>  Ofudz Tradings Private Limited </h1>
               {/* address */}
               <p>Address : Bannerughatta Road, Bengaluru, Karnataka - 56070.</p>
               {/* email and phone div*/}
               <div className='flex flex-col items-center justify-center md:flex-row'>
                 <p>E-mail : pillarnmqube@gmail.com</p>
                 <p>phone : +91 99 00 424019</p>
               </div>

             </div>
           </div>
           {/* top header div ends */}

           {/* hr div */}
           {/* <div className='myHr'></div> */}

           {/* tax invioce div starts */}
           <div className='flex tax-invoice-div flex-row items-center justify-between px-4  border-black border-t-2 border-r-2 border-l-2'>
             {/* inv div */}
             <div>
               <p>Inv. No. : <span className='font-bold'>PILLAR001</span></p>
             </div>

             {/* tax invoice heading div*/}
             <div className='flex flex-col text-center'>
               <p className='font-bold underline text-[24px]'>TAX INVOICE</p>
               <p className='text-[14px]'>(Issued Under Section 31 of GST Act, 2017)</p>
             </div>

             {/* date div */}
             <div>
               <p>Date : 05 02 2022</p>
             </div>


           </div>
           {/* tax invoice div ends */}

           {/* hr div */}
           {/* <div className='myHr'> . </div> */}

           {/* customer info div  starts*/}
           <div className='flex customer-info-div items-center flex-row justify-between px-4  border-black border-t-2 border-r-2 border-l-2 pb-2'>
             {/* customer div 1 */}
             <div className=' md:w-[40vw] inline-flex flex-col customer-po-div  text-start'>
               <p>Customer Name & Address</p>
               <p className='text-[18px] font-bold'>M/s Surya Hi-Tech Services Private Limited </p>
               <p>#2nd Flore, Site #48, Jansons Sarah, down Town Park II, Sy. No. 61/1 & 62, Meenakunte Village, Jala Hobali, Bengaluru, Karnataka PIN : 562 125</p>
             </div>
             {/* customer div 1 ends */}
             {/* cust PO div */}
             <div className=' customer-po-div text-end inline-flex increase-width-for-mobile md:w-[20vw] flex-col '>
               <p>Cust. PO, : POSB/00058/21-22</p>
               <p>Date : 02 02 2022</p>

               <div className=' text-end '>
                 <p>STATE CODE : 29 |
                   GSTIN : 29AARCS5526K1ZL | PAN : AARC5526K
                 </p>
               </div>
             </div>
           </div>

           {/* customer info div  ends*/}

           {/* <div className='black-border-no-bottom  w-full'></div> */}

           {/*  horizontal scroll table*/}


           <div className='overflowScroll'>
             {/*items table */}
             <table className='text-center border-collapse border-black border-2 min-w-[650px]'>
               {/* table header fixed */}
               <thead  className='text-center border-collapse border-black border-2'>
                 <tr>
                   <th  className='text-center border-collapse border-blackborder-2 px-[10px]'>
                     Sl. No.
                   </th>
                   <th  className='text-center border-collapse border-black border-2 px-[10px]'>
                     Material Description
                   </th>
                   <th  className='text-center border-collapse border-black border-2 px-[10px]'>
                     HSN Code
                   </th>
                   <th  className='text-center border-collapse border-black border-2 px-[10px]'>
                     UOM
                   </th>
                   <th  className='text-center border-collapse border-black border-2 px-[10px]'>
                     Qty
                   </th>
                   <th  className='text-center border-collapse border-black border-2 px-[10px]'>
                     Rate
                   </th>
                   <th  className='text-center border-collapse border-black border-2 px-[10px]'>
                     Amount
                   </th>

                 </tr>
               </thead>
               {/* table body variable */}
               <tbody  className='text-center border-collapse border-black border-2'>
               
               { data.map((ite => <tr>
         
                   <td  className=' border-black border-r-2 px-[10px]'>{ite.sno}</td>
                   <td className=' border-black border-r-2 px-[10px]'> {ite.material_desc} </td>
                   <td className=' border-black border-r-2 px-[10px]'>{ite.hsn}</td>
                   <td className=' border-black border-r-2 px-[10px]'>{ite.uom}</td>
                   <td className=' border-black border-r-2 px-[10px]'>{ite.oty}</td>
                   <td className=' border-black border-r-2 px-[10px]'>{ite.rate === '' ?  (<span> &nbsp; </span>) : (<span >&#8377; </span>) }  { ite.rate} </td>
                   <td className=' border-black border-r-2 px-[10px]'>{ite.amount === '' ?  (' ') : (<span >&#8377; </span>) } {ite.amount}</td>
                 </tr> ))}

                
               </tbody>
             </table>
             {/* items table ends */}
                 <div className=' border-black  border-r-2 border-l-2   h-1 w-full'></div>
             {/* gst table */}
             <table className=' min-w-[650px] text-center border-collapse border-black border-[2px]'>
               <thead className='text-center border-collapse border-black border-[2px]'>
                 <tr>
                   <th className='text-center border-collapse border-black border-[2px] px-[10px]'>SUB TOTAL</th>
                   <th className='text-center border-collapse border-black border-[2px] px-[10px]'>SGST @ 2.5%</th>
                   <th className='text-center border-collapse border-black border-[2px] px-[10px]'>CGST @ 2.5%</th>
                   <th className='text-center border-collapse border-black border-[2px] px-[10px]'>IGST @ 5%</th>
                   <th className='text-center border-collapse border-black border-[2px] px-[10px]'> {`${noOfPage === pageNo ? "Grand Total": " Total"}   `} </th>
                 </tr>
               </thead>
               <tbody className='text-center border-collapse border-black border-[2px]'>
                 <tr >
                   <th className='py-1 text-center border-collapse border-black border-2 px-[10px]' >&#8377; 41,663.05</th>
                   <th className='py-1 text-center border-collapse border-black border-[2px] px-[10px]'>&#8377; 1,041.58</th>
                   <th className='py-1 text-center border-collapse border-black border-[2px] px-[10px]'>&#8377; 1,041.58</th>
                   <th className='py-1 text-center border-collapse border-black border-[2px] px-[10px]'>&#8377; 0.00</th>
                   <th className='py-1 text-center border-collapse border-black border-[2px] px-[10px]'>&#8377; {amount} </th>
                 </tr>

                 {/* authorised signatory column starts*/}
                 <tr>
                   <td className=' border-black border-r-2 px-[10px]' colSpan={3} ></td>
                   <td className=' border-black border-r-2 px-[10px]' colSpan={2} >

                     <div className='flex flex-col text-center items-center justify-between h-[116px]'>


                       <p>Authorised Signatory</p>

                       <div >
                         <p>Sales Wing, South Zone </p>
                         <p>  Ofudz Tradings Private Limited</p>
                       </div>

                     </div>

                   </td>
                 </tr>
               </tbody>
             </table>



           </div>

           {/*  horizontal scroll table ends*/}



           {/* bank details div starts  */}
           <div className='flex flex-row items-center justify-between  bank-detail-main-div px-4 py-4  border-black border-r-2 border-l-2'>
               {/* bank details text div */}
               <div className='md:w-[40vw]  inline-flex flex-col customer-po-div  text-start '>
                 <p>Bank Account Details : Ofudz Tradings Private Limited</p>
                 <p>Account Name : Ofudz Trading Private Limited</p>
                 <p>Account No. : 39789190028</p>
                 <p>IFSC Code : SBIN0014951 | UPI ID : ofudz@sbi</p>
                 <p>Branch : Hulimavu Branch</p>

                 <div className='text-justify mt-[50px] w-[70%] bank-details-lower-div-p'>
                   <p>CIN : U51909KA2020PTC136704 | PAN : AADC02125Q | 
TAN : BLRO06752E| GSTIN : 29AADC02125Q1Z2 |</p>
                 </div>
               </div>

                  {/* bank details image div */}
                  <img className='h-[200px] w-[200px] ' src={bottonLogo} alt="" />
           </div>

           
           {/* page no div */}
           <div className='flex items-center justify-center  border-black border-b-2 border-r-2 border-l-2'>
             {/* <p className='font-bold pb-1'>{`Page ${pageNo} of ${noOfPage}`}</p> */}
           </div>
             

         </div>
       </div>

     </main>
   </>
  )
}

export default Test