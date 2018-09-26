
document.addEventListener('DOMContentLoaded', function() {
	
  let db = connect('https://codesign-9eb8c.firebaseio.com/')

  let query = extract()

  let path  = query["url"]
  db.download(path, function(data) {
  		
  
    replace('body', {
      "Visão_geral": data["visao geral"],
      "Procedimentos": data["procedimentos"],
      "Projeto": data["name"],
      "finais": data["consideraçoes finais"],
      "necessários": data["conhecimentos necessarios"],
      "adquiridos": data["conhecimentos adiquiridos"]
    })

  })


})