import React from "react";
import { t } from "i18next";

function DeliveryPayment() {

  return (
    <>
      <div className="deliveryPayment container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-5 md:pt-10">
        <h1 className="deliveryPayment__title text-xl font-bold mb-3">{t('deliveryAndPaymentHead')}</h1>

      <div dangerouslySetInnerHTML={{ __html: t('deliveryAndPaymentBody') }}></div></div>
    </>
  )

}

export default DeliveryPayment
