import Style from '../../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconWithRightText(props) {
  const {children, icon} = props
  return(
    <div className={Style.iconWrap}>
      <FontAwesomeIcon className={Style.icon} icon={icon} />
      <span>{children}</span>
    </div>
  )
}