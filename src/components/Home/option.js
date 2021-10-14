import { Link } from "react-router-dom";
export const Option = () => {
  return (
    <div className="option">
      <h3>Thể Loại</h3>
      <ul>
        <li>
          <Link to="/">Giáo trình</Link>
        </li>
        <li>
          <Link to="/">Tài liệu</Link>
        </li>
        <li>
          <Link to="/">Ngoại ngữ</Link>
        </li>
        <li>
          <Link to="/">Khác</Link>
        </li>
      </ul>
    </div>
  );
};
