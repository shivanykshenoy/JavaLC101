import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.less']
})
export class Lesson2Component implements OnInit {
  slideInterval = 300000;
  stringMethods =  [{
    name: 'str.charAt(3)',
    description: 'Returns the character at index 3'
    },
    {
      name: 'str.substring(2,4)',
      description: 'Returns the characters from indexes 2 - 4'
    },
    {
      name: 'str.length()',
      description: 'Returns the length of the string'
    },
    {
      name: 'str.indexOf(\'a\')',
      description: 'Returns the index for the first occurrence of \'a\''
    },
    {
      name: 'str.split("delimiter")',
      description: 'Splits the string into sections at each delimiter and stores the sections as elements in an array'
    },
    {
      name: 'str.concat("Hello").concat(" World")',
      description: 'Concat concatenates only 2 strings, method chaining may be required for joining multiple strings'
    },
    {
      name: 'str.trim()',
      description: 'Removes any whitespace, new line or tab at the beginning or end of the string'
    },
    {
      name: 'str.toUpperCase(), str.toLowerCase()',
      description: 'Changes all alpha characters to UPPERCASE or Lowercase'
    },
    {
      name: 'str.contains("text")',
      description: 'Searches for the specified text within a string and returns true or false'
    },
    {
      name: 'str.equals(otherString)',
      description: 'Case sensitive equality, if the 2 string values are equal returns true'
    },
    {
      name: 'str.equalsIgnoreCase(otherString)',
      description: 'Case insensitive equality, considers "Test" and "test" and "TEst" to be equal'
    }
  ];
  primitiveTypes = [{
    name: 'int',
    example: '42',
    description: 'Represents positive and negative whole numbers'
  },
    {
      name: 'float',
      example: '3.141593 and 1234.567 and 2.0',
      description: 'Represents positive and negative decimal numbers with up to 7 digits'
    },
    {
      name: 'double',
      example: '3.14159265358979',
      description: 'Represents positive nad negative decimal numbers with 15-16 digits'
    },
    {
      name: 'char',
      example: '\'a\', \'9\' and \'n\'',
      description: 'A single unicode character enclosed in single quotes'
    },
    {
      name: 'boolean',
      example: 'true and false',
      description: 'boolean values in Java'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
