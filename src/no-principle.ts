import axios from 'axios'

class CepController {
   async consult(url: string): Promise<any> {
    return await axios.get(url)
  }

   async send(url: string, body: any): Promise<any> {
    return await axios.post(url, body)
  }
}

const cep = new CepController()

cep.consult('https://viacep.com.br/ws/87485000/json/')
  .then(res => console.log(res.data))
  .catch(error => console.log(error.message))

// Por falta de uma API de CEPs com método Post, resolvi utilizar minha API de Login para exemplificar
cep.send('https://api-find.herokuapp.com/api/login', { email: 'fake@fake.com.br', senha: 'fake' })
  .then(res => console.log(res.data))
  .catch(error => console.log(error.message))