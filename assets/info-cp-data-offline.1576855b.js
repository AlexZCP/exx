import{j as o,k as c,l as n,D as a,e as s}from"./naive-ui.26efb6a0.js";var t={};const r=o({setup(l){const e=`
# CP DataList Offline
Datalist is used to displays rows of structured data.
Offline modifications means that 

## Props specifications

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Type</th>
			<th>Default</th>
			<th>Description</th>
		</tr>
	</thead>
  
  <tbody>
  	<tr>
    <td>bordered</td>
	<td>
		<code class="n-text n-text--code">boolean</code>
	</td>
	<td>
		<code class="n-text n-text--code">true</code>
	</td>
	<td>Whether to show border.</td>
	</tr>
	<tr>
	<td>bottom-bordered</td>
	<td>
	<code class="n-text n-text--code">boolean</code>
	</td>
	<td>
	<code class="n-text n-text--code">true</code>
	</td>
	<td>Whether to show bottom border.</td>
	</tr>
	<tr>
	<td>checked-row-keys</td>
	<td>
	<code class="n-text n-text--code">Array&lt;string | number&gt;</code>
	</td>
	<td>
	<code class="n-text n-text--code">undefined</code>
	</td>
	<td>The keys of checked rows.</td>
	</tr>
	<tr>
	<td>cascade</td>
	<td>
	<code class="n-text n-text--code">boolean</code>
	</td>
	<td>
	<code class="n-text n-text--code">true</code>
	</td>
	<td>Whether to do cascade checking when using tree data.</td>
	</tr>
	<tr>
	<td>children-key</td>
	<td>
	<code class="n-text n-text--code">string</code>
	</td>
	<td>
	<code class="n-text n-text--code">'children'</code>
	</td>
	<td>The key of children data in tree data's data entity.</td>
	</tr>
	<tr>
	<td>columns</td>
	<td>
	<code class="n-text n-text--code">Array&lt;DataTableColumn&gt;</code>
	</td>
	<td>
	<code class="n-text n-text--code">[]</code>
	</td>
	<td>Columns to display.</td>
	</tr>
	<tr>
	<td>data</td>
	<td>
	<code class="n-text n-text--code">Array&lt;object&gt;</code>
	</td>
	<td>
	<code class="n-text n-text--code">[]</code>
	</td>
	<td>Data to display.</td>
	</tr>
	<tr>
	<td>default-checked-row-keys</td>
	<td>
	<code class="n-text n-text--code">Array&lt;string | number&gt;</code>
	</td>
	<td>
	<code class="n-text n-text--code">[]</code>
	</td>
	<td>The key value selected by default.</td>
	</tr>
	<tr>
	<td>default-expanded-row-keys</td>
	<td>
	<code class="n-text n-text--code">Array&lt;string | number&gt;</code>
	</td>
	<td>
	<code class="n-text n-text--code">[]</code>
	</td>
	<td>The key value of the expanded tree data by default</td>
	</tr>
	<tr>
	<td>expanded-row-keys</td>
	<td>
	<code class="n-text n-text--code">Array&lt;string | number&gt;</code>
	</td>
	<td>
	<code class="n-text n-text--code">undefined</code>
	</td>
	<td>Expanded row keys.</td>
	</tr>
	<tr>
	<td>flex-height</td>
	<td>
	<code class="n-text n-text--code">boolean</code>
	</td>
	<td>
	<code class="n-text n-text--code">false</code>
	</td>
	<td>Whether to make table body's height auto fit table area height. Make it enabled will make <code class="n-text n-text--code">table-layout</code> always set to <code class="n-text n-text--code">'fixed'</code>.</td>
	</tr>
	<tr>
	<td>indent</td>
	<td>
	<code class="n-text n-text--code">number</code>
	</td>
	<td>
	<code class="n-text n-text--code">16</code>
	</td>
	<td>Indent of row content when using tree data.</td>
	</tr>
	<tr>
	<td>loading</td>
	<td>
	<code class="n-text n-text--code">boolean</code>
	</td>
	<td>
	<code class="n-text n-text--code">false</code>
	</td>
	<td>Whether to display loading status.</td>
	</tr>
	<tr>
	<td>max-height</td>
	<td>
	<code class="n-text n-text--code">number | string</code>
	</td>
	<td>
	<code class="n-text n-text--code">undefined</code>
	</td>
	<td>The max-height of the table content. Can be a CSS value.</td>
	</tr>
	<tr>
	<td>min-height</td>
	<td>
	<code class="n-text n-text--code">number | string</code>
	</td>
	<td>
	<code class="n-text n-text--code">undefined</code>
	</td>
	<td>The min-height of the table content. Can be a CSS value.</td>
	</tr>
	<tr>
	<td>pagination</td>
	<td>
	<code class="n-text n-text--code">false | object</code>
	</td>
	<td>
	<code class="n-text n-text--code">false</code>
	</td>
	<td>See <a class="n-a" href="/en-US/os-theme/components/pagination#Pagination-Props">Pagination props</a>
	</td>
	</tr>
	<tr>
	<td>remote</td>
	<td>
	<code class="n-text n-text--code">boolean</code>
	</td>
	<td>
	<code class="n-text n-text--code">false</code>
	</td>
	<td>If data-table do automatic paging. You may set it to <code class="n-text n-text--code">false</code> in async usage.</td>
	</tr>
	<tr>
	<td>row-class-name</td>
	<td>
	<code class="n-text n-text--code">string | (rowData: object, rowIndex : number) =&gt; string | object</code>
	</td>
	<td>
	<code class="n-text n-text--code">undefined</code>
	</td>
	<td>Class name of each row.</td>
	</tr>
	<tr>
	<td>row-key</td>
	<td>
	<code class="n-text n-text--code">(rowData: object) =&gt; (number | string)</code>
	</td>
	<td>
	<code class="n-text n-text--code">undefined</code>
	</td>
	<td>Generate the key of the row by row data (if you don't want to set the key).</td>
	</tr>
	<tr>
	<td>row-props</td>
	<td>
	<code class="n-text n-text--code">(rowData: object, rowIndex : number) =&gt; object</code>
	</td>
	<td>
	<code class="n-text n-text--code">undefined</code>
	</td>
	<td>Customize row attributes.</td>
	</tr>
	<tr>
	<td>scroll-x</td>
	<td>
	<code class="n-text n-text--code">number | string</code>
	</td>
	<td>
	<code class="n-text n-text--code">undefined</code>
	</td>
	<td>If columns are horizontal fixed, scroll-x need to be set.</td>
	</tr>
	<tr>
	<td>single-column</td>
	<td>
	<code class="n-text n-text--code">boolean</code>
	</td>
	<td>
	<code class="n-text n-text--code">false</code>
	</td>
	<td>Whether rows are not divided. If the prop is <code class="n-text n-text--code">true</code>, table cell has no <code class="n-text n-text--code">border-bottom</code>.</td>
	</tr>
	<tr>
	<td>single-line</td>
	<td>
	<code class="n-text n-text--code">boolean</code>
	</td>
	<td>
	<code class="n-text n-text--code">true</code>
	</td>
	<td>Whether columns are not divided. If the prop is <code class="n-text n-text--code">true</code>, table cell has no <code class="n-text n-text--code">border-right</code>.</td>
	</tr>
	<tr>
	<td>size</td>
	<td>
	<code class="n-text n-text--code">'small' | 'medium' | 'large'</code>
	</td>
	<td>
	<code class="n-text n-text--code">'medium'</code>
	</td>
	<td>Table size.</td>
	</tr>
	<tr>
	<td>striped</td>
	<td>
	<code class="n-text n-text--code">boolean</code>
	</td>
	<td>
	<code class="n-text n-text--code">false</code>
	</td>
	<td>Whether to show zebra stripes on rows.</td>
	</tr>
	<tr>
	<td>summary</td>
	<td>
	<code class="n-text n-text--code">DataTableCreateSummary</code>
	</td>
	<td>
	<code class="n-text n-text--code">undefined</code>
	</td>
	<td>Data of table summary row. For types, see <a class="n-a" href="#DataTableCreateSummary-Type">DataTableCreateSummary Type</a>.</td>
	</tr>
	<tr>
	<td>table-layout</td>
	<td>
	<code class="n-text n-text--code">'auto' | 'fixed'</code>
	</td>
	<td>
	<code class="n-text n-text--code">'auto'</code>
	</td>
	<td>Style <code class="n-text n-text--code">table-layout</code> of the table. When <code class="n-text n-text--code">ellipsis</code> or <code class="n-text n-text--code">max-height</code> or <code class="n-text n-text--code">flex-height</code> are set, it will always be <code class="n-text n-text--code">'fixed'</code> regardless of what you set.</td>
	</tr>
	<tr>
	<td>virtual-scroll</td>
	<td>
	<code class="n-text n-text--code">boolean</code>
	</td>
	<td>
	<code class="n-text n-text--code">false</code>
	</td>
	<td>Whether to use virtual scroll to deal with large data. Make sure <code class="n-text n-text--code">max-height</code> is set before using it. When <code class="n-text n-text--code">virtual-scroll</code> is <code class="n-text n-text--code">true</code>, <code class="n-text n-text--code">rowSpan</code> will not take effect.</td>
	</tr>
	<tr>
	<td>on-update:checked-row-keys</td>
	<td>
	<code class="n-text n-text--code">(keys: Array&lt;string | number&gt;) =&gt; void</code>
	</td>
	<td>
	<code class="n-text n-text--code">undefined</code>
	</td>
	<td>The callback function triggered when the checked-row-keys value changes.</td>
	</tr>
	<tr>
	<td>on-update:expanded-row-keys</td>
	<td>
	<code class="n-text n-text--code">(keys: Array&lt;string | number&gt;) =&gt; void</code>
	</td>
	<td>
	<code class="n-text n-text--code">undefined</code>
	</td>
	<td>The callback function triggered when the expanded-row-keys value changes.</td>
	</tr>
	<tr>
	<td>on-update:filters</td>
	<td>
	<code class="n-text n-text--code">(filters: { [string | number]: Array&lt;string | number&gt; | string | number }, initiatorColumn: DataTableColumn)</code>
	</td>
	<td>
	<code class="n-text n-text--code">undefined</code>
	</td>
	<td>The callback function triggered when the filters data changes.</td>
	</tr>
	<tr>
	<td>on-update:page</td>
	<td>
	<code class="n-text n-text--code">(page: number)</code>
	</td>
	<td>
	<code class="n-text n-text--code">undefined</code>
	</td>
	<td>Callback function triggered when the page changes.</td>
	</tr>
	<tr>
	<td>on-update:page-size</td>
	<td>
	<code class="n-text n-text--code">(pageSize: number) =&gt; void</code>
	</td>
	<td>
	<code class="n-text n-text--code">undefined</code>
	</td>
	<td>Callback function triggered when the page-size changes.</td>
	</tr>
	<tr>
	<td>on-update:sorter</td>
	<td>
	<code class="n-text n-text--code">(options: SortState | SortState[] | null) =&gt; void</code>
	</td>
	<td>
	<code class="n-text n-text--code">undefined</code>
	</td>
	<td>If the change column is sorted by multiple columns, will return <code class="n-text n-text--code">SortState[] | null</code>, otherwise return <code class="n-text n-text--code">SortState | null</code>. For types, see <a class="n-a" href="#SortState-Type">SorterState Type</a>.</td>
	</tr>
	</tbody>
	</table>

## Samples of using



Routes will be auto-generated for Vue files in [ _src/pages_ ] dir with the same file structure.
Check out [_vite-plugin-pages_](https://github.com/hannoeru/vite-plugin-pages) for more details.


`;return(x,i)=>{const d=c("cp-markdown");return n(),a("div",null,[s(d,{markdown:e})])}}});typeof t=="function"&&t(r);export{r as default};
