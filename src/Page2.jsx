import React from 'react'
import bottonLogo from './assets/bottom-img.png'
import page3TopImg from './assets/page-3-top-img.png'
import page3BottomImg from './assets/page-3-bottom-img.png'

const Page2 = () => {
  return (
  <>
     <main className=' bg-[#f5f6fa] mt-7'>

      
       <div className='flex items-center justify-center '>

        
         <div className='inline-flex flex-col  lg:mx-auto bg-white main-container-setWidth'>
           
         <div className=''>
          
            <img src={page3TopImg} alt="" />

             
           </div> 
          
         
        
           {/* <div className='myHr'></div> */}

           {/* tax invioce div starts */}
           <div className='flex tax-invoice-div flex-row items-center justify-between px-4 black-border'>
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
           <div className='flex customer-info-div items-center flex-row justify-between px-4 black-border'>
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

           {/*  horizontal scroll table*/}

           <div className='overflowScroll '>
             {/*items table */}
             <table>
               {/* table header fixed */}
               <thead>
                 <tr>
                   <th>
                     Sl. No.
                   </th>
                   <th>
                     Material Description
                   </th>
                   <th>
                     HSN Code
                   </th>
                   <th>
                     UOM
                   </th>
                   <th>
                     Qty
                   </th>
                   <th>
                     Rate
                   </th>
                   <th>
                     Amount
                   </th>

                 </tr>
               </thead>
               {/* table body variable */}
               <tbody>
                 <tr>
                   <td>1</td>
                   <td>Soling Stone 5-8"</td>
                   <td>25169021</td>
                   <td>tonne</td>
                   <td>32.23</td>
                   <td>&#8377; 595.00</td>
                   <td>&#8377; 19176.85</td>
                 </tr>

                 <tr>
                   <td>2</td>
                   <td>Soling Stone 5-8"</td>
                   <td>25169021</td>
                   <td>tonne</td>
                   <td>32.23</td>
                   <td>&#8377; 595.00</td>
                   <td>&#8377; 19176.85</td>
                 </tr>


                 <tr>
                   <td>3</td>
                   <td>Soling Stone 5-8"</td>
                   <td>25169021</td>
                   <td>tonne</td>
                   <td>32.23</td>
                   <td>&#8377; 595.00</td>
                   <td>&#8377; 19176.85</td>
                 </tr>

                 <tr>
                   <td>4</td>
                   <td>Soling Stone 5-8"</td>
                   <td>25169021</td>
                   <td>tonne</td>
                   <td>32.23</td>
                   <td>&#8377; 595.00</td>
                   <td>&#8377; 19176.85</td>
                 </tr>


                 <tr>
                   <td>5</td>
                   <td>Soling Stone 5-8"</td>
                   <td>25169021</td>
                   <td>tonne</td>
                   <td>32.23</td>
                   <td>&#8377; 595.00</td>
                   <td>&#8377; 19176.85</td>
                 </tr>


                 <tr>
                   <td>6</td>
                   <td>Soling Stone 5-8"</td>
                   <td>25169021</td>
                   <td>tonne</td>
                   <td>32.23</td>
                   <td>&#8377; 595.00</td>
                   <td>&#8377; 19176.85</td>
                 </tr>


                 {/* <tr>
                   <td>7</td>
                   <td>Soling Stone 5-8"</td>
                   <td>25169021</td>
                   <td>tonne</td>
                   <td>32.23</td>
                   <td>&#8377; 595.00</td>
                   <td>&#8377; 19176.85</td>
                 </tr> */}

                
               </tbody>
             </table>
             {/* items table ends */}
                  <div className= 'w-[100%] h-1 black-border-right-left'></div>
             {/* gst table */}
             <table className=''>
               <thead>
                 <tr>
                   <th>SUB TOTAL</th>
                   <th>SGST @ 2.5%</th>
                   <th>CGST @ 2.5%</th>
                   <th>IGST @ 5%</th>
                   <th>GRAND TOTAL</th>
                 </tr>
               </thead>
               <tbody>
                 <tr >
                   <th className='py-2' >&#8377; 41,663.05</th>
                   <th className='py-2'>&#8377; 1,041.58</th>
                   <th className='py-2'>&#8377; 1,041.58</th>
                   <th className='py-2'>&#8377; 0.00</th>
                   <th className='py-2'>&#8377; 43,746.21</th>
                 </tr>

                 {/* authorised signatory column starts*/}
                 <tr>
                   <td className='text-start' colSpan={3} >
                   <div className='  inline-flex flex-col  text-start '>
                 <p>Bank Account Details : Ofudz Tradings Private Limited</p>
                 <p>Account Name : Ofudz Trading Private Limited</p>
                 <p>Account No. : 39789190028</p>
                 <p>IFSC Code : SBIN0014951 | UPI ID : ofudz@sbi</p>
                 <p>Branch : Hulimavu Branch</p>

                 <div className='text-justify mt-[50px] bank-details-lower-div-p'>
                   <p>CIN : U51909KA2020PTC136704 | PAN : AADC02125Q | 
</p>
<p>TAN : BLRO06752E| GSTIN : 29AADC02125Q1Z2 |</p>
                 </div>
               </div>
                   </td>
                   <td colSpan={2} >

                     <div className='flex flex-col text-center items-center justify-between h-[190px]'>


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


 
        <div className='text-center flex flex-col items-center justify-center mt-4'>
          <h1 className='text-[24px] font-bold'>Ofudz Tradings Private Limited</h1>
          <p className='mt-2 font-bold'>CIN : U51909KA2020PTC136704 | PAN : AADC02125Q | TAN : BLRO06752E| GSTIN : 29AADC02125Q1Z2 |</p>
          <p className='my-2'>Address : Bannerughatta Road, Bengaluru, E-mail : pillarnmqube@gmail.com Mobile : +91 99 00 424019</p>
        </div>

         <img className='mt-4' src={page3BottomImg} alt="" />
             

         </div>
       </div>

     </main>
  </>
  )
}

export default Page2