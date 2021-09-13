import Component from "../core/Component.js";
import { initialRoutes, hashRoutePush, historyRoutePush } from "../core/Router.js";

/**
 *  라우팅에 따라 lists / item 으로 이동
 *  1. url : window.location.origin + pathName
 *  2. url 에 따라 id 가 contents 인 div 영역에 자식 컴포넌트 마운트
 */
export default class Contents extends Component {
    setup() {
        this.$state = { items : ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'] };
    }

    template() {
        return `
            <div class="tile">
                <div id="contents"></div>
            </div>
        `
    }

    // 자식 컴포넌트를 마운트 해주어야 함
    mounted() {
        const { listItems } = this;
        const $contents = this.$target.querySelector('#contents');
        // console.log(listItems);
        // console.log('Contents.js > mounted()')

        // 페이지 초기화
        initialRoutes('history', $contents, { listItems });
    }
    get listItems() {
        const {items} = this.$state;
        return items;
    }
}
