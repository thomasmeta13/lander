"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ssr-window";
exports.ids = ["vendor-chunks/ssr-window"];
exports.modules = {

/***/ "(ssr)/./node_modules/ssr-window/ssr-window.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/ssr-window/ssr-window.esm.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   extend: () => (/* binding */ extend),\n/* harmony export */   getDocument: () => (/* binding */ getDocument),\n/* harmony export */   getWindow: () => (/* binding */ getWindow),\n/* harmony export */   ssrDocument: () => (/* binding */ ssrDocument),\n/* harmony export */   ssrWindow: () => (/* binding */ ssrWindow)\n/* harmony export */ });\n/**\n * SSR Window 4.0.2\n * Better handling for window object in SSR environment\n * https://github.com/nolimits4web/ssr-window\n *\n * Copyright 2021, Vladimir Kharlampidi\n *\n * Licensed under MIT\n *\n * Released on: December 13, 2021\n */ /* eslint-disable no-param-reassign */ function isObject(obj) {\n    return obj !== null && typeof obj === \"object\" && \"constructor\" in obj && obj.constructor === Object;\n}\nfunction extend(target = {}, src = {}) {\n    Object.keys(src).forEach((key)=>{\n        if (typeof target[key] === \"undefined\") target[key] = src[key];\n        else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {\n            extend(target[key], src[key]);\n        }\n    });\n}\nconst ssrDocument = {\n    body: {},\n    addEventListener () {},\n    removeEventListener () {},\n    activeElement: {\n        blur () {},\n        nodeName: \"\"\n    },\n    querySelector () {\n        return null;\n    },\n    querySelectorAll () {\n        return [];\n    },\n    getElementById () {\n        return null;\n    },\n    createEvent () {\n        return {\n            initEvent () {}\n        };\n    },\n    createElement () {\n        return {\n            children: [],\n            childNodes: [],\n            style: {},\n            setAttribute () {},\n            getElementsByTagName () {\n                return [];\n            }\n        };\n    },\n    createElementNS () {\n        return {};\n    },\n    importNode () {\n        return null;\n    },\n    location: {\n        hash: \"\",\n        host: \"\",\n        hostname: \"\",\n        href: \"\",\n        origin: \"\",\n        pathname: \"\",\n        protocol: \"\",\n        search: \"\"\n    }\n};\nfunction getDocument() {\n    const doc = typeof document !== \"undefined\" ? document : {};\n    extend(doc, ssrDocument);\n    return doc;\n}\nconst ssrWindow = {\n    document: ssrDocument,\n    navigator: {\n        userAgent: \"\"\n    },\n    location: {\n        hash: \"\",\n        host: \"\",\n        hostname: \"\",\n        href: \"\",\n        origin: \"\",\n        pathname: \"\",\n        protocol: \"\",\n        search: \"\"\n    },\n    history: {\n        replaceState () {},\n        pushState () {},\n        go () {},\n        back () {}\n    },\n    CustomEvent: function CustomEvent() {\n        return this;\n    },\n    addEventListener () {},\n    removeEventListener () {},\n    getComputedStyle () {\n        return {\n            getPropertyValue () {\n                return \"\";\n            }\n        };\n    },\n    Image () {},\n    Date () {},\n    screen: {},\n    setTimeout () {},\n    clearTimeout () {},\n    matchMedia () {\n        return {};\n    },\n    requestAnimationFrame (callback) {\n        if (typeof setTimeout === \"undefined\") {\n            callback();\n            return null;\n        }\n        return setTimeout(callback, 0);\n    },\n    cancelAnimationFrame (id) {\n        if (typeof setTimeout === \"undefined\") {\n            return;\n        }\n        clearTimeout(id);\n    }\n};\nfunction getWindow() {\n    const win =  false ? 0 : {};\n    extend(win, ssrWindow);\n    return win;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3NyLXdpbmRvdy9zc3Itd2luZG93LmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0NBVUMsR0FDRCxvQ0FBb0MsR0FDcEMsU0FBU0EsU0FBU0MsR0FBRztJQUNqQixPQUFRQSxRQUFRLFFBQ1osT0FBT0EsUUFBUSxZQUNmLGlCQUFpQkEsT0FDakJBLElBQUlDLFdBQVcsS0FBS0M7QUFDNUI7QUFDQSxTQUFTQyxPQUFPQyxTQUFTLENBQUMsQ0FBQyxFQUFFQyxNQUFNLENBQUMsQ0FBQztJQUNqQ0gsT0FBT0ksSUFBSSxDQUFDRCxLQUFLRSxPQUFPLENBQUMsQ0FBQ0M7UUFDdEIsSUFBSSxPQUFPSixNQUFNLENBQUNJLElBQUksS0FBSyxhQUN2QkosTUFBTSxDQUFDSSxJQUFJLEdBQUdILEdBQUcsQ0FBQ0csSUFBSTthQUNyQixJQUFJVCxTQUFTTSxHQUFHLENBQUNHLElBQUksS0FDdEJULFNBQVNLLE1BQU0sQ0FBQ0ksSUFBSSxLQUNwQk4sT0FBT0ksSUFBSSxDQUFDRCxHQUFHLENBQUNHLElBQUksRUFBRUMsTUFBTSxHQUFHLEdBQUc7WUFDbENOLE9BQU9DLE1BQU0sQ0FBQ0ksSUFBSSxFQUFFSCxHQUFHLENBQUNHLElBQUk7UUFDaEM7SUFDSjtBQUNKO0FBRUEsTUFBTUUsY0FBYztJQUNoQkMsTUFBTSxDQUFDO0lBQ1BDLHFCQUFxQjtJQUNyQkMsd0JBQXdCO0lBQ3hCQyxlQUFlO1FBQ1hDLFNBQVM7UUFDVEMsVUFBVTtJQUNkO0lBQ0FDO1FBQ0ksT0FBTztJQUNYO0lBQ0FDO1FBQ0ksT0FBTyxFQUFFO0lBQ2I7SUFDQUM7UUFDSSxPQUFPO0lBQ1g7SUFDQUM7UUFDSSxPQUFPO1lBQ0hDLGNBQWM7UUFDbEI7SUFDSjtJQUNBQztRQUNJLE9BQU87WUFDSEMsVUFBVSxFQUFFO1lBQ1pDLFlBQVksRUFBRTtZQUNkQyxPQUFPLENBQUM7WUFDUkMsaUJBQWlCO1lBQ2pCQztnQkFDSSxPQUFPLEVBQUU7WUFDYjtRQUNKO0lBQ0o7SUFDQUM7UUFDSSxPQUFPLENBQUM7SUFDWjtJQUNBQztRQUNJLE9BQU87SUFDWDtJQUNBQyxVQUFVO1FBQ05DLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsUUFBUTtJQUNaO0FBQ0o7QUFDQSxTQUFTQztJQUNMLE1BQU1DLE1BQU0sT0FBT0MsYUFBYSxjQUFjQSxXQUFXLENBQUM7SUFDMUR0QyxPQUFPcUMsS0FBSzlCO0lBQ1osT0FBTzhCO0FBQ1g7QUFFQSxNQUFNRSxZQUFZO0lBQ2RELFVBQVUvQjtJQUNWaUMsV0FBVztRQUNQQyxXQUFXO0lBQ2Y7SUFDQWQsVUFBVTtRQUNOQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsVUFBVTtRQUNWQyxVQUFVO1FBQ1ZDLFFBQVE7SUFDWjtJQUNBTyxTQUFTO1FBQ0xDLGlCQUFpQjtRQUNqQkMsY0FBYztRQUNkQyxPQUFPO1FBQ1BDLFNBQVM7SUFDYjtJQUNBQyxhQUFhLFNBQVNBO1FBQ2xCLE9BQU8sSUFBSTtJQUNmO0lBQ0F0QyxxQkFBcUI7SUFDckJDLHdCQUF3QjtJQUN4QnNDO1FBQ0ksT0FBTztZQUNIQztnQkFDSSxPQUFPO1lBQ1g7UUFDSjtJQUNKO0lBQ0FDLFVBQVU7SUFDVkMsU0FBUztJQUNUQyxRQUFRLENBQUM7SUFDVEMsZUFBZTtJQUNmQyxpQkFBaUI7SUFDakJDO1FBQ0ksT0FBTyxDQUFDO0lBQ1o7SUFDQUMsdUJBQXNCQyxRQUFRO1FBQzFCLElBQUksT0FBT0osZUFBZSxhQUFhO1lBQ25DSTtZQUNBLE9BQU87UUFDWDtRQUNBLE9BQU9KLFdBQVdJLFVBQVU7SUFDaEM7SUFDQUMsc0JBQXFCQyxFQUFFO1FBQ25CLElBQUksT0FBT04sZUFBZSxhQUFhO1lBQ25DO1FBQ0o7UUFDQUMsYUFBYUs7SUFDakI7QUFDSjtBQUNBLFNBQVNDO0lBQ0wsTUFBTUMsTUFBTSxNQUFrQixHQUFjQyxDQUFNQSxHQUFHLENBQUM7SUFDdEQ5RCxPQUFPNkQsS0FBS3RCO0lBQ1osT0FBT3NCO0FBQ1g7QUFFa0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGVsbGFyLW5leHQvLi9ub2RlX21vZHVsZXMvc3NyLXdpbmRvdy9zc3Itd2luZG93LmVzbS5qcz82YzA5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU1NSIFdpbmRvdyA0LjAuMlxuICogQmV0dGVyIGhhbmRsaW5nIGZvciB3aW5kb3cgb2JqZWN0IGluIFNTUiBlbnZpcm9ubWVudFxuICogaHR0cHM6Ly9naXRodWIuY29tL25vbGltaXRzNHdlYi9zc3Itd2luZG93XG4gKlxuICogQ29weXJpZ2h0IDIwMjEsIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgTUlUXG4gKlxuICogUmVsZWFzZWQgb246IERlY2VtYmVyIDEzLCAyMDIxXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICByZXR1cm4gKG9iaiAhPT0gbnVsbCAmJlxuICAgICAgICB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAnY29uc3RydWN0b3InIGluIG9iaiAmJlxuICAgICAgICBvYmouY29uc3RydWN0b3IgPT09IE9iamVjdCk7XG59XG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0ID0ge30sIHNyYyA9IHt9KSB7XG4gICAgT2JqZWN0LmtleXMoc3JjKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgICAgICBlbHNlIGlmIChpc09iamVjdChzcmNba2V5XSkgJiZcbiAgICAgICAgICAgIGlzT2JqZWN0KHRhcmdldFtrZXldKSAmJlxuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3JjW2tleV0pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGV4dGVuZCh0YXJnZXRba2V5XSwgc3JjW2tleV0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmNvbnN0IHNzckRvY3VtZW50ID0ge1xuICAgIGJvZHk6IHt9LFxuICAgIGFkZEV2ZW50TGlzdGVuZXIoKSB7IH0sXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHsgfSxcbiAgICBhY3RpdmVFbGVtZW50OiB7XG4gICAgICAgIGJsdXIoKSB7IH0sXG4gICAgICAgIG5vZGVOYW1lOiAnJyxcbiAgICB9LFxuICAgIHF1ZXJ5U2VsZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgcXVlcnlTZWxlY3RvckFsbCgpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH0sXG4gICAgZ2V0RWxlbWVudEJ5SWQoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgY3JlYXRlRXZlbnQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbml0RXZlbnQoKSB7IH0sXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjcmVhdGVFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgY2hpbGROb2RlczogW10sXG4gICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGUoKSB7IH0sXG4gICAgICAgICAgICBnZXRFbGVtZW50c0J5VGFnTmFtZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY3JlYXRlRWxlbWVudE5TKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcbiAgICBpbXBvcnROb2RlKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIGhhc2g6ICcnLFxuICAgICAgICBob3N0OiAnJyxcbiAgICAgICAgaG9zdG5hbWU6ICcnLFxuICAgICAgICBocmVmOiAnJyxcbiAgICAgICAgb3JpZ2luOiAnJyxcbiAgICAgICAgcGF0aG5hbWU6ICcnLFxuICAgICAgICBwcm90b2NvbDogJycsXG4gICAgICAgIHNlYXJjaDogJycsXG4gICAgfSxcbn07XG5mdW5jdGlvbiBnZXREb2N1bWVudCgpIHtcbiAgICBjb25zdCBkb2MgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQgOiB7fTtcbiAgICBleHRlbmQoZG9jLCBzc3JEb2N1bWVudCk7XG4gICAgcmV0dXJuIGRvYztcbn1cblxuY29uc3Qgc3NyV2luZG93ID0ge1xuICAgIGRvY3VtZW50OiBzc3JEb2N1bWVudCxcbiAgICBuYXZpZ2F0b3I6IHtcbiAgICAgICAgdXNlckFnZW50OiAnJyxcbiAgICB9LFxuICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIGhhc2g6ICcnLFxuICAgICAgICBob3N0OiAnJyxcbiAgICAgICAgaG9zdG5hbWU6ICcnLFxuICAgICAgICBocmVmOiAnJyxcbiAgICAgICAgb3JpZ2luOiAnJyxcbiAgICAgICAgcGF0aG5hbWU6ICcnLFxuICAgICAgICBwcm90b2NvbDogJycsXG4gICAgICAgIHNlYXJjaDogJycsXG4gICAgfSxcbiAgICBoaXN0b3J5OiB7XG4gICAgICAgIHJlcGxhY2VTdGF0ZSgpIHsgfSxcbiAgICAgICAgcHVzaFN0YXRlKCkgeyB9LFxuICAgICAgICBnbygpIHsgfSxcbiAgICAgICAgYmFjaygpIHsgfSxcbiAgICB9LFxuICAgIEN1c3RvbUV2ZW50OiBmdW5jdGlvbiBDdXN0b21FdmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBhZGRFdmVudExpc3RlbmVyKCkgeyB9LFxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7IH0sXG4gICAgZ2V0Q29tcHV0ZWRTdHlsZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldFByb3BlcnR5VmFsdWUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIEltYWdlKCkgeyB9LFxuICAgIERhdGUoKSB7IH0sXG4gICAgc2NyZWVuOiB7fSxcbiAgICBzZXRUaW1lb3V0KCkgeyB9LFxuICAgIGNsZWFyVGltZW91dCgpIHsgfSxcbiAgICBtYXRjaE1lZGlhKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbiAgICB9LFxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH0sXG59O1xuZnVuY3Rpb24gZ2V0V2luZG93KCkge1xuICAgIGNvbnN0IHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge307XG4gICAgZXh0ZW5kKHdpbiwgc3NyV2luZG93KTtcbiAgICByZXR1cm4gd2luO1xufVxuXG5leHBvcnQgeyBleHRlbmQsIGdldERvY3VtZW50LCBnZXRXaW5kb3csIHNzckRvY3VtZW50LCBzc3JXaW5kb3cgfTtcbiJdLCJuYW1lcyI6WyJpc09iamVjdCIsIm9iaiIsImNvbnN0cnVjdG9yIiwiT2JqZWN0IiwiZXh0ZW5kIiwidGFyZ2V0Iiwic3JjIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJsZW5ndGgiLCJzc3JEb2N1bWVudCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwibm9kZU5hbWUiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRyZW4iLCJjaGlsZE5vZGVzIiwic3R5bGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUVsZW1lbnROUyIsImltcG9ydE5vZGUiLCJsb2NhdGlvbiIsImhhc2giLCJob3N0IiwiaG9zdG5hbWUiLCJocmVmIiwib3JpZ2luIiwicGF0aG5hbWUiLCJwcm90b2NvbCIsInNlYXJjaCIsImdldERvY3VtZW50IiwiZG9jIiwiZG9jdW1lbnQiLCJzc3JXaW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwicHVzaFN0YXRlIiwiZ28iLCJiYWNrIiwiQ3VzdG9tRXZlbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIkltYWdlIiwiRGF0ZSIsInNjcmVlbiIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJtYXRjaE1lZGlhIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImlkIiwiZ2V0V2luZG93Iiwid2luIiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ssr-window/ssr-window.esm.js\n");

/***/ })

};
;