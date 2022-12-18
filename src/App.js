import React from "react";
import Header from './components/Header.js';
import TextBlock from './components/TextBlock.js';

// const TextBlockContent = {
// 'Дефекты есть почти во всех квартирах': '9 из 10 квартир сдаются застройщиками со строительными дефектами. Отклонения от норм СНИПов и ГОСТов, сколы, царапины, трещины, кривые стены, плитка, вздутый ламинат, продувания оконных рам, проблемы с вентиляцией и др.',
// 'Застройщик не инициирует решение проблем за Вас': 'Застройщики практически никогда не устраняют недостатки, исключение составляют те дефекты, которые препятствуют проживанию в квартире. Соответственно покупателям приходится проводить дополнительные строительные работы и ремонт самостоятельно за свой счет.',                
// 'Это сделаем мы': 'Мы оказываем полный спектр услуг, от проверки качества (приёмки) новой квартиры, до взыскания компенсации штрафных санкций с застройщика за ненадлежащее качество переданной квартиры.'
// };


function App(){
  return (
    <div>
      <Header/>
      <div className="Main">
        <h1>Для чего нужна оценка квартиры?</h1>
        <TextBlock/>
      </div>
    </div>
    );
}
export default App;

