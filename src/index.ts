class Sorter {
	constructor(public collection: number[]) {}

	sort(): void {
		const { length } = this.collection;

		for (let counter = 0; counter < length; counter++) {
			for (
				let jCounter = 0;
				jCounter < length - counter - 1;
				jCounter++
			) {
				if (
					this.collection[jCounter] >
					this.collection[jCounter + 1]
				) {
					const leftHand = this.collection[jCounter];
					this.collection[jCounter] = this.collection[
						jCounter + 1
					];
					this.collection[jCounter + 1] = leftHand;
				}
			}
		}
	}
}

const sorter = new Sorter([10, 3, -5, 0]);

sorter.sort();

console.log(sorter.collection);
