import React from "react";
import MultiSelectField from "./MultiSelectField";
import StructureType from "./StructureType";

const DetailsFiled = () => {
  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Boyut(m2)
            </label>
            <input
              type="text"
              className="form-control"
            />
          </div>
        </div>
        {/* End .col-4 */}

     

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Odalar
            </label>
            <input
              type="text"
              className="form-control"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
            Yatak odaları
            </label>
            <input
              type="text"
              className="form-control"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
            Banyolar
            </label>
            <input
              type="text"
              className="form-control"
            />
          </div>
        </div>
        {/* End .col-4 */}

        

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Garaj
            </label>
            <input
              type="text"
              className="form-control"
            />
          </div>
        </div>
        {/* End .col-4 */}

    

    

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Müsaitlik tarihi 
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="99.aa.yyyy"
            />
          </div>
        </div>
        {/* End .col-4 */}

        

     


  

        <StructureType />
      </div>
      {/* End .row */}

      <div className="row">
        <MultiSelectField />

        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Notlar
            </label>
            <textarea
              cols={30}
              rows={5}
              defaultValue={""}
            />
          </div>
        </div>
        {/* End .col-12 */}
      </div>
    </form>
  );
};

export default DetailsFiled;
