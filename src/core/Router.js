// 라우팅 생성

// template
import Contents from "../components/Contents";
import Lists from "../components/Lists";
import Item from "../components/Item";

const routes = {
    '/': 'contents',
    '/list': 'list',
    '/item': 'item'
}

// entry point
function initialRoutes (mode, el, props) {
    renderComponent(el, routes['/'], props);

    if (mode === 'history') {
        // history 에 저장되어 있는 데이터를 다시 사용할 수 있을 때 발생 (뒤로가기 등)
        window.onpopstate = () => {
            renderComponent(el, routes['/'], props);
            // window.history.pushState({}, pathName, window.location.origin + pathName);
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

    window.onpopstate = () => {
        renderComponent(el, routes['/'], props);
        // window.history.pushState({}, pathName, window.location.origin + pathName);
    }
    // renderHTML(el, routes[pathName]);
}

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
    console.log(route);
    switch (route) {
        case 'contents' :
            new Contents(el, props);
            break;
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

//
// /**
//  * Router 코드 변경
//  */
//
// export default class Router {
//     $state;
//
//     constructor () {
//         this.$state = { routes: [], parent: null };
//     }
//
//     setRouterState ($routes, $parents) {
//         this.$state = { $routes, $parents };
//     }
//
//     useRouter () {
//         const { routes, parents } = this.$state;
//         if (!parents) {
//             document.body.innerHTML = 'ERROR!';
//             return;
//         }
//
//         // 설정된 routes 중에서 현재 pathname 과 동일한 path 를 갖는 route 가 있으면 true , 없으면 false 를 리턶
//         const potentialMatches = routes.map((route) => {
//             return {
//                 route,
//                 result: location.pathname === route.path
//             };
//         });
//
//         const match = potentialMatches.find((potentialMatch) =>
//             potentialMatch !== false
//         );
//
//         if (!match) {
//             document.body.innerHTML = 'ERROR!';
//             return;
//         }
//
//         // match 에 해당하는 route 의 event 를 실행하는 코드 필요
//         // parent 값에 component 가 하위 요소로 들어가야 함
//         console.log('라우터 기능입니다.')
//     }
//
//     navigateTo ($url) {
//         history.pushState(null, null, $url);
//         this.useRouter();
//     }
// }
