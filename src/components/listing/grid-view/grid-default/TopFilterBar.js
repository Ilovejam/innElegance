'use client'

import React from "react";

const TopFilterBar = ({setCurrentSortingOption,setColstyle,colstyle,pageContentTrac}) => {
  return (
    <>
      <div className="col-sm-6">
        <div className="text-center text-sm-start">
          <p className="pagination_page_count mb-0">
            35 sonucun ilk 8 sonucu görüntüleniyor
          </p>
        </div>
      </div>
      {/* End .col-sm-6 */}

      <div className="col-sm-6">
        <div className="page_control_shorting d-flex align-items-center justify-content-center justify-content-sm-end">
          <div className="pcs_dropdown pr10 d-flex align-items-center">
            <span style={{ minWidth: "60px" }}>Sırala</span>
            <select className="form-select"  onChange={(e)=>setCurrentSortingOption && setCurrentSortingOption(e.target.value)} >
              <option>En yeni</option>
              <option>En çok tercih edilen</option>
              <option>Düşükten Yükseğe</option>
              <option>Yüksekten Düşüğe</option>
            </select>
          </div>
          <div className={`pl15 pr15 bdrl1 bdrr1 d-none d-md-block cursor  ${!colstyle? 'menuActive':'#' } `}  onClick={()=>setColstyle(false)}>
            Grid
          </div>
          <div className={`pl15 d-none d-md-block cursor  ${colstyle? 'menuActive':'#' }`}   onClick={()=>setColstyle(true)}>
            List
          </div>
        </div>
      </div>
      {/* End .col-sm-6 */}
    </>
  );
};

export default TopFilterBar;
