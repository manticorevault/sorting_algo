interface Sortable {
  length: number
  compare(leftIndex: number, rightIndex: number): boolean
  swap(leftIndex: number, rightIndex: number): void
}

export abstract class Sorter {
  abstract length: number
  abstract compare(leftIndex: number, rightIndex: number): boolean
  abstract swap(leftIndex: number, rightIndex: number): void

  sort(): void {
    const { length } = this

    for (let counter = 0; counter < length; counter++) {
      for (let jCounter = 0; jCounter < length - counter - 1; jCounter++) {
        if (this.compare(jCounter, jCounter + 1)) {
          this.swap(jCounter, jCounter + 1)
        }
      }
    }
  }
}
