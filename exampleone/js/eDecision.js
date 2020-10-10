  function mostrarmensaje()
    {
      let edad = parseInt(document.getElementById('edad').value);

           if (edad >=18)
             {
             mens ="sos mayor de edad"
             }
              else
                {
                mens= "sos menor de edad"
               }
                  //if con operador ternario

           //    let mens = (edad >=18) ? "sos mayor de edad" : "sos menor de edad"
           //       alert(mens)
                  document.write(mens)
    }
function mostrarmensajeDos()
{
    let edadp = parseInt(document.getElementById('edadp').value)
    let = estaturap =  parseFloat(document.getElementById('estaturap').value)
    let = pesop= parseInt(document.getElementById('pesop').value)

    const parametroedad = 20
    const parametroestatura= 1.40
    const parametropeso = 40
    let mensD =""


        if (edadp <= parametroedad) {
            if (estaturap >= parametroestatura) {
                if (pesop == parametropeso) {

                   mensD ="puede hacer la labor"

                } else {
                   mensD ="peso no valido .no apto"
           }

             } else {
                mensD="estatura no valida.no apto"
             }

         } else {
            mensD = "edad error no apto"

         }
         alert (mensD)
                    //if con operador logico and y  (&&)
                    // if (edadp <= parametroedad && estaturap >= parametroestatura && pesop == parametropeso) {
                    //     mensD = "apto para realizae el deporte"
                    // } else {
                    //     mensD = "no apto para realizar el deporte"
                    // }
                    // alert(mensD)


        //         // if con operardor logico or(||)
        //         if (edadp <= parametroedad || estaturap >= parametroestatura || pesop == parametropeso) {
        //             mensD = "apto para realizae el deporte"
        //         } else {
        //             mensD = "no apto para realizar el deporte"
        //         }
        //         alert(mensD)


      }

        function mostrarmensajetres()
        {
          let productname =document.getElementById('productname').value
          let price = 0
          const product_one ='A'
           const product_two ='B'
           const product_three ='C'
           const MESSAGE ='product invalido'
        /*  if (productname.toUpperCase() == product_one) {
              price = 2000
              
           } else {
              if (productname.toUpperCase() == product_two) {
                 price = 2200
                 
              } else {
                 if (productname.toUpperCase() == product_three) {
                    price = 1800
                    

                 } else {
                   alert (MESSAGE.toUpperCase())

                 }

             }

            }

           alert(price)
         }
*/
            switch (productname.toUpperCase()) {
                  case product_one:
                     price =20000
                     break;
                     case product_two:
                        price = 30000
                        break;
                           case product_three:
                            price = 18000
                            break;


                  default:

                     alert(MESSAGE.toUpperCase)

                     break;

               }
               alert(Intl.NumberFormat().format(price))

            }




         // function prenderApagar(interruptor)
          
               let prenderApagar  =  interruptor  => {
                  let pic
           /*    if (interruptor == 0) {
                  alert('off')

               } else {
                  alert('on')
               }*/
               let mensaje = interruptor == 0 ? "off" : "on"
                     alert(mensaje)
          }

          function hotel ()
          {
             let cantidad_personas = document.getElementById('cantidad_personas').value
             let cantidad_dias   =  document.getElementById('cantidad_dias').value
             let subtotal = 0
             let total = 0
             let tarifa =  0

             const tarifa_individual = 2500
             const tarifa_doble=4600
             const tarifa_familiar= 5200
             const iva =(19/100)

             if (cantidad_personas ==1) {
                subtotal =(tarifa_individual * cantidad_dias)
                total =(subtotal+(subtotal*iva))
                tarifa=(total-(total*(5/100)))
                
             } else {
               if (cantidad_personas==2) {
                  subtotal=(tarifa_doble * cantidad_dias)
                  total=(subtotal+(subtotal*iva))
                  tarifa=(total-(total*(9/100)))
                  
               } else {
                  if (cantidad_personas >=3) {
                     subtotal=(tarifa_familiar * cantidad_dias)
                     total =(subtotal+(subtotal*iva))
                     tarifa=(total-(total*(15/100)))
                     
                  } 
                     
                  }
                  
               }

               let mensaje=('precio sin iva:' + subtotal + '\nprecio con iva:' + total + '\ntotal tarifa con descuento:' + tarifa  );

               alert(mensaje)
                
             }
            