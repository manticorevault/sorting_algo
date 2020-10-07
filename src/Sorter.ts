interface Sortable {
  length: number
  compare(leftIndex: number, rightIndex: number): boolean
  swap(leftIndex: number, rightIndex: number): void
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection

    for (let counter = 0; counter < length; counter++) {
      for (let jCounter = 0; jCounter < length - counter - 1; jCounter++) {
        if (this.collection.compare(jCounter, jCounter + 1)) {
          this.collection.swap(jCounter, jCounter + 1)
        }
      }
    }
  }
}
