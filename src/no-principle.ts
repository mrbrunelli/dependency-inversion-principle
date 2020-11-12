import axios from 'axios'

class CepController {
   async consult(url: string): Promise<any> {
    return await axios.get(url)
  }
}

const cep = new CepController()

cep.consult('https://viacep.com.br/ws/87485000/json/')
  .then(res => console.log(res.data))
  .catch(error => console.log(error.message))
