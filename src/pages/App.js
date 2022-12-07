import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';
import { Container } from './styles';
function App() {
  const [ repos, setRepos ] = useState([])
  const [ currentRepo, setCurrentRepo ] = useState('')
  const handleRemoveRepo = (id) => {
    const filteredRepos = repos.filter(repo => repo.id !== id)
    setRepos(filteredRepos)
    setCurrentRepo('')
  }
  const handleSearchRepo = async () => {
    console.log(api)
    const { data } = await api.get(`repos/${currentRepo}`)

    if(data.id) {
      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist) {
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
        return
      }
      setCurrentRepo('')
    }
  }

  return (
    <div className="App">
      <Container>
        <h1>Wiki GitHub</h1>
        <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
        <Button onClick={handleSearchRepo}/>
        {repos.map( repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
        
      </Container>
    </div>
  );
}

export default App;
