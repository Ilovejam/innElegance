import Link from "next/link";

const SignUp = () => {
  return (
    <form className="form-style1">
      <div className="mb25">
        <label className="form-label fw600 dark-color">Email</label>
        <input
          type="email"
          className="form-control"
          required
        />
      </div>
      {/* End Email */}

      <div className="mb20">
        <label className="form-label fw600 dark-color">Şifre</label>
        <input
          type="text"
          className="form-control"
          required
        />
      </div>
      {/* End Password */}

      <div className="d-grid mb20">
        <button className="ud-btn btn-thm" type="submit">
          Hesap Oluştur <i className="fal fa-arrow-right-long" />
        </button>
      </div>
      <div className="hr_content mb20">
        <hr />
        <span className="hr_top_text">VEYA</span>
      </div>

      <div className="d-grid mb10">
        <button className="ud-btn btn-white" type="button">
          <i className="fab fa-google" />  Google ile Devam et
        </button>
      </div>
      <div className="d-grid mb10">
        <button className="ud-btn btn-fb" type="button">
          <i className="fab fa-facebook-f" />  Facebook ile Devam et
        </button>
      </div>
      
      <p className="dark-color text-center mb0 mt10">
      Zaten Hesabınız Var mı?{" "}
        <Link className="dark-color fw600" href="/login">
          Giriş Yap
        </Link>
      </p>
    </form>
  );
};

export default SignUp;
