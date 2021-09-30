// 라우팅 생성

import Lists from "../components/Lists";
import Item from "../components/Item";

const routes = {
    '/' : 'init',
    '/list': 'list',
    '/item': 'item'
}

// entry point
function initialRoutes (mode, el, props) {
    renderComponent(el, routes['/'], props);
    window.history.replaceState({}, '/', window.location.origin + '/list');

    // window.history.pushState({}, '/', window.location.origin);
    // if (mode === 'history') {
    //     // history 에 저장되어 있는 데이터를 다시 사용할 수 있을 때 발생 (뒤로가기 등)
    //     window.onpopstate = () => {
    //         renderComponent(el, routes['/'], props);
    //         // window.history.pushState({}, pathName, window.location.origin + pathName);
    //     }
    // } else {
    //     window.addEventListener('hashchange', () => {
    //         return renderComponent(el, getHashRoute(), props);
    //     });
    // }
}

// set browser history
function historyRoutePush (pathName, el, props) {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    renderComponent(el, routes[pathName], props);

    // 뒤로가기, 앞으로가기 이벤트
    window.onpopstate = (event) => {
        let beforeUrl = event.path[0].location.href;
        let beforePathName = event.path[0].location.pathname;
        renderComponent(el, routes[beforePathName], props);
        window.history.replaceState({}, beforePathName, beforeUrl);
    }
}

// get hash history route
// function getHashRoute () {
//     let route = '/';
//
//     Object.keys(routes).forEach(hashRoute => {
//         if (window.location.hash.replace('#', '') === hashRoute.replace('/', '')) {
//             route = routes[hashRoute];
//         }
//     });
//
//     return route;
// }

function hashRoutePush (pathName, el, props) {
    renderComponent(el, routes[pathName], props);
}

// 컴포넌트를 화면에 붙이는 코드
function renderComponent (el, route, props) {
    switch (route) {
        case 'init' :
            new Lists(el, props, true);
            break;
        case 'list' :
            new Lists(el, props, false);
            break;
        case 'item' :
            new Item(el, props, false) ;
            break;
        default:
            break;
    }
}

export {
    initialRoutes,
    historyRoutePush
    // hashRoutePush
}
