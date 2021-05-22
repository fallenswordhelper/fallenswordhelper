import { a as allthen } from './allthen-c5cfa8a4.js';
import { c as createButton } from './createButton-795b08d9.js';
import { a3 as playerIdUrl, s as partial, V as nowSecs, B as setInnerHtml, p as pCC, i as insertElement, b as createDiv, k as on, o as onclick } from './calfSystem-23094c64.js';
import { c as createInput } from './createInput-f3e0e916.js';
import { c as createSelect } from './createSelect-c51a4216.js';
import { c as createTable } from './createTable-d49271ac.js';
import { l as lastActivityToDays, d as daGuildManage } from './lastActivityToDays-826051b7.js';
import { c as createTBody } from './createTBody-d26ba816.js';
import { c as createTr } from './createTr-a8f26e04.js';
import { g as guildStore } from './guildStore-f52b8537.js';
import { a as addCommas } from './addCommas-aab57e5e.js';
import { t as toLowerCase } from './toLowerCase-c964d32b.js';
import './all-8d04560c.js';
import './guild-0c0811d5.js';
import './currentGuildId-b9442f48.js';
import './guildView-000b3b6e.js';
import './dataRows-20212e4a.js';
import './intValue-66f66ba9.js';
import './cmdExport-c04c0b2d.js';
import './indexAjaxJson-d91f385b.js';

var css = ".whosGotWhat {\n  border: 1px solid black;\n  margin: auto;\n  table-layout: fixed\n  /* width: 588px; */\n\n}\n\n.whosGotWhat tr:nth-child(odd) {background: wheat;}\n\n.whosGotWhat tr:nth-child(even) {background: burlywood;}\n\n.whosGotWhat tr:hover {background: cornsilk;}\n\n.whosGotWhat th {\n    background: peru;\n    background-position: right center;\n    background-repeat: no-repeat;\n  }\n\n.whosGotWhat th, .whosGotWhat td {\n    padding: 2px;\n    text-align: right;\n  }\n\n.whosGotWhat th.st-sort-asc {\n      background-image: url(data:image/gif;base64,R0lGODlhFQAEAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAQAAAINjI8Bya2wnINUMopZAQA7);\n  }\n\n.whosGotWhat th.st-sort-desc {\n      background-image: url(data:image/gif;base64,R0lGODlhFQAEAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAQAAAINjB+gC+jP2ptn0WskLQA7);\n  }\n\n.whosGotWhat th.st-sort-reverse.st-sort-asc {\n      background-image: url(data:image/gif;base64,R0lGODlhFQAEAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAQAAAINjB+gC+jP2ptn0WskLQA7);\n  }\n\n.whosGotWhat th.st-sort-reverse.st-sort-desc {\n      background-image: url(data:image/gif;base64,R0lGODlhFQAEAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAQAAAINjI8Bya2wnINUMopZAQA7);\n  }\n\n.whosGotWhat th:nth-child(2), .whosGotWhat td:nth-child(2), .whosGotWhat th:nth-child(4), .whosGotWhat td:nth-child(4) {text-align: left;}\n\n.whosGotWhat td:nth-child(1), .whosGotWhat th:nth-child(1) {width: 28px;}\n\n.whosGotWhat { /* slot */\n\n}\n\n.whosGotWhat td:nth-child(2), .whosGotWhat th:nth-child(2) {width: 80px;}\n\n.whosGotWhat { /* name */\n\n}\n\n.whosGotWhat td:nth-child(3), .whosGotWhat th:nth-child(3) {width: 34px;}\n\n.whosGotWhat { /* level */\n\n}\n\n.whosGotWhat td:nth-child(4), .whosGotWhat th:nth-child(4) {width: 216px;}\n\n.whosGotWhat { /* rank */\n\n}\n\n.whosGotWhat td:nth-child(5), .whosGotWhat th:nth-child(5) {width: 106px;}\n\n.whosGotWhat { /* gxp */\n\n}\n\n.whosGotWhat td:nth-child(6), .whosGotWhat th:nth-child(6) {width: 44px;}\n\n.whosGotWhat { /* activity */\n\n}\n\n.whosGotWhat td:nth-child(7), .whosGotWhat th:nth-child(7) {width: 32px;}\n\n.whosGotWhat { /* pack */\n\n}\n\n.whosGotWhat td:nth-child(8), .whosGotWhat th:nth-child(8) {width: 48px;}\n\n.whosGotWhat { /* Stam */\n\n}\n\n#pCC .whosGotWhat {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.st-top-container {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto 5px;\n  /* padding: 0 5px; */\n  width: 618px;\n}\n\n.st-bottom-container {\n  display: flex;\n  justify-content: space-between;\n  margin: 5px auto 0;\n  /* padding: 0 5px; */\n  width: 618px;\n}\n\n.fsh-search-wrapper {\n\n  border-style: solid;\n  border-width: 1px;\n  border-color: #a9772c #f3d99d #f3d99d #a9772c;\n  background-color: #f7ebd3;\n  padding: 1px 6px 1px 1px\n\n}\n\n.fsh-search-wrapper input {\n    background-color: transparent;\n    border: none;\n    outline: 0;\n  }\n\n.fsh-search-wrapper input:invalid {\n    box-shadow: none; /* Firefox */\n  }\n\n.fsh-search-wrapper button {\n    background-color: transparent;\n    border: none;\n    color: blue;\n    cursor: pointer;\n    font-weight: bold;\n    padding: 0;\n  }\n\n.fsh-search-wrapper button:focus {\n    outline: none; /* Chrome */\n  }\n\n.fsh-search-wrapper input:not(:valid) ~ button {visibility: hidden;}\n";
var modules_086b2f9c = {};

function rowHtml(obj) {
  return `<td>${obj.slot}</td>`
    // + `<td>${obj.name}</td>`
    + `<td><a href="${playerIdUrl}${obj.id}">${obj.name}</a></td>`
    + `<td>${obj.level}</td>`
    + `<td>${obj.rank_name}</td>`
    + `<td>${obj.gxp}</td>`
    + `<td>${obj.activity}</td>`
    + `<td>${obj.pack}</td>`
    + `<td>${obj.stam}</td>`;
}

function rowFactory(aRow) {
  if (!aRow.dom) {
    // eslint-disable-next-line no-param-reassign
    aRow.dom = createTr(
      { innerHTML: rowHtml(aRow) },
    );
  }
  return aRow.dom;
}

function displayChange(domTable, table, displayed) {
  // console.log(table.getTableState());
  const domTBody = domTable.tBodies[0];
  const thisTBody = createTBody();
  for (const r of displayed) {
    thisTBody.appendChild(rowFactory(r.value));
  }
  domTable.replaceChild(thisTBody, domTBody);
}

function byMember(acc, curr) {
  // if (curr.item_id === 11503) { // Zombie Brew
  if (!curr.equipped) {
    acc[curr.player_id] = acc[curr.player_id] || [];
    acc[curr.player_id].push(curr);
  }
  return acc;
}

function addRank(rankName, thisMember) {
  return { ...thisMember, rank_name: rankName };
}

function extractMembers(thisRank) {
  return thisRank.members.map(partial(addRank, thisRank.name));
}

function processGuild(guild) {
  return guild.r.ranks.flatMap(extractMembers);
}

function decorateMembers(pots, obj, i) {
  return {
    ...obj,
    slot: i + 1,
    name_lower: toLowerCase(obj.name),
    lvl_reverse: 0 - obj.level,
    rank_lower: toLowerCase(obj.rank_name.trim()),
    gxp: addCommas(obj.guild_xp),
    gxp_reverse: 0 - obj.guild_xp,
    activity: lastActivityToDays(obj.last_activity),
    act: obj.last_activity - nowSecs,
    pack: (pots[obj.id] || []).length,
    pack_reverse: 0 - (pots[obj.id] || []).length,
    // stam: addCommas(obj.current_stamina),
    // stam_reverse: 0 - obj.current_stamina,
    stam: addCommas(obj.max_stamina),
    stam_reverse: 0 - obj.max_stamina,
  };
}

function prepareData([json, guild]) {
  // console.log('json', json);
  const pots = json.items.reduce(byMember, {});
  // console.log('pots', pots);
  const members = processGuild(guild);
  // console.log('members', members);
  return members.map(partial(decorateMembers, pots));
}

const swap = (f) => (a, b) => f(b, a);
const compose = (first, ...fns) => (...args) => fns.reduce((previous, current) => current(previous), first(...args));
const curry = (fn, arityLeft) => {
    const arity = arityLeft || fn.length;
    return (...args) => {
        const argLength = args.length || 1;
        if (arity === argLength) {
            return fn(...args);
        }
        const func = (...moreArgs) => fn(...args, ...moreArgs);
        return curry(func, arity - args.length);
    };
};
const apply = (fn) => (...args) => fn(...args);
const tap = (fn) => arg => {
    fn(arg);
    return arg;
};

const pointer = (path) => {
    const parts = path.split('.');
    const partial = (obj = {}, parts = []) => {
        const p = parts.shift();
        const current = obj[p];
        return (current === undefined || current === null || parts.length === 0) ?
            current : partial(current, parts);
    };
    const set = (target, newTree) => {
        let current = target;
        const [leaf, ...intermediate] = parts.reverse();
        for (const key of intermediate.reverse()) {
            if (current[key] === void 0) {
                current[key] = {};
                current = current[key];
            }
        }
        current[leaf] = newTree;
        return target;
    };
    return {
        get(target) {
            return partial(target, [...parts]);
        },
        set
    };
};

const defaultComparator = (a, b) => {
    if (a === b) {
        return 0;
    }
    if (a === undefined) {
        return 1;
    }
    if (b === undefined) {
        return -1;
    }
    return a < b ? -1 : 1;
};
var SortDirection;
(function (SortDirection) {
    SortDirection["ASC"] = "asc";
    SortDirection["DESC"] = "desc";
    SortDirection["NONE"] = "none";
})(SortDirection || (SortDirection = {}));
const sortByProperty = (prop, comparator) => {
    const propGetter = pointer(prop).get;
    return (a, b) => comparator(propGetter(a), propGetter(b));
};
const defaultSortFactory = (conf) => {
    const { pointer, direction = "asc" /* ASC */, comparator = defaultComparator } = conf;
    if (!pointer || direction === "none" /* NONE */) {
        return (array) => [...array];
    }
    const orderFunc = sortByProperty(pointer, comparator);
    const compareFunc = direction === "desc" /* DESC */ ? swap(orderFunc) : orderFunc;
    return (array) => [...array].sort(compareFunc);
};

var Type;
(function (Type) {
    Type["BOOLEAN"] = "boolean";
    Type["NUMBER"] = "number";
    Type["DATE"] = "date";
    Type["STRING"] = "string";
})(Type || (Type = {}));
const typeExpression = (type) => {
    switch (type) {
        case Type.BOOLEAN:
            return Boolean;
        case Type.NUMBER:
            return Number;
        case Type.DATE:
            return val => new Date(val);
        case Type.STRING:
            return compose(String, val => val.toLowerCase());
        default:
            return val => val;
    }
};
var FilterOperator;
(function (FilterOperator) {
    FilterOperator["INCLUDES"] = "includes";
    FilterOperator["IS"] = "is";
    FilterOperator["IS_NOT"] = "isNot";
    FilterOperator["LOWER_THAN"] = "lt";
    FilterOperator["GREATER_THAN"] = "gt";
    FilterOperator["GREATER_THAN_OR_EQUAL"] = "gte";
    FilterOperator["LOWER_THAN_OR_EQUAL"] = "lte";
    FilterOperator["EQUALS"] = "equals";
    FilterOperator["NOT_EQUALS"] = "notEquals";
    FilterOperator["ANY_OF"] = "anyOf";
})(FilterOperator || (FilterOperator = {}));
const not = fn => input => !fn(input);
const is = value => input => Object.is(value, input);
const lt = value => input => input < value;
const gt = value => input => input > value;
const equals = value => input => value === input;
const includes = value => input => input.includes(value);
const anyOf = value => input => value.includes(input);
const operators = {
    ["includes" /* INCLUDES */]: includes,
    ["is" /* IS */]: is,
    ["isNot" /* IS_NOT */]: compose(is, not),
    ["lt" /* LOWER_THAN */]: lt,
    ["gte" /* GREATER_THAN_OR_EQUAL */]: compose(lt, not),
    ["gt" /* GREATER_THAN */]: gt,
    ["lte" /* LOWER_THAN_OR_EQUAL */]: compose(gt, not),
    ["equals" /* EQUALS */]: equals,
    ["notEquals" /* NOT_EQUALS */]: compose(equals, not),
    ["anyOf" /* ANY_OF */]: anyOf
};
const every = fns => (...args) => fns.every(fn => fn(...args));
const predicate = ({ value = '', operator = "includes" /* INCLUDES */, type }) => {
    const typeIt = typeExpression(type);
    const operateOnTyped = compose(typeIt, operators[operator]);
    const predicateFunc = operateOnTyped(value);
    return compose(typeIt, predicateFunc);
};
// Avoid useless filter lookup (improve perf)
const normalizeClauses = (conf) => {
    const output = {};
    const validPath = Object.keys(conf).filter(path => Array.isArray(conf[path]));
    validPath.forEach(path => {
        const validClauses = conf[path].filter(c => c.value !== '');
        if (validClauses.length > 0) {
            output[path] = validClauses;
        }
    });
    return output;
};
const filter$1 = (filter) => {
    const normalizedClauses = normalizeClauses(filter);
    const funcList = Object.keys(normalizedClauses).map(path => {
        const getter = pointer(path).get;
        const clauses = normalizedClauses[path].map(predicate);
        return compose(getter, every(clauses));
    });
    const filterPredicate = every(funcList);
    return array => array.filter(filterPredicate);
};

const basic = (input) => {
    const { value, scope = [], isCaseSensitive = false } = input;
    const searchPointers = scope.map(field => pointer(field).get);
    if (scope.length === 0 || !value) {
        return (array) => array;
    }
    const test = isCaseSensitive === true ? String(value) : String(value).toLowerCase();
    return (array) => array.filter(item => searchPointers.some(p => {
        const v = isCaseSensitive === true ? String(p(item)) : String(p(item)).toLowerCase();
        return v.includes(test);
    }));
};

function re(strs, ...substs) {
    let reStr = transformRaw(strs.raw[0]);
    for (const [i, subst] of substs.entries()) {
        if (subst instanceof RegExp) {
            reStr += subst.source;
        } else if (typeof subst === 'string') {
            reStr += quoteText(subst);
        } else {
            throw new Error('Illegal substitution: '+subst);
        }
        reStr += transformRaw(strs.raw[i+1]);
    }
    let flags = '';
    if (reStr.startsWith('/')) {
        const lastSlashIndex = reStr.lastIndexOf('/');
        if (lastSlashIndex === 0) {
            throw new Error('If the `re` string starts with a slash, it must end with a second slash and zero or more flags: '+reStr);
        }
        flags = reStr.slice(lastSlashIndex+1);
        reStr = reStr.slice(1, lastSlashIndex);
    }
    return new RegExp(reStr, flags);
}

function transformRaw(str) {
    return str.replace(/\\`/g, '`');
}

/**
 * All special characters are escaped, because you may want to quote several characters inside parentheses or square brackets.
 */
function quoteText(text) {
    return text.replace(/[\\^$.*+?()[\]{}|=!<>:-]/g, '\\$&');
}

const regexp = (input) => {
    const { value, scope = [], escape = false, flags = '' } = input;
    const searchPointers = scope.map(field => pointer(field).get);
    if (scope.length === 0 || !value) {
        return (array) => array;
    }
    const regex = escape === true ? re `/${value}/${flags}` : new RegExp(value, flags);
    return (array) => array.filter(item => searchPointers.some(p => regex.test(String(p(item)))));
};

const emitter = () => {
    const listenersLists = {};
    const instance = {
        on(event, ...listeners) {
            listenersLists[event] = (listenersLists[event] || []).concat(listeners);
            return instance;
        },
        dispatch(event, ...args) {
            const listeners = listenersLists[event] || [];
            for (const listener of listeners) {
                listener(...args);
            }
            return instance;
        },
        off(event, ...listeners) {
            if (event === undefined) {
                Object.keys(listenersLists).forEach(ev => instance.off(ev));
            }
            else {
                const list = listenersLists[event] || [];
                listenersLists[event] = listeners.length ? list.filter(listener => !listeners.includes(listener)) : [];
            }
            return instance;
        }
    };
    return instance;
};
const proxyListener = (eventMap) => ({ emitter }) => {
    const eventListeners = {};
    const proxy = {
        off(ev) {
            if (!ev) {
                Object.keys(eventListeners).forEach(eventName => proxy.off(eventName));
            }
            if (eventListeners[ev]) {
                emitter.off(ev, ...eventListeners[ev]);
            }
            return proxy;
        }
    };
    for (const ev of Object.keys(eventMap)) {
        const method = eventMap[ev];
        eventListeners[ev] = [];
        proxy[method] = function (...listeners) {
            eventListeners[ev] = eventListeners[ev].concat(listeners);
            emitter.on(ev, ...listeners);
            return proxy;
        };
    }
    return proxy;
};

const sliceFactory = ({ page = 1, size } = { page: 1 }) => (array = []) => {
    const actualSize = size || array.length;
    const offset = (page - 1) * actualSize;
    return array.slice(offset, offset + actualSize);
};

var SmartTableEvents;
(function (SmartTableEvents) {
    SmartTableEvents["TOGGLE_SORT"] = "TOGGLE_SORT";
    SmartTableEvents["DISPLAY_CHANGED"] = "DISPLAY_CHANGED";
    SmartTableEvents["PAGE_CHANGED"] = "CHANGE_PAGE";
    SmartTableEvents["EXEC_CHANGED"] = "EXEC_CHANGED";
    SmartTableEvents["FILTER_CHANGED"] = "FILTER_CHANGED";
    SmartTableEvents["SUMMARY_CHANGED"] = "SUMMARY_CHANGED";
    SmartTableEvents["SEARCH_CHANGED"] = "SEARCH_CHANGED";
    SmartTableEvents["EXEC_ERROR"] = "EXEC_ERROR";
})(SmartTableEvents || (SmartTableEvents = {}));
const curriedPointer = (path) => {
    const { get, set } = pointer(path);
    return { get, set: curry(set) };
};
const tableDirective = ({ sortFactory, tableState, data, filterFactory, searchFactory }) => {
    let filteredCount = data.length;
    let matchingItems = data;
    const table = emitter();
    const sortPointer = curriedPointer('sort');
    const slicePointer = curriedPointer('slice');
    const filterPointer = curriedPointer('filter');
    const searchPointer = curriedPointer('search');
    // We need to register in case the summary comes from outside (like server data)
    table.on("SUMMARY_CHANGED" /* SUMMARY_CHANGED */, ({ filteredCount: count }) => {
        filteredCount = count;
    });
    const safeAssign = newState => Object.assign({}, newState);
    const dispatch = curry(table.dispatch, 2);
    const dispatchSummary = (filtered) => {
        matchingItems = filtered;
        return dispatch("SUMMARY_CHANGED" /* SUMMARY_CHANGED */, {
            page: tableState.slice.page,
            size: tableState.slice.size,
            filteredCount: filtered.length
        });
    };
    const exec = ({ processingDelay = 20 } = { processingDelay: 20 }) => {
        table.dispatch("EXEC_CHANGED" /* EXEC_CHANGED */, { working: true });
        setTimeout(() => {
            try {
                const filterFunc = filterFactory(filterPointer.get(tableState));
                const searchFunc = searchFactory(searchPointer.get(tableState));
                const sortFunc = sortFactory(sortPointer.get(tableState));
                const sliceFunc = sliceFactory(slicePointer.get(tableState));
                const execFunc = compose(filterFunc, searchFunc, tap(dispatchSummary), sortFunc, sliceFunc);
                const displayed = execFunc(data);
                table.dispatch("DISPLAY_CHANGED" /* DISPLAY_CHANGED */, displayed.map(d => ({
                    index: data.indexOf(d),
                    value: d
                })));
            }
            catch (err) {
                table.dispatch("EXEC_ERROR" /* EXEC_ERROR */, err);
            }
            finally {
                table.dispatch("EXEC_CHANGED" /* EXEC_CHANGED */, { working: false });
            }
        }, processingDelay);
    };
    const updateTableState = curry((pter, ev, newPartialState) => compose(safeAssign, tap(dispatch(ev)), pter.set(tableState))(newPartialState));
    const resetToFirstPage = () => updateTableState(slicePointer, "CHANGE_PAGE" /* PAGE_CHANGED */, Object.assign({}, slicePointer.get(tableState), { page: 1 }));
    const tableOperation = (pter, ev) => {
        const fn = compose(updateTableState(pter, ev), resetToFirstPage, () => table.exec() // We wrap within a function so table.exec can be overwritten (when using with a server for example)
        );
        return (arg = {}) => fn(arg);
    };
    const api = {
        sort: tableOperation(sortPointer, "TOGGLE_SORT" /* TOGGLE_SORT */),
        filter: tableOperation(filterPointer, "FILTER_CHANGED" /* FILTER_CHANGED */),
        search: tableOperation(searchPointer, "SEARCH_CHANGED" /* SEARCH_CHANGED */),
        slice: compose(updateTableState(slicePointer, "CHANGE_PAGE" /* PAGE_CHANGED */), () => table.exec()),
        exec,
        async eval(state = tableState) {
            const sortFunc = sortFactory(sortPointer.get(state));
            const searchFunc = searchFactory(searchPointer.get(state));
            const filterFunc = filterFactory(filterPointer.get(state));
            const sliceFunc = sliceFactory(slicePointer.get(state));
            const execFunc = compose(filterFunc, searchFunc, sortFunc, sliceFunc);
            return execFunc(data).map(d => ({ index: data.indexOf(d), value: d }));
        },
        onDisplayChange(fn) {
            table.on("DISPLAY_CHANGED" /* DISPLAY_CHANGED */, fn);
        },
        getTableState() {
            return JSON.parse(JSON.stringify(tableState));
        },
        getMatchingItems() {
            return [...matchingItems];
        }
    };
    const instance = Object.assign(table, api);
    Object.defineProperties(instance, {
        filteredCount: {
            get() {
                return filteredCount;
            }
        },
        length: {
            get() {
                return data.length;
            }
        }
    });
    return instance;
};

const filterListener = proxyListener({ ["FILTER_CHANGED" /* FILTER_CHANGED */]: 'onFilterChange' });
// todo expose and re-export from smart-table-filter
var FilterType;
(function (FilterType) {
    FilterType["BOOLEAN"] = "boolean";
    FilterType["NUMBER"] = "number";
    FilterType["DATE"] = "date";
    FilterType["STRING"] = "string";
})(FilterType || (FilterType = {}));
const filterDirective = ({ table, pointer, operator = "includes" /* INCLUDES */, type = "string" /* STRING */ }) => {
    const proxy = filterListener({ emitter: table });
    return Object.assign({
        filter(input) {
            const newState = this.state();
            if (input === void 0) {
                delete newState[pointer];
            }
            else {
                Object.assign(newState, {
                    [pointer]: [{
                            value: input,
                            operator,
                            type
                        }]
                });
            }
            return table.filter(newState);
        },
        state() {
            return table.getTableState().filter || {};
        }
    }, proxy);
};

const searchListener = proxyListener({ ["SEARCH_CHANGED" /* SEARCH_CHANGED */]: 'onSearchChange' });
const searchDirective = ({ table, scope = [] }) => {
    const proxy = searchListener({ emitter: table });
    return Object.assign(proxy, {
        search(input, opts = {}) {
            return table.search(Object.assign({}, { value: input, scope }, opts));
        },
        state() {
            return table.getTableState().search;
        }
    }, proxy);
};

const sliceListener = proxyListener({
    ["CHANGE_PAGE" /* PAGE_CHANGED */]: 'onPageChange',
    ["SUMMARY_CHANGED" /* SUMMARY_CHANGED */]: 'onSummaryChange'
});
const paginationDirective = ({ table }) => {
    let { slice: { page: currentPage, size: currentSize } } = table.getTableState();
    let itemListLength = table.filteredCount;
    let pageCount = currentSize ? Math.ceil(itemListLength / currentSize) : 1;
    const proxy = sliceListener({ emitter: table });
    const api = {
        selectPage(p) {
            return table.slice({ page: p, size: currentSize });
        },
        selectNextPage() {
            return api.selectPage(currentPage + 1);
        },
        selectPreviousPage() {
            return api.selectPage(currentPage - 1);
        },
        changePageSize(size) {
            return table.slice({ page: 1, size });
        },
        isPreviousPageEnabled() {
            return currentPage > 1;
        },
        isNextPageEnabled() {
            return pageCount > currentPage;
        },
        state() {
            return Object.assign(table.getTableState().slice, { filteredCount: itemListLength, pageCount });
        }
    };
    const directive = Object.assign(api, proxy);
    directive.onSummaryChange(({ page: p, size: s, filteredCount }) => {
        currentPage = p;
        currentSize = s;
        itemListLength = filteredCount;
        pageCount = currentSize ? Math.ceil(itemListLength / currentSize) : 1;
    });
    return directive;
};

const debounce$1 = (fn, time) => {
    let timer = null;
    return (...args) => {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => fn(...args), time);
    };
};
const sortListeners = proxyListener({ ["TOGGLE_SORT" /* TOGGLE_SORT */]: 'onSortToggle' });
const directions = ["asc" /* ASC */, "desc" /* DESC */];
const sortDirective = ({ pointer, table, cycle = false, debounceTime = 0 }) => {
    const cycleDirections = cycle === true ? ["none" /* NONE */].concat(directions) : [...directions].reverse();
    const commit = debounce$1(table.sort, debounceTime);
    let hit = 0;
    const proxy = sortListeners({ emitter: table });
    const directive = Object.assign({
        toggle() {
            hit++;
            const direction = cycleDirections[hit % cycleDirections.length];
            return commit({ pointer, direction });
        },
        state() {
            return table.getTableState().sort;
        }
    }, proxy);
    directive.onSortToggle(({ pointer: p }) => {
        hit = pointer !== p ? 0 : hit;
    });
    const { pointer: statePointer, direction = "asc" /* ASC */ } = directive.state();
    hit = statePointer === pointer ? (direction === "asc" /* ASC */ ? 1 : 2) : 0;
    return directive;
};

const summaryListener = proxyListener({ ["SUMMARY_CHANGED" /* SUMMARY_CHANGED */]: 'onSummaryChange' });
const summaryDirective = ({ table }) => summaryListener({ emitter: table });

const executionListener = proxyListener({ ["EXEC_CHANGED" /* EXEC_CHANGED */]: 'onExecutionChange' });
const workingIndicatorDirective = ({ table }) => executionListener({ emitter: table });

const defaultTableState = () => ({ sort: {}, slice: { page: 1 }, filter: {}, search: {} });
const smartTable = ({ sortFactory = defaultSortFactory, filterFactory = filter$1, searchFactory = regexp, tableState = defaultTableState(), data = [] } = {
    sortFactory: defaultSortFactory,
    filterFactory: filter$1,
    searchFactory: regexp,
    tableState: defaultTableState(),
    data: []
}, ...tableExtensions) => {
    const coreTable = tableDirective({ sortFactory, filterFactory, tableState, data, searchFactory });
    return tableExtensions.reduce((accumulator, newdir) => Object.assign(accumulator, newdir({
        sortFactory,
        filterFactory,
        searchFactory,
        tableState,
        data,
        table: coreTable
    })), coreTable);
};

const loadingIndicator = ({table, el}) => {
    const component = workingIndicatorDirective({table});
    component.onExecutionChange(function ({working}) {
        el.classList.remove('st-working');
        if (working === true) {
            el.classList.add('st-working');
        }
    });
    return component;
};

const sort = ({el, table, conf = {}}) => {
    const pointer = conf.pointer || el.getAttribute('data-st-sort');
    const cycle = conf.cycle || el.hasAttribute('data-st-sort-cycle');
    const component = sortDirective({pointer, table, cycle});
    component.onSortToggle(({pointer: currentPointer, direction}) => {
        el.classList.remove('st-sort-asc', 'st-sort-desc');
        if (pointer === currentPointer && direction !== 'none') {
            const className = direction === 'asc' ? 'st-sort-asc' : 'st-sort-desc';
            el.classList.add(className);
        }
    });
    const eventListener = () => component.toggle();
    el.addEventListener('click', eventListener);
    return component;
};

function debounce(fn, delay) {
    let timeoutId;
    return (ev) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(function () {
            fn(ev);
        }, delay);
    };
}

const filter = ({table, el, delay = 400, conf = {}}) => {
    const pointer = conf.pointer || el.getAttribute('data-st-filter');
    const operator = conf.operator || el.getAttribute('data-st-filter-operator') || 'includes';
    const elType = el.hasAttribute('type') ? el.getAttribute('type') : 'string';
    let type = conf.type || el.getAttribute('data-st-filter-type');
    if (!type) {
        type = ['date', 'number'].includes(elType) ? elType : 'string';
    }
    const component = filterDirective({table, pointer, type, operator});
    const eventListener = debounce(ev => component.filter(el.value), delay);
    el.addEventListener('input', eventListener);
    if (el.tagName === 'SELECT') {
        el.addEventListener('change', eventListener);
    }
    return component;
};

const search = ({el, table, delay = 400, conf = {}}) => {
    const scope = conf.scope || (el.getAttribute('data-st-search') || '')
        .split(',')
        .map(s => s.trim());
    const flags = conf.flags || el.getAttribute('data-st-search-flags') || '';
    const component = searchDirective({table, scope});
    const eventListener = debounce(() => {
        component.search(el.value, {flags});
    }, delay);
    el.addEventListener('input', eventListener);
};

const table = ({el, table}) => {
    const bootDirective = (factory, selector) => Array.from(el.querySelectorAll(selector)).forEach(el => factory({
        el,
        table
    }));
    // boot
    bootDirective(sort, '[data-st-sort]');
    bootDirective(loadingIndicator, '[data-st-loading-indicator]');
    bootDirective(search, '[data-st-search]');
    bootDirective(filter, '[data-st-filter]');

    return table;
};

const theadHtml = '<thead><tr>'
  + '<th data-st-sort="slot" class="st-sort-asc">Slot</th>'
  + '<th data-st-sort="name_lower">Name</th>'
  + '<th class="st-sort-reverse" data-st-sort="lvl_reverse">Level</th>'
  + '<th data-st-sort="rank_lower">Rank</th>'
  + '<th class="st-sort-reverse" data-st-sort="gxp_reverse">GXP</th>'
  + '<th class="st-sort-reverse" data-st-sort="act">Activity</th>'
  + '<th class="st-sort-reverse" data-st-sort="pack_reverse">Pack</th>'
  + '<th class="st-sort-reverse" data-st-sort="stam_reverse">Stam</th>'
  + '</tr></thead><tbody></tbody>';

function makeTable(el) {
  return insertElement(el, createTable({
    className: 'whosGotWhat',
    innerHTML: theadHtml,
  }));
}

function makeSizer(el, table) {
  const thisSizer = createSelect({
    innerHTML: '<option value="25">25</option>'
      + '<option value="50">50</option>'
      + '<option value="0" selected>All</option>',
  });
  const box = createDiv();
  insertElement(box, thisSizer);
  insertElement(el, box);
  const slice = paginationDirective({ table });
  on(thisSizer, 'change', (e) => {
    slice.changePageSize(Number(e.target.value));
  });
}

function makeSearch(top, table) {
  const wrapper = createDiv({ className: 'fsh-search-wrapper' });
  const input = createInput({
    dataset: {
      stSearch: 'name, rank_name',
      stSearchFlags: 'i',
    },
    placeholder: 'Enter search term',
    required: true,
    type: 'text',
  });
  const button = createButton({
    innerHTML: '&times;',
    type: 'button',
  });
  const directive = searchDirective({ table });
  onclick(button, () => {
    input.value = '';
    input.focus();
    directive.search('');
  });
  insertElement(wrapper, input);
  insertElement(wrapper, button);
  insertElement(top, wrapper);
}

function makeSummary(bottom, table, data) {
  const summaryDiv = createDiv();
  insertElement(bottom, summaryDiv);
  const slice = paginationDirective({ table });
  slice.onSummaryChange(({ page, size, filteredCount }) => {
    let filterModifier = 0;
    if (filteredCount) { filterModifier = 1; }
    setInnerHtml(`showing ${
      (page - 1) * size + filterModifier} - ${
      Math.min(filteredCount, page * size)} of ${
      filteredCount} (${data.length} total)`, summaryDiv);
  });
}

function makePager(bottom, table) {
  const pagerDiv = createDiv();
  const firstBtn = createButton({ innerHTML: '«' });
  const prevBtn = createButton({ innerHTML: '‹' });
  const pageBtn = createButton({ disabled: true, innerHTML: '1' });
  const nextBtn = createButton({ innerHTML: '›' });
  const lastBtn = createButton({ innerHTML: '»' });
  let lastPage = 1;

  const pager = paginationDirective({ table });
  pager.onSummaryChange(({ page, size, filteredCount }) => {
    firstBtn.disabled = !pager.isPreviousPageEnabled();
    prevBtn.disabled = !pager.isPreviousPageEnabled();
    nextBtn.disabled = !pager.isNextPageEnabled();
    lastBtn.disabled = !pager.isNextPageEnabled();
    setInnerHtml(page, pageBtn);
    lastPage = Math.ceil(filteredCount / size);
  });

  onclick(firstBtn, () => pager.selectPage(1));
  onclick(prevBtn, () => pager.selectPreviousPage());
  onclick(nextBtn, () => pager.selectNextPage());
  onclick(lastBtn, () => pager.selectPage(lastPage));

  insertElement(pagerDiv, firstBtn);
  insertElement(pagerDiv, prevBtn);
  insertElement(pagerDiv, pageBtn);
  insertElement(pagerDiv, nextBtn);
  insertElement(pagerDiv, lastBtn);
  insertElement(bottom, pagerDiv);
}

function showMe(dataAry) {
  // console.log(dataAry);
  const data = prepareData(dataAry);
  // console.log('data', data);
  setInnerHtml('', pCC);
  const el = insertElement(pCC, createDiv());
  const top = insertElement(el, createDiv({ className: 'st-top-container' }));
  const tableContainer = insertElement(el, createDiv());
  const domTable = makeTable(tableContainer);
  const bottom = insertElement(el,
    createDiv({ className: 'st-bottom-container' }));
  const tableState = {
    sort: { pointer: 'slot', direction: 'asc' },
    slice: { page: 1, size: 0 },
    filter: {},
    search: {},
  };
  const table$1 = smartTable({ data, tableState });
  makeSizer(top, table$1);
  makeSearch(top, table$1);
  makeSummary(bottom, table$1, data);
  makePager(bottom, table$1);
  const tableComponent = table({ el, table: table$1 });
  tableComponent.onDisplayChange(partial(displayChange, domTable, table$1));
  tableComponent.exec();
  // slice.selectNextPage();
}

function whosGotWhat() {
  setInnerHtml('Loading...', pCC);
  allthen([guildStore(), daGuildManage()], showMe);
}

export default whosGotWhat;
//# sourceMappingURL=whosGotWhat-5cf58661.js.map
