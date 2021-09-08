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
    return renderComponent(el, routes['/'], props);
    // window.onpopstate = () => renderHTML(el, routes[window.location.pathname]);
    if (mode === 'history') {
        // console.log('router.js > props', props)
        // console.log('router.js > initialRoutes()')
        renderComponent(el, routes['/'], props);
        window.onpopstate = () => renderComponent(el, routes[window.location.pathname]);
    } else {
        window.addEventListener('hashchange', () => {
            return renderComponent(el, getHashRoute(), props);
        });
    }
}

// set browser history
function historyRouterPush (pathName, el, props) {
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

function renderComponent (el, route, props) {
    // console.log('router.js > renderComponent()')
    // console.log(Lists);
    // console.log(props);
    // console.log(el, route);
    new route(el, props);
}

export {
    initialRoutes,
    historyRouterPush
}
