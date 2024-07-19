import React, { useContext } from "react";
import { AppContext } from '../App'

function TermsConditions() {
  const { lang } = useContext(AppContext);
  if (lang === 'ru') {
    return (
      <div className="mt-8">
        <div className="terms-contitions container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center"><strong><span>ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</span></strong></p>
          <p className="my-4"><span>Туркменистан</span></p>
          <p><span></span></p>
          {/* 1 */}
          <ol>
            <li className="font-bold text-center">1. ОСНОВНЫЕ ТЕРМИНЫ</li>
          </ol>
          <p><span>В целях надлежащего толкования условий настоящего Соглашения нижеприведенные термины используются в следующем значении:</span></p>
          <ol type="1" className="ml-8">
            <div className="flex"><span className="font-bold mr-2">1.1. </span><span><strong>«Lybas»</strong> - Интернет магазин, имеющий адрес в сети Интернет <a href="https://www.lybas.com.tm" ><u><span >https://www.lybas.com.tm</span></u></a> на котором любой Покупатель может ознакомиться с представленными изделиями, их описанием и ценами, выбрать определенное изделие, способ оплаты и доставки изделия и оформить Заказ на выбранное изделие. </span></div>

            <div className="flex">
              <span className="font-bold mr-2">1.2. </span>
              <span>
                <strong>Покупатель</strong> - физическое лицо, принявшее в полном объеме и без исключений условия Оферты (совершившее акцепт Оферты), и оформивший Заказ в Интернет-магазине.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.3. </span>
              <span>
                <strong>Продавец</strong> - физическое либо юридическое лицо, разместившее информацию о доступных Изделиях для продажи в Интернет – магазине.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.4. </span>
              <span>
                <strong>Изделие</strong> - предмет или набор предметов одежды или аксессуаров, представленные к продаже в интернет-магазине и имеющие различный функционал.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.5. </span>
              <span>
                <strong>Заказ</strong> - решение Покупателя приобрести Изделие и должным образом, оформленный запрос Покупателя на приобретение и доставку по указанному Покупателем адресу выбранного Изделия в Интернет-магазине.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.6. </span>
              <span>
                <strong>Каталог</strong> - информация об Изделиях, размещенная в интернет-магазине.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.7. </span>
              <span>
                <strong>Оператор сайта Интернет–магазина</strong> - администрация интернет-магазина, является посредником и поставщиком услуг, предоставляющая доступ к платформе интернет-магазина для потенциальных покупателей и продавцов изделий.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.8. </span>
              <span>
                <strong>Договор</strong> - устное или письменное соглашение между Продавцом и Покупателем, о качестве и свойствах Изделия, его цене, сроках и об иных условиях, согласно которым осуществляется розничная купля-продажа Изделия.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.9. </span>
              <span>
                <strong>Изделие надлежащего качества</strong> - изделие, который соответствует описанию, представленному к нему, сохранён его товарный вид, потребительские свойства и фабричные ярлыки (если имеются).
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.10. </span>
              <span>
                <strong>Изделие ненадлежащего качества</strong> - изделие, с существенным недостатком, недостаток которого делает невозможным или недопустимым его использование в соответствии с целевым назначением.
              </span>
            </div>
          </ol>

          {/* 2 */}
          <ol>
            <li className="font-bold text-center my-5">2. ОБЩИЕ ПОЛОЖЕНИЯ</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex"><span className="mr-2">2.1. </span><span>Интернет-магазин <strong>«Lybas»</strong> (далее – Интернет-магазин) является собственностью ИП Майсы Тачгельдиевой предназначен для организации дистанционного способа продажи Изделий через сеть интернет.</span></div>

            <div className="flex">
              <span className="mr-2">2.2. </span>
              <span>
                Настоящее Соглашение регулирует отношения между Оператором сайта Интернет-магазина  <strong>«Lybas»</strong> (далее – Оператор) и Покупателем.
              </span>
            </div>

            <div className="flex">
              <span className="mr-2">2.3. </span>
              <span>
                Оператор оставляет за собой право в любое время изменять, добавлять или удалять пункты настоящего Соглашения без уведомления Покупателя.
              </span>
            </div>

            <div className="flex">
              <span className="mr-2">2.4. </span>
              <span>
                Продолжение использования интернет - магазина Покупателем означает принятие Соглашения и изменений, внесенных в настоящее Соглашение.
              </span>
            </div>

            <div className="flex">
              <span className="mr-2">2.5. </span>
              <span>
                Покупатель несет персональную ответственность за проверку настоящего Соглашения на наличие изменений в нем.
              </span>
            </div>

            <div className="flex">
              <span className="mr-2">2.6. </span>
              <span>
                При оформлении заказа в интернет-магазине Покупатель обязан предоставить о себе следующую информацию: фамилия и имя, контактный телефон, адрес доставки (при выборе доставки).
              </span>
            </div>
          </ol>

          {/* 3 */}
          <ol>
            <li className="font-bold text-center my-5">3. ПРЕДМЕТ СОГЛАШЕНИЯ</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex">
              <span className="mr-2">3.1 </span>
              <span>
                Предметом настоящего Соглашения является предоставление возможности Покупателю приобретать для личных, семейных, домашних и иных нужд, Изделия, представленные в Каталоге Интернет-магазина по адресу <a href="https://www.lybas.com.tm"><u><span>https://www.lybas.com.tm </span></u></a>
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.2 </span>
              <span>
                Данное Соглашение распространяется на все виды Изделий, представленных на сайте интернет-магазина, пока такие предложения с описанием присутствуют в Каталоге Интернет-магазина.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.3 </span>
              <span>
                Настоящее Соглашение является приглашением к оферте в соответствии с Ст.343 п.2 Гражданского Кодекса Туркменистана и размещение Заказа, означает, что Покупатель согласен со всеми условиями настоящего Соглашения без каких-либо дополнительных условий, изъятий, оговорок и принял предложение о заключение договора, а также согласился на обработку своих персональных данных при оформлении заказа. При этом Покупатель дает свое согласие на передачу своих персональных данных продавцам и другим третьим лицам в целях исполнения заказа покупателя.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.4 </span>
              <span>
                Использование материалов и сервисов интернет-магазина регулируется нормами закона Туркменистана «О правовом регулировании развития сети Интернет и оказании интернет – услуг в Туркменистане», «О защите прав потребителей», «Правилами продажи товаров дистанционным способом» и другими соответствующими нормам действующего законодательства Туркменистана.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.5 </span>
              <span>
                Осуществляя Заказ, Покупатель соглашается с тем, что Оператор сайта интернет - магазина может поручить исполнение Договора третьему лицу.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.6 </span>
              <span>
                Все права и обязательства по заключенному с Покупателем Договору возникают непосредственно у Продавца, при этом Покупатель, принимая настоящее Соглашение, полностью понимает и соглашается, что в случае заключения договора с Продавцом, Оператор не является стороной указанного договора купли-продажи и не несет обязанностей, связанных с его исполнением, кроме предусмотренных настоящим Соглашением.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.7 </span>
              <span>
                Интернет-магазин не несет ответственности за ущерб, причиненный Покупателю вследствие ненадлежащего использования Изделий, приобретенных в Интернет-магазине.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.8 </span>
              <span>
                Ответственность за исполнение договора купли-продажи, заключенного между Покупателем и Продавцом на основании предоставленной информации об Изделии в Каталогах интернет-магазина, а также за соблюдение прав потребителей, нарушенных в результате передачи Покупателю Изделия ненадлежащего качества, другого размера, а также устранение мелких недочётов, не влияющих на использование Изделия, несет Продавец.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.9 </span>
              <span>
                Настоящая публичная оферта вступает в силу с момента подтверждения заказа Покупателем во время подтверждающего звонка Оператора, и действует до момента фактического получения Заказа Покупателем.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.10 </span>
              <span>
                Покупатель несет ответственность за достоверность и точность предоставленной при оформлении заказа информации, в том числе, но, не исключительно, от претензий третьих лиц.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.11 </span>
              <span>
                Использование ресурса интернет-магазина для просмотра и выбора Изделия, а так же для оформления заказа является для Покупателя безвозмездным.
              </span>
            </div>
          </ol>

          {/* 4 */}
          <ol>
            <li className="font-bold text-center my-5">4. ЦЕНА ИЗДЕЛИЯ</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex">
              <span className="mr-2">4.1 </span>
              <span>
                Цена на каждую позицию Изделия указана в манатах на сайте Интернет-магазина за единицу Изделия или за комплект Изделий. В описании к каждому Изделию присутствует указание о единицах Изделия.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">4.2 </span>
              <span>
                Продавец имеет право в одностороннем порядке изменить цену на любую позицию Изделия. При этом цена на заказанный Покупателем Изделие изменению не подлежит. Цена Изделия может дифференцироваться.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">4.3 </span>
              <span>
                Стоимость доставки Изделия указывается на сайте Интернет-магазина либо сообщается Покупателю при оформлении заказа при телефонном звонке. Стоимость доставки Изделия не включена в стоимость Изделия и оплачивается отдельно Покупателем.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">4.4 </span>
              <span>
                При совершении оплаты, обязательства Покупателя по оплате Изделия считаются исполненными с момента передачи наличных средств непосредственно Продавцу или его представителю при получении Изделия Покупателем по адресу доставки, указанного в Заказе (доставка Изделия представителями Продавца).
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">4.5 </span>
              <span>
                Расчеты между Продавцом и Покупателем за Изделие производятся наличными средствами.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">4.6 </span>
              <span>
                В случае, если цена на заказанный Покупателем Изделие указана/отображена неверно вследствие технического сбоя, Оператор информирует об этом Покупателя для подтверждения Заказа по исправленной цене либо аннулирования Заказа. Если Оператору не удалось связаться с Покупателем, то Заказ считается аннулированным. Если Заказ был оплачен, Продавец возвращает Покупателю оплаченную за Заказ сумму тем же способом, которым она была уплачена.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">4.7 </span>
              <span>
                После подтверждения Заказа по звонку Оператора Покупатель обязан уплатить Продавцу цену Изделия, а также стоимость доставки в момент его передачи, а Продавец обязан предоставить Покупателю чек или другой документ, подтверждающий оплату Изделия.
              </span>
            </div>
          </ol>

          {/* 5 */}
          <ol>
            <li className="font-bold text-center my-5">5.  ОФОРМЛЕНИЕ ЗАКАЗА</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex">
              <span className="mr-2">5.1 </span>
              <span>
                Заказ Изделия осуществляется Покупателем посредством внесения Покупателем соответствующих данных в регистрационную форму на сайте Интернет-магазина.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.2 </span>
              <span>
                Покупатель несет ответственность за сверку собственных размеров с размерами Изделия, указанными в таблице размеров Продавца, при этом таблица размеров у различных продавцов может отличаться.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.3 </span>
              <span>
                После размещения Заказа на сайте Интернет – Магазина, Покупателю будет доступна информация о статусе заказа в его профиле на странице интернет-магазина в разделе «Мои заказы». Информация о статусе заказа будет отображаться следующим образом: «Ожидается», «Принято», «Доставлено» или «Отменено».
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.4 </span>
              <span>
                В целях подтверждения Заказа, Покупатель соглашается с условием, что по номеру предоставленным им будут поступать входящие звонки для подтверждения заказа, уточнения адреса доставки, срока доставки, комплектации заказа и другой сопутствующей информации.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.5 </span>
              <span>
                Если Покупатель не подтверждает свой Заказ по телефонному звонку на его контактный номер в течение 24 часов с момента его размещения в Интернет-магазине, Заказ не принимается в исполнение.

              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.6 </span>
              <span>
                В случае если Покупатель не отвечает на звонок представителя Продавца или Оператора, Продавец/Оператор вправе перенести с согласия Покупателя доставку на другое время и (или) другой день. В случае если Покупатель не выходит на связь с Продавцом/Оператором и (или) не согласовывает другое время и (или) другой день доставки, обязательство Продавца по доставке заказа считается выполненным надлежащим образом, а Покупатель - отказавшимся от заказа и исполнения договора.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.7 </span>
              <span>
                Если Покупателю необходима дополнительная информация, он вправе запросить ее у Оператора. В случае отсутствия запроса необходимой информации от Покупателя, Оператор не несет ответственности за выбранный Покупателем Изделие.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.8 </span>
              <span>
                Договор купли-продажи дистанционным способом между Продавцом и Покупателем считается заключенным в электронном виде с момента изменения статуса заказа в личном профиле Покупателя на «Принято».
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.9 </span>
              <span>
                Если после получения Заказа обнаруживается, что у Продавца отсутствует в наличии необходимое количество заказанного Изделия, Продавец/Оператор информирует об этом Покупателя по телефону, указанного при оформлении Заказа или при регистрации на сайте. Покупатель вправе согласиться принять Изделие в количестве, имеющемся в наличии у Продавца, либо аннулировать данную позицию Изделия из Заказа.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.10 </span>
              <span>
                Покупатель имеет право отменить или изменить Заказ до или во время подтверждающего звонка от Оператора интернет-магазина.  <strong><span>После подтверждения Заказа Оператором по телефону, Изделие обмену и возврату не подлежит.
                </span></strong>
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.11 </span>
              <span>
                В случае если у конкретного Продавца предусмотрено удержание процентов от суммы Заказа за обмен и возврат Изделия, то Продавец при отмене или возврате Изделия возвращает Покупателю плату за Изделие за удержанием данных процентов.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.12 </span>
              <span>
                Покупатель несет полную ответственность за предоставление неверных сведений, повлекшее за собой невозможность надлежащего исполнения Продавцом своих обязательств перед Покупателем.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.13 </span>
              <span>
                Оператор Интернет-магазина – не является продавцом изделий, выставленных на продажу посредством интернет-магазина.
              </span>
            </div>
          </ol>

          {/* 6 */}
          <ol>
            <li className="font-bold text-center my-5">6. ДОСТАВКА И ПЕРЕДАЧА ИЗДЕЛИЯ ПОКУПАТЕЛЮ</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex">
              <span className="mr-2">6.1 </span>
              <span>
                Изделие, заказанное Покупателем, доставляется Продавцом или Оператором.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.2 </span>
              <span>
                Стоимость доставки высчитывается индивидуально исходя из габаритов, веса Изделия, а также от местоположения пункта доставки (местоположения Покупателя).
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.3 </span>
              <span>
                При доставке Изделие вручается либо Покупателю, либо лицу, указанному в качестве Получателя Заказа при телефонном звонке от Оператора осуществленного для подтверждения Заказа.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.4 </span>
              <span>
                В целях добросовестного выполнения обязательств Продавцом своих обязательств, при вручении Заказа лицо, осуществляющее передачу Заказа, вправе потребовать предъявить документ, удостоверяющий личность Покупателя и/или Получателя. Продавец гарантирует конфиденциальность и защиту персональной информации Покупателя и/или Получателя.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.5 </span>
              <span>
                Заказ считается исполненным в момент фактической передачи Изделий, входящих в состав Заказа, Покупателю (или лицу, указанному в качестве Получателя Заказа) на основании документа подтверждающего Заказ, выданного Продавцом, осуществляющим доставку Заказа, под подпись Покупателя (или лица, указанного в качестве Получателя Заказа). При получении Изделия Покупатель (или лицо, указанное в качестве Получателя Заказа) обязан проверить его внешний вид, целостность, состав, количество, качество и проверить его на соответствие заявленному количеству, ассортименту, комплектности Изделия, а также может примерить Изделие. <strong>После приёмки Покупателем (или лицом, указанным в качестве Получателя Заказа) Изделия претензии по внешнему виду, количеству, размеру и комплектности Изделия Продавцом/Оператором не принимаются.
                </strong>
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.6 </span>
              <span>
                В случае отсутствия претензий к доставленному Изделию Покупатель расписывается в чеке либо ином аналогичном документе, предоставляемом представителем Продавца, и оплачивает Заказ. Подпись в данных документах свидетельствует о том, что претензий к Изделию Получателем не заявлено и Продавец полностью и надлежащим образом выполнил свою обязанность по передаче Изделия.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.7 </span>
              <span>
                Риск случайной гибели или случайного повреждения изделия переходит к Покупателю в момент передачи ему Изделия и проставления Покупателем (или лицом, указанным в качестве Получателя Заказа) подписи в документах, подтверждающих принятие Изделия.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.8 </span>
              <span>
                В случае если доставка Изделия произведена в установленные договором сроки, но Изделие не было передано Покупателю по вине Покупателя, последующая доставка производится в новые сроки, согласованные с Продавцом.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.9 </span>
              <span>
                При невозможности доставки Изделия Покупателю, по причине его отсутствия по указанному адресу и не выхода на связь с Оператором для согласования повторной доставки в течении 7 календарных дней, Заказ Покупателя считается аннулированным.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.10 </span>
              <span>
                Место доставки Изделия Покупатель указывает при оформлении Заказа.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.11 </span>
              <span>
                Информация об Изделии доводится до сведения Покупателя в сведениях об Изделии на соответствующей странице или вкладке на сайте Интернет-магазина, а также иными доступными способами.
              </span>
            </div>
          </ol>

          {/* 7 */}
          <ol>
            <li className="font-bold text-center my-5">7. ГАРАНТИИ НА ИЗДЕЛИЕ И ОБМЕН</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex">
              <span className="mr-2">7.1 </span>
              <span>
                Покупатель не вправе отказаться от Изделия надлежащего качества, имеющего индивидуально-определенные свойства, предназначенные для личного пользования.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">7.2 </span>
              <span>
                Претензии к качеству приобретенного Изделия, возникшие после получения и оплаты Изделия, рассматриваются в соответствии с Законом Туркменистана «О защите прав потребителей».
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">7.3 </span>
              <span>
                <strong>При получении Изделия, Покупатель обязуется проверить его соответствие заявленным характеристикам, указанным на соответствующей странице интернет-магазина. Изделие, полученное Покупателем и проверенное на соответствие заявленному качеству, обмену и возврату не подлежит.
                </strong>
              </span>
            </div>
          </ol>

          {/* 8 */}
          <ol>
            <li className="font-bold text-center my-5">8. ЗАЩИТА ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex">
              <span className="mr-2">8.1 </span>
              <span>
                Предоставляя свои персональные данные при регистрации и/или оформлении Заказа на Сайте интернет – магазина, Покупатель даёт своё согласие Оператору на обработку, в т.ч. на сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, обезличивание, передачу (предоставление, доступ, трансграничную передачу), блокирование, уничтожение всех своих персональных данных, переданных Оператору, в том числе, указанных при регистрации и оформлении заказа на Сайте интернет-магазина, с целью регистрации Покупателя на Сайте интернет-магазина, оформления Покупателем Заказа в Интернет-магазине, предоставления информации об изделиях/услугах и условиях их приобретения, исполнения договора купли-продажи Изделий.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">8.2 </span>
              <span>
                Принимая условия настоящего Соглашения, Покупатель: Подтверждает, что все данные предоставляются добровольно.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">8.3 </span>
              <span>
                Оператор обязуется не разглашать полученную от Покупателя информацию. При этом не считается нарушением обязательств разглашение информации в случае, когда обязанность такого раскрытия установлена требованиями действующего законодательства.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">8.4 </span>
              <span>
                Принимая условия настоящего Соглашения, Покупатель соглашается на использование указанных персональных данных для связи с Оператором, а также третьими лицами, привлекаемыми Оператором для целей выполнения обязательств перед Покупателями, в целях осуществления рассылок информационного характера, о передаче заказа в доставку, а также иную информацию, непосредственно связанную с выполнением обязательств Продавца/Оператора в рамках настоящего соглашения.
              </span>
            </div>
          </ol>

          {/* 9 */}
          <ol>
            <li className="font-bold text-center my-5">9. ОТЗЫВЫ И ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex">
              <span className="mr-2">9.1 </span>
              <span>
                Покупатель имеет право оставлять комментарии и отзывы с фотографиями о купленных им Изделии.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">9.2 </span>
              <span>
                Покупатель несет ответственность в соответствии с действующим законодательством Туркменистана о достоверности данной информации, а также о том, что данные комментарии, отзывы и фотографии не противоречат моральным устоям, не оскорбляют честь и достоинство человека, не противоречат публичному порядку.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">9.3 </span>
              <span>
                Покупатель соглашается с тем, что Оператор имеет право удалять или модерировать комментарии, отзывы и фотографии Покупателя в случае их несоответствия публичному порядку, и в случае необходимости информировать государственные органы о нарушение прав и достоинства других Покупателей или Продавца.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">9.4 </span>
              <span>
                Покупатель соглашается с тем, что при оставлении комментария или отзыва к купленному им Изделия, его персональные данные в отзывах  будут доступны (видимы) для всех посетителей Интернет-магазина.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">9.5 </span>
              <span>
                Интернет-магазин и предоставляемые сервисы могут временно частично или полностью недоступны по причине проведения профилактических или иных работ или по любым другим причинам технического характера. Техническая служба Оператора имеет право периодически проводить необходимые профилактические или иные работы с предварительным уведомлением Покупателей или без такового.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">9.6 </span>
              <span>
                К отношениям между Покупателем и Продавцом, а также Оператором применяются положения законодательства Туркменистана.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">9.7 </span>
              <span>
                В случае возникновения вопросов и претензий со стороны Покупателя он вправе обратиться к Оператору по телефону или иным доступным способом, указанным в настоящем Соглашении или соответствующем разделе Сайта интернет – магазина.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">9.8 </span>
              <span>
                Признание судом недействительности какого-либо положения настоящего Соглашения не влечет за собой недействительность остальных положений.
              </span>
            </div>
          </ol>


          <p className="text-center my-5"><strong><span>РЕКВИЗИТЫ ОПЕРАТОРА</span></strong></p>
          <p><strong><span>Оператор:</span></strong></p>
          <p><span>ИП Майса Тачгелдиева</span></p>
          <p><span>+99361163167</span></p>
        </div>
      </div>
    )
  } else if (lang === 'en') {
    return (
      <div className="mt-8">
        <div className="terms-contitions container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center"><strong><span>TERMS AND CONDITIONS</span></strong></p>
          <p className="my-4"><span>Turkmenistan</span></p>
          <p><span></span></p>
          {/* 1 */}
          <ol>
            <li className="font-bold text-center">1. BASIC TERMS</li>
          </ol>
          <p><span>For the proper interpretation of the conditions of this Agreement, the following terms are used in the following meaning:</span></p>
          <ol type="1" className="ml-8">
            <div className="flex"><span className="font-bold mr-2">1.1. </span><span>&ldquo;<strong>Lybas</strong>&rdquo; - An online store with the address on the Internet <a href="https://www.lybas.com.tm" ><u><span >https://www.lybas.com.tm</span></u></a> where any Buyer can familiarize themselves with the presented Products, their descriptions and prices, choose a specific Product, payment and delivery method for the Product, and place an Order for the selected Product.</span></div>

            <div className="flex">
              <span className="font-bold mr-2">1.2. </span>
              <span>
                <strong>Buyer</strong> - an individual who has fully and unconditionally accepted the terms of the Offer (accepted the Offer) and placed an Order in the online store.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.3. </span>
              <span>
                <strong>Seller</strong> - an individual or legal entity that has placed information about available Products for sale in the online store.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.4. </span>
              <span>
                <strong>Product</strong> - an item or set of clothing or accessories offered for sale in the online store with various functionalities.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.5. </span>
              <span>
                <strong>Order</strong> - the Buyer&apos;s decision to purchase a Product and a properly executed request by the Buyer to purchase and deliver the selected Product to the address specified by the Buyer in the online store.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.6. </span>
              <span>
                <strong>Catalog</strong> - information about Products posted on the online store.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.7. </span>
              <span>
                <strong>Operator of the online store site</strong> - the administration of the online store, acting as an intermediary and service provider, providing access to the online store platform for potential buyers and sellers of Products.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.8. </span>
              <span>
                <strong>Agreement</strong> - an oral or written agreement between the Seller and the Buyer regarding the quality and characteristics of the Product, its price, terms, and other conditions under which the retail purchase and sale of the Product is carried out.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.9. </span>
              <span>
                <strong>Product of proper quality</strong> - a product that corresponds to the description presented for it, maintains its commercial appearance, consumer properties, and factory labels (if any is available).
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.10. </span>
              <span>
                <strong>Product of improper quality</strong> - a product with a significant defect, the defect of which makes its use impossible or unacceptable in accordance with its intended purpose.
              </span>
            </div>
          </ol>

          {/* 2 */}
          <ol>
            <li className="font-bold text-center my-5">2. GENERAL PROVISIONS</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex"><span className="mr-2">2.1. </span><span>The online store &ldquo;<strong>Lybas</strong>&rdquo; (hereinafter - the online store) is owned by the individual entrepreneur Maysa Tachgeldiyeva and is intended for organizing the remote sale of Products through the Internet.</span></div>

            <div className="flex">
              <span className="mr-2">2.2. </span>
              <span>
                This Agreement regulates the relationship between the Operator of the website of the online store &ldquo;<strong>Lybas</strong>&rdquo; (hereinafter - the Operator) and the Buyer.
              </span>
            </div>

            <div className="flex">
              <span className="mr-2">2.3. </span>
              <span>
                The Operator reserves the right to change, add, or delete clauses of this Agreement at any time without notifying the Buyer.
              </span>
            </div>

            <div className="flex">
              <span className="mr-2">2.4. </span>
              <span>
                The continued use of the online store by the Buyer signifies acceptance of the Agreement and the changes made to this Agreement.
              </span>
            </div>

            <div className="flex">
              <span className="mr-2">2.5. </span>
              <span>
                The Buyer is personally responsible for checking this Agreement for changes.
              </span>
            </div>

            <div className="flex">
              <span className="mr-2">2.6. </span>
              <span>
                When placing an Order in the online store, the Buyer must provide the following information about themselves: surname and name, contact phone number, delivery address (if delivery is chosen).
              </span>
            </div>
          </ol>

          {/* 3 */}
          <ol>
            <li className="font-bold text-center my-5">3. SUBJECT OF AGREEMENT</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex">
              <span className="mr-2">3.1 </span>
              <span>
                The subject of this Agreement is to provide the Buyer with the opportunity to purchase Products for personal, family, household, and other needs, presented in the Catalog of the online store at <a href="https://www.lybas.com.tm"><u><span>https://www.lybas.com.tm </span></u></a>
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.2 </span>
              <span>
                This Agreement applies to all types of Products presented on the website of the online store as long as such offers with descriptions are present in the Catalog of the online store.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.3 </span>
              <span>
                This Agreement is an invitation to offer in accordance with Article 343, paragraph 2 of the Civil Code of Turkmenistan, and placing an Order means that the Buyer agrees to all the terms of this Agreement without any additional conditions, exceptions, reservations, and has accepted the offer to conclude a contract, as well as agreed to the processing of their personal data when placing an Order. The Buyer hereby consents to the transfer of their personal data to sellers and other third parties for the purpose of fulfilling the Buyer&apos;s Order.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.4 </span>
              <span>
                The use of materials and services of the online store is regulated by the norms of the law of Turkmenistan &ldquo;On the legal regulation of the development of the Internet and the provision of Internet services in Turkmenistan&rdquo;, &ldquo;On the protection of consumer rights&rdquo;, &ldquo;Rules for the sale of goods by remote means&rdquo;, and other relevant norms of the current legislation of Turkmenistan.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.5 </span>
              <span>
                By placing an Order, the Buyer agrees that the Operator of the online store site may entrust the performance of the Agreement to a third party.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.6 </span>
              <span>
                All rights and obligations under the contract concluded with the Buyer arise directly with the Seller. By accepting this Agreement, the Buyer fully understands and agrees that in the event of a contract with the Seller, the Operator is not a party to the said purchase and sale agreement and does not bear obligations related to its performance, except as provided in this Agreement.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.7 </span>
              <span>
                The online store is not responsible for any damage caused to the Buyer due to the improper use of the Products purchased in the online store.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.8 </span>
              <span>
                The responsibility for the performance of the purchase and sale agreement concluded between the Buyer and the Seller based on the information provided about the Product in the Catalogs of the online store, as well as for compliance with consumer rights violated due to the transfer of a Product of improper quality, a different size, as well as the elimination of minor defects that do not affect the use of the Product, lies with the Seller.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.9 </span>
              <span>
                This public offer comes into force from the moment of Order confirmation by the Buyer during the confirming call of the Operator and is valid until the Buyer actually receives the Order.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.10 </span>
              <span>
                The Buyer is responsible for the accuracy and correctness of the information provided when placing an Order, including, but not limited to, claims from third parties.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.11 </span>
              <span>
                The use of the online store resource for viewing and selecting a Product, as well as for placing an Order, is provided to the Buyer free of charge.
              </span>
            </div>
          </ol>

          {/* 4 */}
          <ol>
            <li className="font-bold text-center my-5">4. PRODUCT PRICE</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex">
              <span className="mr-2">4.1 </span>
              <span>
                The price for each item of the Product is indicated in Turkmen manats on the website of the online store per unit of the Product or for a set of Products. The description of each Product includes information about the units of the Product.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">4.2 </span>
              <span>
                The Seller has the right to unilaterally change the price for any item of the Product. However, the price of the Product that has already been ordered by the Buyer is not subject to change. The prices of the Product may vary.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">4.3 </span>
              <span>
                The cost of delivering the Product is specified on the website of the online store or communicated to the Buyer when placing the Order during a phone call. The cost of delivering the Product is not included in the price of the Product and is paid separately by the Buyer.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">4.4 </span>
              <span>
                When making payment, the Buyer&apos;s obligations to pay for the Product are considered fulfilled from the moment the cash is handed over directly to the Seller or its representative upon receipt of the Product by the Buyer at the delivery address specified in the Order (delivery of the Product by the Seller&apos;s representatives).
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">4.5 </span>
              <span>
                Settlements between the Seller and the Buyer for the Product are made in cash.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">4.6 </span>
              <span>
                If the price of the Product ordered by the Buyer is incorrectly indicated/displayed due to a technical glitch, the Operator informs the Buyer to confirm the Order at the corrected price or to cancel the Order. If the Operator fails to contact the Buyer, the Order is considered canceled. If the Order has been paid for, the Seller refunds the amount paid by the Buyer for the Order using the same method it was paid.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">4.7 </span>
              <span>
                After confirming the Order by the Operator&apos;s call, the Buyer is obliged to pay the Seller the price of the Product, as well as the delivery cost at the time of its handover. The Seller must provide the Buyer with a receipt or other document confirming the payment for the Product.
              </span>
            </div>
          </ol>

          {/* 5 */}
          <ol>
            <li className="font-bold text-center my-5">5. ORDER PROCESSING</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex">
              <span className="mr-2">5.1 </span>
              <span>
                The Buyer places an Order for the Product by entering the relevant data into the registration form on the website of the online store.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.2 </span>
              <span>
                The Buyer is responsible for verifying their own sizes with the sizes of the Product specified in the Seller&apos;s size chart, noting that size charts may vary among different sellers.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.3 </span>
              <span>
                After placing an Order on the website of the online store, the Buyer will have access to information about the Order status in their profile on the online store page under &ldquo;My Orders&rdquo;. Information about the Order status will be displayed as follows: &ldquo;Expected&rdquo;, &ldquo;Accepted&rdquo;, &ldquo;Delivered&rdquo; or &ldquo;Canceled&rdquo;.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.4 </span>
              <span>
                To confirm the Order, the Buyer agrees that incoming calls will be made to the number provided for Order confirmation, clarification of the delivery address, delivery time, Order configuration, and other related information.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.5 </span>
              <span>
                If the Buyer does not confirm their Order through a phone call to their contact number within 24 hours of placing it on the online store, the Order is not processed.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.6 </span>
              <span>
                If the Buyer does not answer the call from the Seller&apos;s representative or Operator, the Seller/Operator may, with the Buyer&apos;s consent, reschedule the delivery for another time and/or day. If the Buyer does not respond to the Seller/Operator and/or does not agree to another delivery time and/or day, the Seller&apos;s obligation to deliver the Order is considered fulfilled properly, and the Buyer is deemed to have refused the Order and contract performance.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.7 </span>
              <span>
                If the Buyer requires additional information, they may request it from the Operator. In the absence of a request for necessary information from the Buyer, the Operator is not responsible for the Product selected by the Buyer.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.8 </span>
              <span>
                The distance selling contract between the Seller and the Buyer is considered concluded in electronic form from the moment the Order status in the Buyer&apos;s profile changes to &quot;Accepted.&quot;
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.9 </span>
              <span>
                If, after receiving the Order, it is discovered that the Seller does not have the required quantity of the ordered Product, the Operator/Seller informs the Buyer by phone, as indicated during the Order placement or registration on the website. The Buyer may agree to accept the Product in the quantity available with the Seller or cancel this item of the Product from the Order.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.10 </span>
              <span>
                The Buyer has the right to cancel or modify the Order before or during the confirming call from the Operator of the online store. <strong><span>After confirmation of the Order by the Operator over the phone, the Product is not subject to exchange and return.</span></strong>
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.11 </span>
              <span>
                If a specific Seller specifies the withholding of a percentage of the Order amount for the exchange and return of the Product, the Seller, in case of cancelation or return of the Product, refunds the Buyer the amount paid for the Product minus the specified percentage.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.12 </span>
              <span>
                The Buyer is fully responsible for providing incorrect information that leads to the improper performance of the Seller&apos;s obligations to the Buyer.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.13 </span>
              <span>
                The Operator of the online store is not the seller of the Products offered for sale through the online store.
              </span>
            </div>
          </ol>

          {/* 6 */}
          <ol>
            <li className="font-bold text-center my-5">6. DELIVERY AND HANDOVER OF THE PRODUCT TO THE BUYER</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex">
              <span className="mr-2">6.1 </span>
              <span>
                The Product ordered by the Buyer is delivered by the Seller or the Operator.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.2 </span>
              <span>
                The cost of delivery is calculated individually based on the dimensions, weight of the product, and the location of the delivery point (Buyer&apos;s location).
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.3 </span>
              <span>
                Upon delivery, the Product is handed over either to the Buyer or to the person specified as the Order Recipient during the phone call from the Operator made to confirm the Order.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.4 </span>
              <span>
                To fulfill its obligations in good faith, when handing over the Order, the person delivering the Order has the right to request the presentation of a document proving the identity of the Buyer and/or the Recipient. The Seller guarantees the confidentiality and protection of the personal information of the Buyer and/or the Recipient.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.5 </span>
              <span>
                The Order is considered fulfilled at the moment of the actual transfer of the items included in the Order to the Buyer (or the person specified as the Order Recipient) based on the document confirming the Order issued by the Seller, who delivers the Order, and signed by the Buyer (or the person specified as the Order Recipient). Upon receiving the Product, the Buyer (or the person specified as the Order Recipient) is obligated to check its appearance, integrity, composition, quantity, quality, and verify it against the declared quantity, assortment, and completeness of the Product. <strong>Claims regarding the appearance, quantity, size, and completeness of the Product, after acceptance by the Buyer (or the person specified as the Order Recipient), are not accepted by the Seller/Operator.</strong>
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.6 </span>
              <span>
                In the absence of claims to the delivered Product, the Buyer signs the receipt or any similar document provided by the Seller&apos;s representative and pays for the Order. The signature in these documents confirms that no claims to the Product have been made by the Recipient, and the Seller has fully and properly fulfilled its obligation to transfer the Product.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.7 </span>
              <span>
                The risk of accidental loss or accidental damage to the product passes to the Buyer at the moment of transferring the Product to them and obtaining the Buyer&apos;s (or the person specified as the Order Recipient) signature on the documents confirming the acceptance of the Product.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.8 </span>
              <span>
                In case the delivery of the Product is made within the contractually agreed-upon terms, but the Product has not been transferred to the Buyer due to the Buyer&apos;s fault, subsequent delivery is made within new terms agreed upon with the Seller.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.9 </span>
              <span>
                If it is impossible to deliver the Product to the Buyer due to their absence at the specified address and failure to contact the Operator to coordinate the redelivery within 7 calendar days, the Buyer&apos;s Order is considered canceled.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.10 </span>
              <span>
                The place of delivery of the Product is specified by the Buyer when placing the Order.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.11 </span>
              <span>
                Information about the Product is brought to the attention of the Buyer in the information about the Product on the corresponding page or tab on the website of the online store, as well as by other available means.
              </span>
            </div>
          </ol>

          {/* 7 */}
          <ol>
            <li className="font-bold text-center my-5">7. WARRANTIES FOR THE PRODUCT AND EXCHANGE</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex">
              <span className="mr-2">7.1 </span>
              <span>
                The Buyer is not entitled to refuse a Product of proper quality that has individually defined properties intended for personal use.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">7.2 </span>
              <span>
                Claims regarding the quality of the purchased Product that arise after receiving and paying for the Product are considered in accordance with the laws of Turkmenistan &ldquo;On consumer rights protection&rdquo;.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">7.3 </span>
              <span>
                <strong>Upon receiving the Product, the Buyer undertakes to verify its compliance with the declared characteristics specified on the relevant page of the online store. The Product received by the Buyer and verified for compliance with the declared quality is not subject to exchange and return.</strong>
              </span>
            </div>
          </ol>

          {/* 8 */}
          <ol>
            <li className="font-bold text-center my-5">8. PERSONAL DATA PROTECTION</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex">
              <span className="mr-2">8.1 </span>
              <span>
                By providing their personal data during registration and/or placing an Order on the website of the online store, the Buyer gives their consent to the Operator for the processing, including collection, systematization, accumulation, storage, clarification (updating, changing), use, depersonalization, transfer (provision, access, cross-border transfer), blocking, and destruction of all their personal data provided to the Operator. This includes information provided during registration and order placement on the website of the online store. The purpose of this processing is to register the Buyer on the website of the online store, allow the Buyer to place an order in the online store, provide information about Products/services and the conditions of their purchase, and fulfill the contract for the sale of Products.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">8.2 </span>
              <span>
                By accepting the terms of this Agreement, the Buyer confirms that all data is provided voluntarily.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">8.3 </span>
              <span>
                The Operator undertakes not to disclose the information received from the Buyer. Disclosure of information is not considered a violation of obligations when the obligation of such disclosure is established by the requirements of the applicable legislation.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">8.4 </span>
              <span>
                By accepting the terms of this Agreement, the Buyer agrees to the use of the provided personal data to communicate with the Operator, as well as with third parties engaged by the Operator to fulfill obligations to Buyers. This includes purposes such as sending informational messages, notifying about the delivery of an Order, and providing other information directly related to the performance of the Seller&apos;s/Operator&apos;s obligations under this agreement.
              </span>
            </div>
          </ol>

          {/* 9 */}
          <ol>
            <li className="font-bold text-center my-5">9. REVIEWS AND ADDITIONAL TERMS</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex">
              <span className="mr-2">9.1 </span>
              <span>
                The Buyer has the right to leave comments and reviews with photos about the purchased Product.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">9.2 </span>
              <span>
                The Buyer is responsible in accordance with the current legislation of Turkmenistan for the accuracy of this information. Additionally, the Buyer ensures that the comments, reviews, and photos do not contradict moral principles, do not offend the honor and dignity of individuals, and do not violate public order.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">9.3 </span>
              <span>
                The Buyer agrees that the Operator has the right to delete or moderate comments, reviews, and photos of the Buyer if they do not comply with public order, and, if necessary, inform state authorities about violations of the rights and dignity of other Buyers or the Seller.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">9.4 </span>
              <span>
                The Buyer agrees that when leaving a comment or review about the purchased Product, their personal data in the comments will be visible to all visitors of the online store.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">9.5 </span>
              <span>
                The online store and the provided services may be temporarily partially or completely unavailable due to maintenance or other technical reasons. The Operator&apos;s technical service has the right to periodically carry out necessary maintenance or other work with prior notification of Buyers or without such notification.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">9.6 </span>
              <span>
                The relationship between the Buyer and the Seller, as well as the Operator, is governed by the laws of Turkmenistan.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">9.7 </span>
              <span>
                In case of questions and claims from the Buyer, they have the right to contact the Operator by phone or by any other available means specified in this Agreement or the corresponding section of the online store website.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">9.8 </span>
              <span>
                The invalidity of any provision of this Agreement as recognized by the court does not entail the invalidity of the remaining provisions.
              </span>
            </div>
          </ol>


          <p className="text-center my-5"><strong><span>OPERATOR DETAILS</span></strong></p>
          <p><strong><span>Operator:</span></strong></p>
          <p><span>Individual entrepreneur</span></p>
          <p><span>Maysa Tachgeldiyeva</span></p>
          <p><span>+99361163167</span></p>
        </div>
      </div>
    )
  } else if (lang === 'tm') {
    return (
      <div className="mt-8">
        <div className="terms-contitions container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center"><strong><span>ULANYŞ DÜZGÜNLERI</span></strong></p>
          <p className="my-4"><span>Türkmenistan</span></p>
          <p><span></span></p>
          {/* 1 */}
          <ol>
            <li className="font-bold text-center">1. ESASY TERMINLER</li>
          </ol>
          <p><span>Şu Ylalaşygyň şertlerini dogry düşündirmek maksady bilen aşakdaky terminler aşakdaky manyda ulanylýar:</span></p>
          <ol type="1" className="ml-8">
            <div className="flex"><span className="font-bold mr-2">1.1. </span><span><strong>“Lybas”</strong> , <a href="https://www.lybas.com.tm" ><u><span >https://www.lybas.com.tm</span></u></a> internet salgysy bolan internet dükany bolup, bu ýerde islendik Satyn alyjy hödürlenýän Harytlar, düşündirişler we bahalar bilen tanşyp biler, belli bir Harydy, töleg usulyny we gowşuryş usulyny saýlap biler we saýlanan Harydy sargap biler. </span></div>
            <div className="flex">
              <span className="font-bold mr-2">1.2. </span>
              <span>
                <strong>Satyn alyjy</strong> - Ylalaşyk teklibiniň şertlerini doly görnüşde we kemsiz kabul eden (Teklibi kabul eden) we internet dükanynda Sargyt ýerleşdiren fiziki şahys.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.3. </span>
              <span>
                <strong>Satyjy</strong> - internet dükanynda satyljak Harytlar barada maglumat ýerleşdiren şahsy ýa-da edara görnüşli tarap.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.4. </span>
              <span>
                <strong>Haryt</strong> - internet dükanynda satmak üçin hödürlenýän we dürli funksiýaly eşik ýa-da esbaplar toplumy.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.5. </span>
              <span>
                <strong>Sargyt </strong> - Satyn alyjynyň Haryt satyn almak karary we internet dükanynda saýlanan önüm üçin Satyn alyjy tarapyndan görkezilen adrese almak we gowşurmak baradaky talaby.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.6. </span>
              <span>
                <strong>Katalog </strong> - internet dükanynda ýerleşdirilen Harytlar barada maglumat.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.7. </span>
              <span>
                <strong>Internet dükanynyň web sahypasynyň operatory</strong> - internet dükanynyň administrasiýasy bolup, Harydy Satyjylar we Satyn alyjylar üçin internet dükany platformasyna girişi üpjün edýän araçy we hyzmat üpjün edijidir.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.8. </span>
              <span>
                <strong>Şertnama </strong> - Satyjy bilen Satyn alyjynyň arasynda Harydyň hili we häsiýetleri, bahasy, möhletleri we Harydyň bölekleýin satyn alynmagy we satylmagy bilen baglanyşykly beýleki şertler barada dilden ýa-da ýazmaça şertnama.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.9. </span>
              <span>
                <strong>Gowy hilli haryt</strong> - göz öňünde tutulan beýanyna laýyk gelýän haryt bolup, görkezilişi, sarp ediş aýratynlyklary we zawod bellikleri (bar bolsa) saklanýar.
              </span>
            </div>

            <div className="flex">
              <span className="font-bold mr-2">1.10. </span>
              <span>
                <strong>Ýaramsyz hilli haryt </strong> - Möhüm kemçiligi bolan haryt bolup, kemçiligi göz öňünde tutulan maksat bilen harydy ulanmaga mümkinçilik bermeýär.
              </span>
            </div>
          </ol>

          {/* 2 */}
          <ol>
            <li className="font-bold text-center my-5">2. UMUMY DÜZGÜNLER</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex"><span className="mr-2">2.1. </span><span><strong>«Lybas»</strong> internet dükany (mundan beýläk Internet dükany diýlip atlandyrylýar) hususy telekeçi Maýsa Täçgeldiýewanyň eýeçiliginde bolup, internet tory arkaly önüm satmagyň distansion usulyny guramak üçin niýetlenendir.</span></div>
            <div className="flex">
              <span className="mr-2">2.2. </span>
              <span>
              Bu şertnama,  <strong>«Lybas»</strong> internet dükanynyň saýt operatory (mundan beýläk Operator diýlip atlandyrylýar) bilen Satyn alyjynyň arasyndaky gatnaşyklary düzgünleşdirýär.
              </span>
            </div>

            <div className="flex">
              <span className="mr-2">2.3. </span>
              <span>
              Operator, şu Ylalaşygyň maddalaryny islendik wagt Satyn alyja habar bermezden üýtgetmek, goşmak ýa-da aýyrmak hukugyny özünde saklaýar.
              </span>
            </div>

            <div className="flex">
              <span className="mr-2">2.4. </span>
              <span>
              Satyn alyjy tarapyndan internet dükanynyň ulanylmaga dowam edilmegi Ylalaşygyň we şu Ylalaşyga girizilen üýtgeşmeleriň kabul edilmegini aňladýar.
              </span>
            </div>

            <div className="flex">
              <span className="mr-2">2.5. </span>
              <span>
              Şu Ylalaşyga girizilen üýtgeşmeleri barlamak üçin Satyn alyjy jogapkärdir.
              </span>
            </div>

            <div className="flex">
              <span className="mr-2">2.6. </span>
              <span>
              Internet dükanynda Sargyt goýlanda, Satyn alyjy özi hakda aşakdaky maglumatlary bermäge borçlydyr: ady we familiýasy, telefon belgisi, eltip bermek salgysy (eltip bermegi saýlan ýagdaýynda).
              </span>
            </div>
          </ol>

          {/* 3 */}
          <ol>
            <li className="font-bold text-center my-5">3. YLALAŞYGYŇ MOWZUGY</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex">
              <span className="mr-2">3.1 </span>
              <span>
              Bu Ylalaşygyň mowzugy, Satyn alyja şahsy, maşgala, öý we beýleki zerurlyklary üçin <a href="https://www.lybas.com.tm"><u><span>https://www.lybas.com.tm </span></u></a>internet dükany Katalogynda görkezilen Harytlary satyn almak mümkinçiligini bermekden ybarat.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.2 </span>
              <span>
              Bu Ylalaşyk, internet dükanynyň web sahypasyndaky Katalogda beýanly teklipler bar bolan ýagdaýynda, internet dükanyndaky Harytlaryň ähli görnüşlerine degişlidir.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.3 </span>
              <span>
              Bu Ylalaşyk, Türkmenistanyň Raýat kodeksiniň 343-nji maddasynyň 2-nji bendine laýyklykda ylalaşyk teklibine çakylyk bolup durýar. Bu, Satyn alyjynyň goşmaça şertler, kadadan çykmalar, bellikler bolmazdan bu ylalaşygyň ähli şertleri bilen razydygyny we teklibi kabul edendigini aňladýar. Şeýle-de, Satyn alyjy Sargyt goýan wagty şahsy maglumatlarynyň işlenmegine razydygyny aňladýar. Munuň bilen baglylykda, Satyn alyjy, Sargyt buýrugyny ýerine ýetirmek üçin öz şahsy maglumatlarynyň satyjylara we beýleki üçünji taraplara geçirilmegine razylyk berýär.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.4 </span>
              <span>
              Internet dükanynyň materiallaryndan we hyzmatlaryndan peýdalanmak, Türkmenistanyň “Türkmenistanda Internet torunyň ösüşini we internet-hyzmatlaryny etmegi hukuk taýdan düzgünleşdirmek hakynda”, “Sarp edijileriň hukuklaryny goramak barada” kanunlarynyň kadalary, “Harytlary distansion usul bilen satmagyň düzgünleri” we Türkmenistanyň hereket edýän kanunçylygynyň beýleki degişli kadalary bilen kadalaşdyrylýar.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.5 </span>
              <span>
              Sargyt bermek bilen, Satyn alyjy, internet dükany web sahypasynyň Operatorynyň şertnamanyň ýerine ýetirilişini üçünji tarapa tabşyryp biljekdigi bilen razylaşýar.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.6 </span>
              <span>
              Satyn alyjy bilen baglaşylan Ylalaşyk boýunça ähli hukuklar we borçlar gönüden-göni Satyja degişlidir. Satyn alyjy bolsa şu Ylalaşygy kabul edip, Satyjy bilen şertnama baglaşylan halatynda, <strong>Operatoryň kesgitlenen satyn almak-satmak şertnamasynda tarap däldigine we şu Ylalaşykda göz öňünde tutulanlardan başga ýagdaýlarda satyn almak-satmak şertnamasynyň ýerine ýetirilmegi bilen baglanyşykly borçnamalary öz üstüne almaýandygyna doly düşünýär we razy bolýar.
</strong>
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.7 </span>
              <span>
              Internet dükany, internet dükanynda satyn alnan Harytlaryň nädogry ulanylmagy sebäpli Satyn alyja ýetirilen zyýan üçin jogapkärçilik çekmeýär.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.8 </span>
              <span>
              Internet dükanynyň Kataloglarynda Haryt barada berlen maglumatlaryň esasynda Satyn alyjy bilen Satyjynyň arasynda baglaşylan şertnamanyň ýerine ýetirilmegi üçin jogapkärçilik Satyja degişlidir. Şeýle hem, Satyn alyja ýaramsyz hilli ýa-da başga ölçegde Harydyň geçirilmegi we harydyň ulanylmagyna täsir etmeýän ownuk kemçilikleriň aradan aýrylmagy netijesinde bozulan sarp edijileriň hukuklarynyň berjaý edilmegi üçin jogapkärçilik Satyja degişlidir.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.9 </span>
              <span>
              Bu köpçülige hödürlenýän teklip, Operator tarapyndan Sargyt tassyklama niýetli edilen jaň wagtynda Satyn alyjy tarapyndan Sargydyň tassyklanan pursadyndan güýje girýär we Sargyt Satyn alyjy tarapyndan kabul edilýänçä hereket edýär.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.10 </span>
              <span>
              Satyn alyjy Sargyt goýlanda berlen maglumatlaryň ygtybarlylygy we takyklygy üçin, şol sanda üçünji taraplaryň talaplary üçin jogapkärçilik çekýär.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">3.11 </span>
              <span>
              Haryt görmek we saýlamak, şeýle hem Sargyt bermek üçin internet dükanynyň çeşmesiniň ulanylmagy Satyn alyjy üçin mugt bolup durýar.
              </span>
            </div>
          </ol>

          {/* 4 */}
          <ol>
            <li className="font-bold text-center my-5">4. HARYDYŇ BAHASY</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex">
              <span className="mr-2">4.1 </span>
              <span>
              Her bir Harydyň görnüşiniň bahasy Haryt birligi ýa-da Harytlaryň toplumy üçin internet dükanynyň web sahypasynda manatda görkezilýär. Her harydyň beýanynda Haryt birligi barada görkezijisi bardyr.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">4.2 </span>
              <span>
              Satyjy Harydyň islendik görnüşi üçin bahasyny birtaraplaýyn üýtgetmäge hukugy bardyr. Bu ýagdaýda, Satyn alyjy tarapyndan sargyt edilen Harydyň bahasy üýtgedilmäge degişli däldir. Harydyň bahasy dürli görnüşde bolup biler.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">4.3 </span>
              <span>
              Harydy eltip bermek bahasy internet dükanynynyň web sahypasynda görkezilýär ýa-da telefon arkaly Sargyt goýlanda Satyn alyja habar berilýär. Harydy eltip bermek bahasy harydyň bahasyna goşulmaýar we Satyn alyjy tarapyndan aýratyn tölenýär.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">4.4 </span>
              <span>
              Töleg geçirilende, Satyn alyjy tarapyndan Sargytda görkezilen eltip bermek salgysynda Haryt kabul edilen wagty (Satyjynyň wekili tarapyndan Haryt eltip berlen wagty) gönümel Satyja ýa-da onuň wekiline nagt pul geçirilen pursadyndan başlap Satyn alyjynyň Harydyň bahasyny tölemäge degişli borçnamalary ýerine ýetirildi diýip hasaplanýar.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">4.5 </span>
              <span>
              Satyjy bilen Satyn alyjynyň arasyndaky Haryt üçin hasaplaşyklar nagt görnüşinde edilýär.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">4.6 </span>
              <span>
              Satyn alyjy tarapyndan sargyt edilen Harydyň bahasy tehniki näsazlyk sebäpli nädogry görkezilen/görünen ýagdaýynda, bu barada Operator Sargyt buýrugyny düzedilen bahada tassyklamak ýa-da Sargydy goýbolsun etmek üçin Satyn alyja habar berer. Operator Satyn alyjy bilen habarlaşyp bilmese, Sargyt ýatyrylan hasaplanýar. Sargyt üçin töleg geçirilen bolsa, Satyjy Sargyt üçin tölenen mukdaryny Satyn alyja görkezilen usulda gaýtaryp berýär.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">4.7 </span>
              <span>
              Operatoryň jaňy bilen Sargyt tassyklanansoň, Satyn alyjy Satyja Harydyň bahasyny, şeýle hem gowşurylan wagty eltip bermek bahasyny tölemäge borçlydyr. Satyjy bolsa, Satyn alyjyny kwitansiýa ýa-da Haryt üçin töleg tassyklaýan beýleki resminama bilen üpjün etmäge borçlydyr.
              </span>
            </div>
          </ol>

          {/* 5 */}
          <ol>
            <li className="font-bold text-center my-5">5.  SARGYT BERMEK</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex">
              <span className="mr-2">5.1 </span>
              <span>
              Harydyň Sargyt buýrugy, internet dükanynyň web sahypasyndaky hasaba alyş formasyna Satyn alyjy tarapyndan degişli maglumatlaryň girizilmegi arkaly amala aşyrylýar.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.2 </span>
              <span>
              Satyn alyjy Satyjynyň ölçeg tablisasynda görkezen Haryt ölçegleri bilen öz ölçeglerini barlamak üçin jogapkärdir. Ölçeg tablisasy bir Satyjydan beýlekisine üýtgäp biler.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.3 </span>
              <span>
              Internet dükanynyň web sahypasynda Sargyt ýerleşdirenden soň, Sargyt ýagdaýy barada maglumat Satyn alyja web sahypadaky öz profilindäki “Sargytlarym” bölüminde elýeterli bolýar. Sargyt ýagdaýy baradaky maglumatlar “Garaşylýar”, “Kabul edildi”, “Eltip berildi” ýa-da “Goýbolsun edildi” görnüşde görkeziler.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.4 </span>
              <span>
              Sargyt tassyklamak maksady bilen, Satyn alyjy Sargyt buýrugyny, eltip bermek salgysyny, wagtyny, Sargyt toplumyny we beýleki degişli maglumatlary takyklamak üçin gelýän jaňlary aljakdygyna razy bolýar.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.5 </span>
              <span>
              Satyn alyjy internet dükanynda Sargydy goýan pursatyndan başlap 24 sagadyň dowamynda telefon belgisine gelen jaň arkaly öz Sargydyny tassyklamasa, Sargyt buýrugy ýerine ýetirilmeýär.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.6 </span>
              <span>
              Satyjynyň wekiliniň ýa-da Operatoryň jaňyna Satyn alyjy jogap bermese, Satyjy/Operator, Satyn alyjynyň razylygy bilen, eltip bermek işini başga bir wagta we (ýa-da) başga bir güne geçirmäge hukugy bardyr. Satyn alyjy Satyjy/Operator bilen habarlaşmasa we (ýa-da) başga bir wagt we (ýa-da) başga bir eltip bermek güni bilen ylalaşmasa, Satyjynyň Sargydy eltip bermäge degişli borjy talaba laýyk ýerine ýetirildi diýip hasaplanylýar. Satyn alyjy bolsa Sargytdan we şertnamanyň ýerine ýetirilmeginden ýüz öwürdi diýip hasaplanylýar.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.7 </span>
              <span>
              Goşmaça maglumat gerek bolan ýagdaýynda, Satyn alyjynyň ony Operatordan talap etmäge hukugy bardyr. Satyn alyjydan gerekli maglumat üçin haýyş ýok bolsa, Satyn alyjy tarapyndan saýlanan Önüm üçin Operator jogapkärçilik çekmeýär.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.8 </span>
              <span>
              Satyjy bilen Satyn alyjynyň arasyndaky distansion usully satyn almak-satmak şertnamasy, Satyn alyjynyň şahsy profilindäki Sargyt ýagdaýy “Kabul edildi” diýip üýtgän pursatyndan başlap elektron görnüşinde baglaşyldy diýip hasaplanylýar.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.9 </span>
              <span>
              Sargyt buýrugy alnandan soň, Satyjyda sargyt edilen Harydyň zerur mukdarda ýokdugy ýüze çykarylsa, Satyjy/Operator bu barada Sargyt goýlanda ýa-da web sahypasynda hasaba alnanda görkezilen telefon belgisi arkaly Satyn alyja habar berýär. Satyn alyjynyň Harydy Satyjynyň elinde bar bolan mukdarynda kabul etmäge, ýa-da Sargyt buýrugyndan Harydyň degişli görnüşini goýbolsun etmäge hukugy bardyr.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.10 </span>
              <span>
              Satyn alyjynyň, internet dükanynyň operatory tarapyndan geljek tassyklama jaňyndan öň ýa-da onun dowamynda Sargyt buýrugyny ýatyrmaga ýa-da üýtgetmäge hukugy bardyr.   <strong><span>Operator tarapyndan Sargyt telefon arkaly tassyklanandan soň, Harydy çalşyp ýa-da yzyna gaýtaryp bolmaz.
                </span></strong>
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.11 </span>
              <span>
              Eger belli bir Satyjy harydyň çalşylmagy we yzyna gaýtarylmagy üçin Sargyt mukdaryndan göterimleriň tutulyp galynmagy göz öňünde tutýan bolsa, Satyjy Harydyň ýatyrylmagy ýa-da yzyna gaýtarylmagynda degişli göterimleriň tutulyp galynmagy bilen Haryt üçin tölegi yzyna berýär.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.12 </span>
              <span>
              Satyjynyň Satyn alyjynyň öňündäki borçlaryny dogry ýerine ýetirip bilmezligine sebäp bolan nädogry maglumatlaryň berilmegi üçin Satyn alyjy doly jogapkärçilik çekýär.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">5.13 </span>
              <span>
              Internet dükanynyň operatory, internet dükanynyň üsti bilen satmak üçin hödürlenýän Harytlaryň satyjysy däldir.
              </span>
            </div>
          </ol>

          {/* 6 */}
          <ol>
            <li className="font-bold text-center my-5">6. ÖNÜMI SATYN ALYJA ELTIP BERMEK WE GEÇIRMEK</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex">
              <span className="mr-2">6.1 </span>
              <span>
              Satyn alyjy tarapyndan sargyt edilen önüm Satyjy ýa-da Operator tarapyndan eltip berilýär.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.2 </span>
              <span>
              Eltip bermek bahasy harydyň ölçeglerine, agramyna, şeýle hem eltip bermek nokadynyň ýerleşýän ýerine (Satyn alyjynyň ýerleşýän ýerine) laýyklykda aýratynlykda hasaplanýar.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.3 </span>
              <span>
              Eltip berlende Haryt Satyn alyja ýa-da Sargyt buýrugyny tassyklamak üçin Operatoryň telefon jaňy wagtynda Sargyt kabul ediji hökmünde görkezilen adama gowşurylýar.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.4 </span>
              <span>
              Satyjynyň öz borçlaryny ynsaply ýerine ýetirmegi maksady bilen, Sargydy tabşyranda, Sargydy tabşyrýan adamyň Satyn alyjynyň we/ýa-da Sargyt kabul edijiniň şahsyýetini tassyklaýan resminamasynyň görkezilmegini talap etmäge hukugy bar. Satyn alyjynyň we/ýa-da Sargyt kabul edijiniň şahsy maglumatlarynyň gizlinligini we goralmagyny Satyjy kepillendirýär.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.5 </span>
              <span>
              Satyn alyjynyň (ýa-da Sargyt kabul ediji hökmünde görkezilen adamyň) goly bilen, Sargyt eltip bermek hyzmatyny ýerine ýetirýän Satyjy tarapyndan berlen Sargyt buýrugyny tassyklaýan resminama esasynda Sargydyň düzümine degişli Harytlar Satyn alyja (ýa-da Sargyt kabul ediji hökmünde görkezilen adama) hakyky tabşyrylan wagtynda Sargyt ýerine ýetirilen diýip hasaplanýar. Haryt kabul edilýän wagty, Alyjy (ýa-da Sargyt kabul ediji hökmünde görkezilen adam) onuň daşky görnüşini, düzüwligini, düzümini, mukdaryny, hilini we Harydyň yglan edilen mukdaryna, assortimentine we dolulygyna laýyklygyny barlamaga borçludyr. Satyn alyjy Harydy geýip görüp biler. <strong>Satyn alyjy (ýa-da Sargyt kabul ediji hökmünde görkezilen adam) tarapyndan geýlip görlenden soň, Harydyň daşky görnüşi, mukdary, ölçegi we dolulygyna degişli nägilelikler Satyjy/Operator tarapyndan kabul edilmeýär.
                </strong>
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.6 </span>
              <span>
              Eltip berlen Haryda hiç hili nägilelik ýok bolsa, Satyn alyjy Satyjynyň wekili tarapyndan berlen kwitansiýa ýa-da şuňa meňzeş resminama gol çekýär we Sargyt üçin töleýär. Bu resminamalardaky gol, Satyn alyjynyň Haryda hiç hili nägileliginiň ýokdygyny we Satyjynyň Harydy tabşyrmak borjuny doly we dogry ýerine ýetirendigini görkezýär.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.7 </span>
              <span>
              Harydyň tötänleýin ýitirilmek ýa-da tötänleýin zaýalanmak howpy, Haryt özüne tabşyrylandan soň we Satyn alyjy (ýa-da Sargyt kabul ediji hökmünde görkezilen adam) Harydyň kabul edilendigini tassyklaýan resminamalara gol çeken pursadynda Satyn alyja geçýär.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.8 </span>
              <span>
              Haryt şertnamada bellenilen möhletlerde eltip berlen bolsa, ýöne Satyn alyjynyň ýalňyşlygy sebäpli Haryt Satyn alyja geçirilmedik bolsa, soňraky eltip bermek Satyjy bilen ylalaşylan täze möhletde amala aşyrylýar.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.9 </span>
              <span>
              Görkezilen salgyda ýoklugy we 7 senenama gününiň içinde gaýtadan eltip bermek barada ylalaşmak üçin Operator bilen habarlaşmazlygy sebäpli Harydy Satyn alyja eltip bermek mümkin bolmasa, Satyn alyjynyň buýrugy ýatyrylan hasaplanýar.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.10 </span>
              <span>
              Satyn alyjy Sargyt goýlanda Harydy eltip bermek ýerini görkezýär.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">6.11 </span>
              <span>
              Haryt baradaky maglumatlar, degişli sahypada ýa-da internet dükanynyň web sahypasyndaky goýmada Haryt baradaky maglumatlarda, şeýle hem beýleki elýeterli usullar bilen Alyjynyň dykgatyna ýetirilýär.
              </span>
            </div>
          </ol>

          {/* 7 */}
          <ol>
            <li className="font-bold text-center my-5">7. HARYT ÜÇIN KEPILLILIK WE ÇALYŞMAK</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex">
              <span className="mr-2">7.1 </span>
              <span>
              Satyn alyjy şahsy peýdalanmaga degişli, aýratyn kesgitlenýän häsiýetleri bolan, gowy hilli önümden ýüz öwürmäge hukugy ýokdyr.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">7.2 </span>
              <span>
              Haryt kabul edilenden we tölenenden soň ýüze çykýan satyn alnan Harydyň hiline bildirilýän nägilelikler Türkmenistanyň “Sarp edijileriň hukuklaryny goramak hakyndaky” kanunyna laýyklykda seredilýär.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">7.3 </span>
              <span>
                <strong>Haryt kabul edilen wagty, Satyn alyjy onuň internet dükanynyň degişli sahypasynda görkezilen beýan edilen aýratynlyklara laýyklygyny barlamagy öz üstüne alýar. Satyn alyjy tarapyndan alnan we beýan edilen hiliň berjaý edilendigi barlanylan Haryt alyş-çalyş ýa-da yzyna gaýtarylmaga degişli däldir.
                </strong>
              </span>
            </div>
          </ol>

          {/* 8 */}
          <ol>
            <li className="font-bold text-center my-5">8. ŞAHSY MAGLUMATLARY GORAMAK</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex">
              <span className="mr-2">8.1 </span>
              <span>
              Internet dükanynyň web sahypasyna agza bolanda we/ýa-da Sargyt ýerleşdireninde öz şahsy maglumatlaryny bermek bilen, Satyn alyjy Operatora geçiren ähli şahsy maglumatlarynyň gaýtadan işlenilmegi, üýşürilmegi, ulgamlaşdyrylmagy, ýygnalmagy, saklanmagy, anyklanylmagy (täzelenmegi, üýtgedilmegi), ulanylmagy, şahsyýetsizleşdirilmegi, geçirilmegi (üpjün edilmegi, giriş berilmegi, serhetara geçirilmegi), blokirlenmegi, ýok edilmegi üçin Operatora razylyk berýär. Bu maglumatlara şol sanda, Satyn alyjyny internet dükanynyň web sahypasynda hasaba almak, internet dükanynyň web sahypasynda Satyn alyjy tarapyndan Sargyt bermek, Harytlar/hyzmatlar barada we olary satyn almagyň şertleri barada maglumat bermek, Harytlar üçin satyn almak-satmak şertnamasyny ýerine ýetirmek maksady bilen hasaba alyş wagtynda we internet dükanynyň web sahypasynda Sargyt goýlanda görkezilenler hem degişlidir.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">8.2 </span>
              <span>
              Bu Ylalaşygyň şertlerini kabul etmek bilen, Satyn alyjy: ähli maglumatlaryň meýletin berilýändigini tassyklaýar.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">8.3 </span>
              <span>
              Operator Satyn alyjydan alnan maglumatlary aýan etmezligi öz üstüne alýar. Şol bir wagtyň özünde, aýan etmek borjy hereket edýän kanunçylygyň talaplary bilen kesgitlenen ýagdaýynda maglumatlaryň aýan edilmegi borçnamalarynyň bozulmagy hökmünde hasap edilmeýär.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">8.4 </span>
              <span>
              Bu Ylalaşygyň şertlerini kabul etmek bilen, Satyn alyjy, görkezilen şahsy maglumatlarynyň Operator ýa-da Satyn alyjynyň öňünde öz jogapkärçiliklerini ýerine ýetirmek maksady bilen Operator bilen işleýän üçünji taraplar bilen habarlaşmak üçin ulanylmagyna razylaşýar. Şeýle hem bu maglumatlar habarlary ibermek we Sargydy eltip bermäge geçirmek maksady bilen ulanylar. Muňa Satyjy/Operatoryň şu Ylalaşyga laýyklykda borçnamalarynyň ýerine ýetirilmegi bilen gönüden-göni baglanyşykly beýleki maglumatlar hem degişlidir.
              </span>
            </div>
          </ol>

          {/* 9 */}
          <ol>
            <li className="font-bold text-center my-5">9. SYNLAR WE GOŞMAÇA ŞERTLER</li>
          </ol>
          <ol type="1" className="ml-8">
            <div className="flex">
              <span className="mr-2">9.1 </span>
              <span>
              Satyn alyjy, satyn alan Harytlar barada suratlar bilen teswirleri we synlary goýmaga hukugy bardyr.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">9.2 </span>
              <span>
              Satyn alyjy, bu maglumatlaryň takyklygy, şeýle hem bu teswirleriň, synlaryň we suratlaryň ahlak ýörelgelerine ters gelmeýänligi, adam mertebesini kiçeltmeýänligi we jemgyýetçilik tertibine ters gelmeýänligi üçin Türkmenistanyň hereket edýän kanunçylygyna laýyklykda jogapkärdir.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">9.3 </span>
              <span>
              Satyn alyjy, jemgyýetçilik düzgünlerine laýyk gelmeýän ýagdaýynda Satyn alyjynyň teswirlerini, synlaryny we suratlaryny pozmaga ýa-da moderirlemäge Operatoryň hukugynyň bardygyny kabul edýär. Bu ýagdaýa beýleki Satyn alyjylaryň hukuklarynyň we mertebesiniň bozulmagy barada hökümet edaralaryna habar berilmegi hem degişlidir.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">9.4 </span>
              <span>
              Satyn alyjy, satyn alan harydyna teswir ýa-da syn goýanda, synda görülýän şahsy maglumatlarynyň internet dükanyny ulanyjylaryň hemmesine elýeterli boljakdygyna razy bolýar.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">9.5 </span>
              <span>
              Internet dükany we hödürlenýän hyzmatlar, tehniki hyzmat ýa-da başga bir işleriň geçirilmegi sebäpli ýa-da başga bir tehniki häsiýetli islendik sebäpler bilen wagtlaýyn, bölekleýin ýa-da doly elýeterli bolman biler. Operatoryň tehniki hyzmatynyň Satyn alyjylara öňünden duýduryp ýa-da duýdurmazdan zerur öňüni alyş ýa-da başga işleri wagtal-wagtal ýerine ýetirmäge hukugy bardyr.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">9.6 </span>
              <span>
              Türkmenistanyň kanunçylygynyň düzgünleri Satyn alyjy bilen Satyjynyň, şeýle hem Operatoryň arasyndaky gatnaşyklara degişlidir.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">9.7 </span>
              <span>
              Satyn alyjynyň soraglary we nägilelikleri ýüze çykan halatynda, Operator bilen telefon arkaly ýa-da şu Ylalaşykda ýa-da internet dükanynyň web sahypasynyň degişli bölüminde görkezilen islendik başga ýol bilen habarlaşmaga hukugy bardyr.
              </span>
            </div>
            <div className="flex">
              <span className="mr-2">9.8 </span>
              <span>
              Kazyýet tarapyndan şu Ylalaşygyň islendik düzgüniniň hakyky däldiginiň ykrar edilmegi, galan düzgünleriň güýjüni ýitirmeýär.
              </span>
            </div>
          </ol>


          <p className="text-center my-5"><strong><span>OPERATORYŇ MAGLUMATLARY</span></strong></p>
          <p><strong><span>Operator:</span></strong></p>
          <p><span>Hususy telekeçi Maýsa Täçgeldiewa</span></p>
          <p><span>+99361163167</span></p>
        </div>
      </div>
    )
  }

}

export default TermsConditions
