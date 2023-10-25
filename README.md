Advent of Code
===

## Calorie Counting

## Requirements

NodeJS `v12.22.9`

### Executing

```sh
js part1.js list.txt
js part2.js list.txt
```

### Logic

 - Part 1: `datasource.js` opens the `list.txt` and gets raw data
	 - The text file `list.txt` that holds the data set is read into an array by spliting items 
	by new line `\n` 
	 - Uses simple `RegExp` to check for malformed input `/^[0-9]+$/` and skips empty string
	 - Sections are summed up when a blank line is encountered in the loop then the sum is reset to zero
	for the next section.
	 - At the end a `totals` list is sorted by descending order.
	 - Top most figure has most calories.
 - Part 2: `totals` list is spliced, reduced and summed to get total calories for top 3 elves.



