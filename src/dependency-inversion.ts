import axios from 'axios'

class CepController {
  constructor(
    private httpRequest: HttpRequest
  ) { }

   async consult(url: string): Promise<any> {
    return await this.httpRequest.get(url)
  }
}

interface HttpRequest {
  get (url: string): Promise<any>
}

class HttpRequestService implements HttpRequest {
  async get (url: string): Promise<any> {
    return await axios.get(url)
  }
}

const http = new HttpRequestService()
const cep = new CepController(http)

cep.consult('https://viacep.com.br/ws/87485000/json/')
  .then(res => console.log(res.data))
  .catch(error => console.log(error.message))
