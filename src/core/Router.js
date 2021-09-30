// 라우팅 생성

// template
// import Contents from "../components/Contents";
import Lists from "../components/Lists";
import Item from "../components/Item";

const routes = {
    '/list': 'list',
    '/item': 'item'
}

// entry point
function initialRoutes (mode, el, props) {
    // renderComponent(el, routes['/'], props);
    window.history.pushState({}, '/list', window.location.origin + '/list');

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
    console.log('경로이름', pathName, el, props);
    window.history.pushState({}, pathName, window.location.origin + pathName);
    renderComponent(el, routes[pathName], props);

    // 뒤로가기, 앞으로가기 이벤트
    window.onpopstate = (event) => {
        let beforePathName = event.path[0].location.pathname;
        console.log('뒤로가기이벤트', beforePathName);
        console.log(window.getEventListeners);
        renderComponent(el, routes[beforePathName], props);
        window.history.replaceState({}, beforePathName, window.location.origin + beforePathName);
    }
}

/**
 * TODO :: 기능 분리
 *
 * 1. initialRoutes 함수 : 초기화 - contents.js 에서
 * 2. historyRoutePush 함수 : 이동 - 클릭이벤트 발생하면 이동하는 함수
 * 3. historyRouteInit 함수 : 발생 이벤트 초기화 하는 함수 - 새로고침, 뒤로가기 로직 정리
 */


// get hash history route
function getHashRoute () {
    let route = '/';

    Object.keys(routes).forEach(hashRoute => {
        if (window.location.hash.replace('#', '') === hashRoute.replace('/', '')) {
            route = routes[hashRoute];
        }
    });

    return route;
}

function hashRoutePush (pathName, el, props) {
    renderComponent(el, routes[pathName], props);
}

// 컴포넌트를 화면에 붙이는 코드
function renderComponent (el, route, props) {
    switch (route) {
        case 'list' :
            new Lists(el, props);
            break;
        case 'item' :
            new Item(el, props) ;
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
