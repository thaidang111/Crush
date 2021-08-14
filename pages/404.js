import { useState } from "react";
import Swal from "sweetalert2";
function Crush() {
  const [top, setTop] = useState("50%");
  const [left, setLeft] = useState("60%");
  const onClickYes = () => {
    Swal.fire({
      icon: "success",
      title: "Cứ phải trả lời thật lòng như vậy ngại quá!",
    });
  };

  const onClickNo = () => {
    const width = document.getElementsByClassName("crush-box")[0].offsetWidth;
    const heigh = document.getElementsByClassName("crush-box")[0].offsetHeight;
    setTop(Math.floor(Math.random() * (heigh - 150)) + 180);
    setLeft(Math.floor(Math.random() * (width - 80)));
  };
  return (
    <div className="crush-box">
      <div className="title">
        <div>
          Thái có ĐẸP TRAI không?
        </div>
      </div>
      <button className="btn-click-me btn-yes" onClick={onClickYes}>
        Có
      </button>
      <button className="btn-click-me btn-no" style={{ top: top, left: left }} onClick={onClickNo}>
        Không
      </button>
    </div>
  );
}
export default Crush;
