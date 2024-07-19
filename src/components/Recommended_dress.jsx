import React,{useContext} from 'react'
import { AppContext } from '../App'
import { Link } from 'react-router-dom';

const dressImage = require('../assets/images/dressImage.png')

function Recommended_dress() {
  const { t } = useContext(AppContext);
  return (
    <div className='dress-card'>
      <div className="dress-card_image"><img src={dressImage} alt="" /></div>
      <div className="dress-card_name">Nike sportswear Futura Luxe</div>
      {/* Rate goymaly yyldyz imagely */}
      <div className="dress-card_price">130 <span>{t('tmt')}</span></div>
      <div className="dress-card_custom-buttons">
        <Link to="/" className='dress-card_custom-buttons_link'>icon {t('goto')} Kumush{t('s')} {t('shop')}</Link>
        <button>icon {t('add')}</button>
      </div>
    </div>
  )
}

export default Recommended_dress
