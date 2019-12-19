import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson11',
  templateUrl: './lesson11.component.html',
  styleUrls: ['./lesson11.component.less']
})
export class Lesson11Component implements OnInit {

  slideInterval = 300000;
  thymeLeafTagList = [
  'th:abbr',	'th:accept',	'th:accept-charset',
  'th:accesskey',	'th:action',	'th:align',
  'th:alt',	'th:archive',	'th:audio',
  'th:autocomplete',	'th:axis',	'th:background',
  'th:bgcolor',	'th:border',	'th:cellpadding',
  'th:cellspacing',	'th:challenge',	'th:charset',
  'th:cite',	'th:class',	'th:classid',
  'th:codebase',	'th:codetype',	'th:cols',
  'th:colspan',	'th:compact',	'th:content',
  'th:contenteditable',	'th:contextmenu',	'th:data',
  'th:datetime',	'th:dir',	'th:draggable',
  'th:dropzone',	'th:enctype',	'th:for',
  'th:form',	'th:formaction',	'th:formenctype',
  'th:formmethod',	'th:formtarget',	'th:frame',
  'th:frameborder',	'th:headers',	'th:height',
  'th:high',	'th:href',	'th:hreflang',
  'th:hspace',	'th:http-equiv',	'th:icon',
  'th:id',	'th:keytype',	'th:kind',
  'th:label',	'th:lang',	'th:list',
  'th:longdesc',	'th:low',	'th:manifest',
  'th:marginheight',	'th:marginwidth',	'th:max',
  'th:maxlength',	'th:media',	'th:method',
  'th:min',	'th:name',	'th:optimum',
  'th:pattern',	'th:placeholder',	'th:poster',
  'th:preload',	'th:radiogroup',	'th:rel',
  'th:rev',	'th:rows',	'th:rowspan',
  'th:rules',	'th:sandbox',	'th:scheme',
  'th:scope',	'th:scrolling',	'th:size',
  'th:sizes',	'th:span',	'th:spellcheck',
  'th:src',	'th:srclang',	'th:standby',
  'th:start',	'th:step',	'th:style',
  'th:summary',	'th:tabindex',	'th:target',
  'th:title',	'th:type',	'th:usemap',
  'th:value',	'th:valuetype',	'th:vspace',
  'th:width',	'th:wrap',	'th:xmlbase',
  'th:xmllang',	'th:xmlspace',
  'th:include', 'th:replace', 'th:fragment', 'th:if',
  'th:unless', 'th:switch', 'th:case', 'th:with',
  'th:attrprepend', 'th:attrappend', 'th:step',
  'th:href', 'th:remove'];
  modelsUsedFor = ['Storing Data', 'Organizing Data', 'Retrieving Data', 'CRUD Operations - Create, Read, Update, Delete'];
  constructor() { }

  ngOnInit() {
  }

}
