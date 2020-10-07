import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

const charactersCollection = new CharactersCollection('xXaghlnmvqfys')
const sorter = new Sorter(charactersCollection)

sorter.sort()
console.log(charactersCollection.data)
