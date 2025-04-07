<script>
  /**
   * @typedef {Object} Props
   * @property {TableColumns<any>} columns
   * @property {any[]} rows
   * @property {any} [sortOrders]
   * @property {string} [sortBy]
   * @property {number} [sortOrder]
   * @property {Object} [filterSelections]
   * @property {(string | number)[]} [expanded]
   * @property {(string | number)[]} [selected]
   * @property {string | null} [expandRowKey]
   * @property {string | null} [rowKey]
   * @property {Boolean} [expandSingle]
   * @property {Boolean} [selectSingle]
   * @property {Boolean} [selectOnClick]
   * @property {string} [iconAsc]
   * @property {string} [iconDesc]
   * @property {string} [iconSortable]
   * @property {string} [iconExpand]
   * @property {string} [iconExpanded]
   * @property {boolean} [showExpandIcon]
   * @property {string} [classNameTable]
   * @property {string} [classNameThead]
   * @property {string} [classNameTbody]
   * @property {string} [classNameSelect]
   * @property {string} [classNameInput]
   * @property {RowClassName<any>} [classNameRow]
   * @property {string} [classNameCell]
   * @property {string | null} [classNameRowSelected]
   * @property {string | null} [classNameRowExpanded]
   * @property {string} [classNameExpandedContent]
   * @property {string} [classNameCellExpand]
   * @property {import('svelte').Snippet<[any]>} [svelteTableHeader]
   * @property {import('svelte').Snippet<[any]>} [svelteTableRow]
   * @property {import('svelte').Snippet<[any]>} [svelteTableExpanded]
   */

  /** @type {Props} */
  let {
    columns,
    rows,
    sortOrders = [1, -1],
    sortBy = $bindable(''),
    sortOrder = $bindable(sortOrders?.[0] || 1),
    filterSelections = $bindable({}),
    expanded = $bindable([]),
    selected = $bindable([]),
    expandRowKey = null,
    rowKey = expandRowKey,
    expandSingle = false,
    selectSingle = false,
    selectOnClick = false,
    iconAsc = '▲',
    iconDesc = '▼',
    iconSortable = '',
    iconExpand = '▼',
    iconExpanded = '▲',
    showExpandIcon = false,
    classNameTable = '',
    classNameThead = '',
    classNameTbody = '',
    classNameSelect = '',
    classNameInput = '',
    classNameRow = null,
    classNameCell = '',
    classNameRowSelected = null,
    classNameRowExpanded = null,
    classNameExpandedContent = '',
    classNameCellExpand = '',
    svelteTableHeader,
    svelteTableRow,
    svelteTableExpanded,
    clickCol = () => {},
    clickRow = () => {},
    clickExpand = () => {},
    clickCell = () => {},
  } = $props();

  /** @type {function}*/
  let sortFunction = $state(() => '');

  // Validation
  if (!Array.isArray(expanded)) throw "'expanded' needs to be an array";
  if (!Array.isArray(selected)) throw "'selection' needs to be an array";
  if (expandRowKey !== null) {
    console.warn("'expandRowKey' is deprecated in favour of 'rowKey'");
  }
  if (classNameRowSelected && !rowKey) {
    console.error("'rowKey' is needed to use 'classNameRowSelected'");
  }

  let showFilterHeader = columns.some((c) => {
    // check if there are any filter or search headers
    return (
      !c.hideFilterHeader &&
      (c.filterOptions !== undefined || c.searchValue !== undefined)
    );
  });
  let filterValues = $state({});

  /** @type {Record<string | number | symbol, TableColumn<any>>}*/
  const columnByKey = $derived(
    Object.fromEntries(columns.map((col) => [col.key, col])),
  );

  let colspan = $derived((showExpandIcon ? 1 : 0) + columns.length);

  const c_rows = $derived(
    rows
      .filter((r) => {
        // get search and filter results/matches
        return Object.keys(filterSelections).every((f) => {
          /**
           * @type {boolean}
           * Determine whether search term matches a row.
           * If the searchValue function has ONE parameter it expects to return a string value
           *     which will be compared to the search string. This should be depricated in a
           *     future release, since it's very limiting to search functionality.
           * If the searchValue function has TWO parameters, pass the row and the search term
           *     and expect a boolean response.
           */
          let resSearch = null;

          if (columnByKey[f] === undefined) {
            /**
             * return `true` if the column doesn't exist, any value passed to it is ignored
             * it effectively ignores the column if it's not defined
             * this can happen if the column are changing at run-time
             */
            return true;
          } else if (!columnByKey[f]?.searchValue) {
            // if no searchValue is defined, set to false for filter (resFilter) to handle it
            resSearch = false;
          } else if (filterSelections[f] === '') {
            // if searchValue exists and the search string is empty, return true immediately
            return true;
          } else if (columnByKey[f].searchValue.length === 1) {
            // does search comparison using string result
            // TODO: DEPRECATE
            resSearch =
              (columnByKey[f].searchValue(r) + '')
                .toLocaleLowerCase()
                .indexOf((filterSelections[f] + '').toLocaleLowerCase()) >= 0;
          } else if (columnByKey[f].searchValue.length === 2) {
            // search using function (with 2 parameters)
            resSearch = !!columnByKey[f].searchValue(
              r,
              filterSelections[f] + '',
            );
          }

          // check filter (dropdown) matches
          let resFilter =
            resSearch ||
            filterSelections[f] === undefined ||
            // default to value() if filterValue() not provided in col
            filterSelections[f] ===
              (typeof columnByKey[f].filterValue === 'function'
                ? columnByKey[f].filterValue(r)
                : columnByKey[f].value(r));

          return resFilter;
        });
      })
      .map((r) =>
        Object.assign({}, r, {
          // internal row property for sort order
          $sortOn: sortFunction(r),
          // internal row property for expanded rows
          $expanded: rowKey !== null && expanded.indexOf(r[rowKey]) >= 0,
          $selected: rowKey !== null && selected.indexOf(r[rowKey]) >= 0,
        }),
      )
      .sort((a, b) => {
        if (!sortBy) return 0;
        else if (a.$sortOn > b.$sortOn) return sortOrder;
        else if (a.$sortOn < b.$sortOn) return -sortOrder;
        return 0;
      }),
  );

  const asStringArray = (v) =>
    []
      .concat(v)
      .filter((v) => v !== null && typeof v === 'string' && v !== '')
      .join(' ');

  const calculateFilterValues = () => {
    filterValues = {};
    columns.forEach((c) => {
      if (typeof c.filterOptions === 'function') {
        filterValues[c.key] = c.filterOptions(rows);
      } else if (Array.isArray(c.filterOptions)) {
        // if array of strings is provided, use it for name and value
        filterValues[c.key] = c.filterOptions.map((val) => ({
          name: val,
          value: val,
        }));
      }
    });
  };

  $effect(() => {
    let col = columnByKey[sortBy];
    if (
      col !== undefined &&
      col.sortable === true &&
      typeof col.value === 'function'
    ) {
      sortFunction = (r) => col.value(r);
    }
  });

  $effect(() => {
    // if filters are enabled, watch rows and columns
    if (showFilterHeader && columns && rows) {
      calculateFilterValues();
    }
  });

  const updateSortOrder = (colKey) => {
    return colKey === sortBy
      ? sortOrders[
          (sortOrders.findIndex((o) => o === sortOrder) + 1) % sortOrders.length
        ]
      : sortOrders[0];
  };

  const handleClickCol = (event, col) => {
    if (col.sortable) {
      sortOrder = updateSortOrder(col.key);
      sortBy = sortOrder ? col.key : undefined;
    }
    clickCol({ event, col, key: col.key });
  };

  const handleClickRow = (event, row) => {
    if (selectOnClick) {
      if (selectSingle) {
        // replace selection is default behaviour
        if (selected.includes(row[rowKey])) {
          selected = [];
        } else {
          selected = [row[rowKey]];
        }
      } else {
        if (selected.includes(row[rowKey])) {
          selected = selected.filter((r) => r != row[rowKey]);
        } else {
          selected = [...selected, row[rowKey]].sort();
        }
      }
    }
    clickRow({ event, row });
  };

  const handleClickExpand = (event, row) => {
    row.$expanded = !row.$expanded;
    const keyVal = row[rowKey];
    if (expandSingle && row.$expanded) {
      expanded = [keyVal];
    } else if (expandSingle) {
      expanded = [];
    } else if (!row.$expanded) {
      expanded = expanded.filter((r) => r != keyVal);
    } else {
      expanded = [...expanded, keyVal];
    }
    clickExpand({ event, row });
  };

  const handleClickCell = (event, row, key) => {
    clickCell({ event, row, key });
  };
</script>

<!-- eslint-disable svelte/no-at-html-tags, svelte/require-each-key -->

<table class={asStringArray(classNameTable)}>
  <thead class={asStringArray(classNameThead)}>
    {#if showFilterHeader}
      <tr>
        {#each columns as col}
          <th class={asStringArray([col.headerFilterClass])}>
            {#if !col.hideFilterHeader && col.searchValue !== undefined}
              <input
                bind:value={filterSelections[col.key]}
                class={asStringArray(classNameInput)}
                placeholder={col.filterPlaceholder}
              />
            {:else if !col.hideFilterHeader && filterValues[col.key] !== undefined}
              <select
                bind:value={filterSelections[col.key]}
                class={asStringArray(classNameSelect)}
              >
                <option value={undefined}>{col.filterPlaceholder || ''}</option>
                {#each filterValues[col.key] as option}
                  <option value={option.value}>{option.name}</option>
                {/each}
              </select>
            {/if}
          </th>
        {/each}
        {#if showExpandIcon}
          <th></th>
        {/if}
      </tr>
    {/if}
    {#if svelteTableHeader}{@render svelteTableHeader({
        sortOrder,
        sortBy,
      })}{:else}
      <tr>
        {#each columns as col}
          <th
            onclick={(e) => handleClickCol(e, col)}
            onkeypress={(e) => e.key === 'Enter' && handleClickCol(e, col)}
            class={asStringArray([
              col.sortable ? 'isSortable' : '',
              col.headerClass,
            ])}
            tabindex="0"
          >
            {col.title}
            {#if sortBy === col.key}
              {@html sortOrder === 1 ? iconAsc : iconDesc}
            {:else if col.sortable}
              {@html iconSortable}
            {/if}
          </th>
        {/each}
        {#if showExpandIcon}
          <th></th>
        {/if}
      </tr>
    {/if}
  </thead>

  <tbody class={asStringArray(classNameTbody)}>
    {#each c_rows as row, n}
      {#if svelteTableRow}{@render svelteTableRow({ row, n })}{:else}
        <tr
          onclick={(e) => handleClickRow(e, row)}
          onkeypress={(e) => e.key === 'Enter' && handleClickRow(e, row)}
          class={asStringArray([
            typeof classNameRow === 'string' ? classNameRow : null,
            typeof classNameRow === 'function' ? classNameRow(row, n) : null,
            row.$expanded && classNameRowExpanded,
            row.$selected && classNameRowSelected,
          ])}
          tabIndex={selectOnClick ? '0' : null}
        >
          {#each columns as col, colIndex}
            <td
              onclick={(e) => handleClickCell(e, row, col.key)}
              onkeypress={(e) =>
                e.key === 'Enter' && handleClickCell(e, row, col.key)}
              class={asStringArray([
                typeof col.class === 'string' ? col.class : null,
                typeof col.class === 'function'
                  ? col.class(row, n, colIndex)
                  : null,
                classNameCell,
              ])}
            >
              {#if col.renderComponent}
                {@const SvelteComponent =
                  col.renderComponent.component || col.renderComponent}
                <SvelteComponent
                  {...col.renderComponent.props || {}}
                  {row}
                  {col}
                />
              {:else if col.parseHTML}
                {@html col.renderValue
                  ? col.renderValue(row, n, colIndex)
                  : col.value(row, n, colIndex)}
              {:else}
                {col.renderValue
                  ? col.renderValue(row, n, colIndex)
                  : col.value(row, n, colIndex)}
              {/if}
            </td>
          {/each}
          {#if showExpandIcon}
            <td class={asStringArray(classNameCellExpand)}>
              <span
                class="isClickable"
                onclick={(e) => handleClickExpand(e, row)}
                onkeypress={(e) =>
                  e.key === 'Enter' && handleClickExpand(e, row)}
                tabindex="0"
                role="button"
              >
                {@html row.$expanded ? iconExpand : iconExpanded}
              </span>
            </td>
          {/if}
        </tr>
        {#if row.$expanded}
          <tr class={asStringArray(classNameExpandedContent)}
            ><td {colspan}>
              {@render svelteTableExpanded?.({ row, n })}
            </td></tr
          >
        {/if}
      {/if}
    {/each}
  </tbody>
</table>

<style>
  table {
    width: 100%;
  }
  .isSortable {
    cursor: pointer;
  }

  .isClickable {
    cursor: pointer;
  }

  tr th select {
    width: 100%;
  }
</style>
