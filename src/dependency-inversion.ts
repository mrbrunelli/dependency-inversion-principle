import axios from 'axios'

class CepController {
  constructor(
    private httpRequest: HttpRequest
  ) { }

   async consult(url: string): Promise<any> {
    return await this.httpRequest.get(url)
  }

   async send(url: string, body: any): Promise<any> {
    return await this.httpRequest.post(url, body)
  }
}

interface HttpRequest {
  get (url: string): Promise<any>
  post (url: string, body: any): Promise<any>
}

class HttpRequestService implements HttpRequest {
  async get (url: string): Promise<any> {
    return await axios.get(url)
  }

  async post (url: string, body: any): Promise<any> {
    return await axios.post(url, body)
  }
}

const http = new HttpRequestService()
const cep = new CepController(http)

cep.consult('https://viacep.com.br/ws/87485000/json/')
  .then(res => console.log(res.data))
  .catch(error => console.log(error.message))

// Por falta de uma API de CEPs com método Post, resolvi utilizar minha API de Login para exemplificar
cep.send('https://api-find.herokuapp.com/api/login', { email: 'fake@fake.com.br', senha: 'fake' })
  .then(res => console.log(res.data))
  .catch(error => console.log(error.message))
