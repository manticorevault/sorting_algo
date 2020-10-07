import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'

const numbersCollection = new NumbersCollection([15, 33, -15, 0, -96])
const sorter = new Sorter(numbersCollection)

sorter.sort()

console.log(numbersCollection.data)
