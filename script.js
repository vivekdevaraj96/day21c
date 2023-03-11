// https://rest.coinapi.io/

// GET /v1/symbols?filter_symbol_id={filter_symbol_id}&filter_exchange_id={filter_exchange_id}&filter_asset_id={filter_asset_id}

// fetch("https://rest.coinapi.io/v1/exchangerate/BTC?apikey=5E160E6D-3929-478E-A99B-4C129F2B5ABA")

fetch("https://rest.coinapi.io/v1/assets/icons/32?apikey=5E160E6D-3929-478E-A99B-4C129F2B5ABA")


      
      
        .then(response => response.json())
        .then(result => {console.log(result)
               

                container=document.querySelector('#options')
                for(i of result){
                        opt=document.createElement('option');
                        opt.innerHTML=`${i.asset_id}`
                        // console.log(i.url)

                        container.append(opt)
                }
                var form_check=document.querySelector('.search')
                form_check.addEventListener('submit',(e)=>{
                e.preventDefault()
                sel=document.querySelector('#options')
                selvalue=sel.value;
                console.log(selvalue)


                fetch(`https://rest.coinapi.io/v1/assets/${selvalue}?apikey=5E160E6D-3929-478E-A99B-4C129F2B5ABA`)
                
                .then(response => response.json())
                .then(result1 => {console.log(result1)
                        disp=document.querySelector('#disp')
                        disp.innerHTML=`
                                        <h2>Name=${result1[0].name}</h2>
                                        <h3>crypto id=${result1[0].asset_id}</h3>
                                        <h3>crypto developed Date=${result1[0].asset_id}</h3>
                                        <h3>crypto developed Date=${result1[0].data_start}</h3>
                                        <h3>Price in USD=${result1[0].price_usd}</h3>
                                        <h3>Trading start Date=${result1[0].data_trade_start}</h3>
                                        <h3>last Trade Date=${result1[0].data_trade_end}</h3>`
                
                })

                })
        
                
          })
        .catch(error => console.log('error', error));