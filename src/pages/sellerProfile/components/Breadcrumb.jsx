import { t } from "i18next";
import { Link } from "react-router-dom";

const Breadcrumb = ({ page, pageLink, link, name }) => (
  <div className="w-full bg-white p-5 rounded-lg border mt-5 font-semibold">
    <Link to={pageLink}>{t(page)} / </Link>
    <Link to={pageLink} className="text-lybas-blue">{name}</Link>
  </div>
)

export default Breadcrumb;