document.addEventListener('DOMContentLoaded', function() {
	
  	let db = connect('https://codesign-9eb8c.firebaseio.com/')



  	let path = '/'
  	db.download(path, function(data) {
  	 console.log(data)
     
    	let lista = []
        for( let key in (data["Cálculo"]["courses"])){
          	lista.push(data["Cálculo"]["courses"][key]["name"][0])
      }
    	
     	let lista2 = []
        for( let key2 in (data["Design"]["courses"])){
          	lista2.push(data["Design"]["courses"][key2]["name"][0])
      }
      
      let lista3 = []
        for( let key3 in (data["Eletronica"]["courses"])){
            lista3.push(data["Eletronica"]["courses"][key3]["name"][0])
      }
      
      let lista4 = []
        for( let key4 in (data["Modelos"]["courses"])){
            lista4.push(data["Modelos"]["courses"][key4]["name"][0])
      }
    
      let lista5 = []
        for( let key5 in (data["Programacao"]["courses"])){
            lista5.push(data["Programacao"]["courses"][key5]["name"][0])
      }

      replace('body', {
        "Programação": data["Programacao"]["name"],
        "lolo41": lista5[0],
        "lolo42": lista5[1],
        "calculo": data["Cálculo"]["name"],
        "lolo01": lista[0],
        "lolo02": lista[1],
        "lolo03":lista[2],
        "lolo04":lista[3],
        "Design": data["Design"]["name"],
        "lolo11": lista2[0],
        "lolo12": lista2[1],
        "lolo13":lista2[2],
        "Eletronica": data["Eletronica"]["name"],
        "lolo21": lista3[0],
        "lolo22": lista3[1],
        "lolo23":lista3[2],
        "negócios": data["Modelos"] ["name"],
        "lolo31": lista4[0],
        "lolo32": lista4[1],
        "lolo33":lista4[2]

      })
      /*
        Inicializa uma medição de tempo, que será gravada no
        banco de dados cujo endereço é passado como parâmetro.
        Altere o endereço abaixo para seu próprio banco de dados.
    */
    let ab = start('https://codesign-testeab.firebaseio.com/')

    /*
        Seleciona o elemento que, quando clicado, finaliza a
        medição de tempo e envia o resultado para o banco.
        Altere o seletor abaixo para o do elemento desejado.
    */
    let element = document.querySelector('.wololo')

    /*
        A princípio, o restante do código não precisa mudar.
    */

    element.addEventListener('click', function() {
        ab.finish()
    })

    let as = document.querySelectorAll('a')

    for(let a of as) {
        a.addEventListener('click', function(event) {
            event.preventDefault()
            setTimeout(function() {
                window.location.assign(a.href)
            }, 5000)
        })
    }
   })


})
