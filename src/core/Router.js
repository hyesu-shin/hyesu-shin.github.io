// 라우팅 생성

// template
import Component from "../core/Component.js";
import Lists from "../components/Lists.js";
import Item from "../components/Item.js";
// const ListsTemplate = Lists.prototype.template();
// const ItemTemplate = Item.prototype.template();

const routes = {
    '/': Lists,
    '/item': Item
}

/**
 * 기본 라우팅 코드를 컴포넌트 렌더링 환경에 맞도록 변경
 * @param mode
 * @param el
 */
// entry point
function initialRoutes (mode, el, props) {
    renderComponent(el, routes[window.location.pathname], props);

    if (mode === 'history') {
        let pathName = window.location.pathname;
        // history 에 저장되어 있는 데이터를 다시 사용할 수 있을 때 발생 (뒤로가기 등)
        window.onpopstate = () => {
            renderComponent(el, routes[pathName], props);
            window.history.pushState({}, pathName, window.location.origin + pathName);
        }
    } else {
        window.addEventListener('hashchange', () => {
            return renderComponent(el, getHashRoute(), props);
        });
    }
}

// set browser history
function historyRoutePush (pathName, el, props) {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    renderComponent(el, routes[pathName], props);
    // renderHTML(el, routes[pathName]);
}

// render
// function renderHTML (el, route) {
//     el.innerHTML = route
// }

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
    new route(el, props);
}

export {
    initialRoutes,
    historyRoutePush,
    hashRoutePush
}
