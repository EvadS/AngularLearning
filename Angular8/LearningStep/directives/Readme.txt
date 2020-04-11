  <p [appStyle]="'red'" [dStyles]="{border: '1px solid blue', borderRadius: '5px'}">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, laborum!
  </p>

  <p [appStyle]="'blue'" [dStyles]="{border: '1px solid red', borderRadius: '15px'}">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, laborum!
  </p>
  
  
  [dStyles] -  это объект 
  --------------------------------------------------
  если мы задаем в таком формате 
   * appStyle="blue" - то это текстовая переменная,
если мы не обворачиваем в бадинг переменную то она все равно байндится, но ее значение всегда будет строковое
т.е. если передаем параметр строку то ее необзательно байндить 

 <p appStyle='red' fontWeight="bold">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, laborum!
  </p>
  --
  @Input('appStyle') color: string = 'blue'
  //поскольку строка - можно не указывать название параметра и тип
  @Input() fontWeight = 'normal'
  -------------------------------
   
   * [appStyle]='"blue"' если мы хотим записать js объект 
   
   --------------------------------------------------------------
   передаем объект с несколькими полями
   [dStyles]="{border: '1px solid blue', borderRadius: '5px'}"
   --
каждый параметр проставляется как необязательный
    @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string}
