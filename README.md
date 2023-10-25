Advent of Code
===

## Calorie Counting

## Requirements

NodeJS `v12.22.9`

### Executing

```sh
js part1.js
```

### Logic

 - The text file `list.txt` that holds the data set is read into an array by spliting items 
by new line `\n` 
 - Sections are summed up when a blank line is encountered in the loop then the sum is reset to zero
for the next section.
 - At the end a `totals` list is sorted by descending order.
 - Top most figure has most calories.



